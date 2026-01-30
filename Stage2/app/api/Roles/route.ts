// app/api/services/create/route.ts (Next.js App Router)
import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/serverclient";
import { prisma } from "@/lib/prisma";
export async function GET(req: NextRequest) {

  try{
      // 1️ Create Supabase server client with cookies
  const supabase = await createSupabaseServerClient();

  // 2️ Get the logged-in user
  const { data: { user }, error } = await supabase.auth.getUser();
  if (error || !user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const therole = await prisma.profile.findUnique({
    where: { id: user.id },
    select: { role: true },
  });
  const role = therole?.role 
  console.log(role)

  return NextResponse.json({success: true, role});

  }
  catch (error) {
    return NextResponse.json({ success: false });
  }

}
