import { NextResponse, type NextRequest } from "next/server";

// Redirect visitors who arrived over plain HTTP to HTTPS. Cloudflare sends
// CF-Visitor with the scheme the visitor used; Next.js itself marks every
// request without TLS as http, so x-forwarded-proto cannot be used here.
export function middleware(request: NextRequest) {
  const visitor = request.headers.get("cf-visitor");
  if (process.env.NODE_ENV === "production" && visitor && visitor.includes('"scheme":"http"')) {
    const url = request.nextUrl.clone();
    url.protocol = "https:";
    return NextResponse.redirect(url, 301);
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/((?!_next/static|_next/image|favicon.ico).*)",
};
