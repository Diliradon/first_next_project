import {NextResponse, type NextRequest} from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  const thenePreference = request.cookies.get("theme");

  if (!thenePreference) {
    response.cookies.set("theme", "dark");
  }

  response.headers.set("custom-header", "custom-value")

  return response;
}
