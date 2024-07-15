// @ts-nocheck

import { NextResponse } from "next/server";

export function middleware(request) {
  const url = request.nextUrl;
  const hostname = request.headers.get("host");

  console.log("Middleware executed", { hostname, pathname: url.pathname });

  // Check if we're on localhost
  const isLocalhost =
    hostname.includes("localhost") || hostname.includes("127.0.0.1");

  // Extract subdomain
  let subdomain;
  if (isLocalhost) {
    // For localhost, split on '.' and take all parts except the last one (which should be 'localhost')
    const parts = hostname.split(":");
    const domainParts = parts[0].split(".");
    subdomain =
      domainParts.length > 1 ? domainParts.slice(0, -1).join(".") : null;
  } else {
    // For production, split on '.' and take all but the last two parts
    const parts = hostname.split(".");
    subdomain = parts.length > 2 ? parts.slice(0, -2).join(".") : null;
  }

  console.log("Extracted subdomain:", subdomain);

  // Check if it's a subdomain we want to handle
  if (subdomain && subdomain !== "www") {
    // Rewrite the URL for subdomains
    url.pathname = `/${subdomain}${url.pathname}`;
    console.log("Rewriting to:", url.pathname);
    return NextResponse.rewrite(url);
  }

  // For main domain and localhost without subdomain, don't rewrite
  console.log("No rewrite needed");
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
