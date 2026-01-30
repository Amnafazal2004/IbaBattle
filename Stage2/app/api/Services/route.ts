import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/serverclient";
import { canUser } from "@/lib/ability"; // your RBAC helper

export async function POST(request: NextRequest) {
  console.log("Api route hit");
  try {

     // 1️ Create Supabase server client with cookies
      const supabase = await createSupabaseServerClient();
    
      // 2️ Get the logged-in user
      const { data: { user }, error } = await supabase.auth.getUser();
      console.log("here", user)
      if (error || !user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    
      // 3️ Check RBAC permission
      const allowed = await canUser(user.id, "service:create");
      console.log("here 2", allowed)
      if (!allowed) return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    
    const formData = await request.formData();
    const id = formData.get("id") as string;
    const title = formData.get("title") as string;
    const desc = formData.get("desc") as string;
    const category = formData.get("category") as string;
    const neighbour = formData.get("neighbour") as string;
    const pricestr = formData.get("price") as string;
    const price = Number(pricestr);
    console.log("got data");
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
    return NextResponse.json({ success: true, message: "service added" });
  } catch (error) {
    return NextResponse.json({ success: false, message: error });
  }
}

export async function GET(request: Request) {
  try {
    const services = await prisma.services.findMany();
    return NextResponse.json({ success: true, services });
  } catch (error) {
    return NextResponse.json({ success: false });
  }
}
