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
          background: 'linear-gradient(135deg, #1e1a2c 0%, #07060b 100%)',
          borderRadius: 8,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid #8b5cf6',
          fontFamily: 'Arial, sans-serif',
          fontWeight: 'bold',
          fontSize: 13,
          letterSpacing: -0.5,
          color: '#e879f9',
        }}
      >
        LC
      </div>
    ),
    { ...size }
  );
}
