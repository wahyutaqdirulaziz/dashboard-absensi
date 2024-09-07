import { NextResponse, NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const url = request.nextUrl.clone();

    // Misalnya, memeriksa token di cookies
    const token = request.cookies.get('token');
    if (!token) {
        url.pathname = '/login'; // Mengarahkan pengguna ke halaman login
        return NextResponse.redirect(url);
    }

    return NextResponse.next(); // Melanjutkan ke rute berikutnya
}