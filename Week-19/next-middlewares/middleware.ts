import { NextRequest, NextResponse } from "next/server";

let requestCount = 0;
let isLoggedIn = false;

export function middleware(req:NextRequest)
{
    if(req.nextUrl.pathname.startsWith('/api')){
        requestCount++;
        console.log(requestCount);
    }
    if(req.nextUrl.pathname.startsWith('/admin')){
        if(!isLoggedIn) return NextResponse.redirect(new URL('/signin',req.url))
    }
    return NextResponse.next();
}

// Approach 1
// export const config = {
//     matcher: '/api/:path*'
// }