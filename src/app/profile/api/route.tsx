import { cookies, headers } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const headerList = headers();

  // cookies().set("resultsPerPage", "20");
  cookies().set("thirty", "30");


  const theme = request.cookies.get("theme");
  console.log(theme);
  console.log(cookies().get("resultsPerPage"));

  console.log(headerList.get("Authorization"));
  console.log(requestHeaders.get("Authorization"));

  return new Response("<h1>Profile API data</h1>", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "theme=dark"
    }
  })
}