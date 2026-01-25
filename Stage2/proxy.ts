import { NextResponse, type NextRequest } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/serverclient";

export async function proxy(request: NextRequest) {
  const response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  console.log ({ user });

  // Redirect non-authenticated users away from protected routes
  if (!user && request.nextUrl.pathname.startsWith("/Services")) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  return response;
}