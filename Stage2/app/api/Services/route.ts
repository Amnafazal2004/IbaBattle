import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/serverclient";
import { canUser } from "@/lib/ability"; // your RBAC helper
import client, { connectRedis } from "@/lib/redis";

export async function POST(request: NextRequest) {
  console.log("Api route hit");
  try {
    await connectRedis()
    // 1️ Create Supabase server client with cookies
    const supabase = await createSupabaseServerClient();

    // 2️ Get the logged-in user
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();
    console.log("here", user);
    if (error || !user)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    // 3️ Check RBAC permission
    const allowed = await canUser(user.id, "service:create");
    console.log("here 2", allowed);
    if (!allowed)
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });

    const formData = await request.formData();
    const id = formData.get("id") as string;
    const title = formData.get("title") as string;
    const desc = formData.get("desc") as string;
    const category = formData.get("category") as string;
    const neighbour = formData.get("neighbour") as string;
    const pricestr = formData.get("price") as string;
    const price = Number(pricestr);
    console.log("got data");
    const services = {
        title: title,
      description: desc,
      category: category,
      neighbourhood: neighbour,
      price: pricestr,

    }

    await prisma.services.create({
      data: {
        title: title,
        description: desc,
        category: category,
        neighbour: neighbour,
        price: price,

        authorId: id,
      },
    });
    console.log("added in db");

     try {
     await client.hSet('services', id , JSON.stringify(services));
     await client.hexpire('services',10)
    
    } catch (redisError) {
      console.error("Redis list error:", redisError);
      // Continue even if Redis fails
    }
     console.log("added in redis");

    return NextResponse.json({ success: true, message: "service added" });
  } catch (error) {
    return NextResponse.json({ success: false, message: error });
  }
}

export async function GET(request: Request) {
  try {
    await connectRedis();

    const cachedServices = await client.hGetAll('services');

    if (cachedServices && Object.keys(cachedServices).length > 0) {
      // Parse JSON strings to objects
      const services = Object.values(cachedServices).map((s) => JSON.parse(s));
      return NextResponse.json({ success: true, services, source: 'redis' });
    } 
    else{
        const services = await prisma.services.findMany();
         return NextResponse.json({ success: true, services, source: "db" });

    }
  } catch (error) {
    return NextResponse.json({ success: false });
  }
}


//if only get services of one user 
// const cachedService = await client.hGet('services', id);
// if (cachedService) {
//   const service = JSON.parse(cachedService);
//   return NextResponse.json({ success: true, service, source: 'redis' });
// }


// We add them to a Redis hash called "services":
// HSET "services" "1" '{"id":"1","title":"Cleaning","price":50}'
// HSET "services" "2" '{"id":"2","title":"Plumbing","price":100}'

// Fetch all services with HGETALL
// Redis returns:
// {
//   "1": "{\"id\":\"1\",\"title\":\"Cleaning\",\"price\":50}",
//   "2": "{\"id\":\"2\",\"title\":\"Plumbing\",\"price\":100}",
//   "3": "{\"id\":\"3\",\"title\":\"Gardening\",\"price\":70}"
// }
// Keys = service IDs
// Values = JSON strings of service objects

// : Convert to array of objects
// const servicesArray = Object.values(cachedServices).map((s) => JSON.parse(s));
// Resulting JS array:
// [
//   { "id": "1", "title": "Cleaning", "price": 50 },
//   { "id": "2", "title": "Plumbing", "price": 100 },
// ]
//  This is exactly what your API GET endpoint would return.