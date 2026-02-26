import { NextResponse, type NextRequest } from "next/server";
import { getUserRole } from "@/lib/auth";
import { createSupabaseServerClient } from "@/lib/supabase/serverclient";

export async function proxy(request: NextRequest) {
  const response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabase = await createSupabaseServerClient();

  const { data: { user }} = await supabase.auth.getUser();
  console.log({ user });


  // Redirect non-authenticated users away from protected routes
  if (request.nextUrl.pathname.startsWith("/Services")) {
  if (!user) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  }

  if (request.nextUrl.pathname.startsWith("/AdminDashboard")) {
    
  if (!user) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  
  let role = await getUserRole(user.id);
    if (role !== "admin") {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  if (request.nextUrl.pathname.startsWith("/ProviderDashboard")) {
    if (!user) {
    return NextResponse.redirect(new URL("/", request.url));
  }
     let role = await getUserRole(user.id);
    if (role !== "provider") {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }
  return response;
}
