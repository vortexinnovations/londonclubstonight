import { ImageResponse } from 'next/og';

// 48 by 48: Google Search asks for a square favicon whose side is a multiple
// of 48 pixels (the same design as before, scaled up from 32).
export const size = { width: 48, height: 48 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 48,
          height: 48,
          background: 'linear-gradient(135deg, #1e1a2c 0%, #07060b 100%)',
          borderRadius: 12,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1.5px solid #8b5cf6',
          fontFamily: 'Arial, sans-serif',
          fontWeight: 'bold',
          fontSize: 20,
          letterSpacing: -0.75,
          color: '#e879f9',
        }}
      >
        LC
      </div>
    ),
    { ...size }
  );
}
