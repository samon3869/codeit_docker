import type {NextRequest} from 'next/server';
import {NextResponse} from 'next/server';

export async function middleware(request: NextRequest) {
    const {method, url} = request;
    const {pathname} = new URL(url);
    const now = new Date();

    console.log(`| ${method} | ${pathname} | ${now} |`);

    return NextResponse.next();
}