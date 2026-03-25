import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: '#0A0A0A',
          borderRadius: 6,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1.5px solid #C0C0C0',
          fontFamily: 'Arial, sans-serif',
          fontWeight: 'bold',
          fontSize: 14,
          color: '#FFFFFF',
          letterSpacing: -0.5,
        }}
      >
        LC
      </div>
    ),
    { ...size }
  );
}
