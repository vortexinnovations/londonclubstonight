import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Validate image proxy requests
  if (pathname.startsWith('/gallery/images/')) {
    const imagePath = pathname.replace('/gallery/images/', '');

    // Block path traversal
    if (imagePath.includes('..') || imagePath.includes('//')) {
      return new NextResponse('Invalid path', { status: 400 });
    }

    // Only allow image file extensions
    if (!/^[a-zA-Z0-9._-]+\.(jpg|jpeg|png|webp|gif)$/i.test(imagePath)) {
      return new NextResponse('Invalid file type', { status: 400 });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/gallery/images/:path*'],
};
