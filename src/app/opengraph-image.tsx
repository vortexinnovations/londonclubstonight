import { ImageResponse } from 'next/og';

export const alt = 'London Clubs Tonight — the insider guide to London nightclubs';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg, #07060b 0%, #14111e 55%, #1e1a2c 100%)',
          padding: 72,
          fontFamily: 'Arial, sans-serif',
          position: 'relative',
        }}
      >
        {/* Neon accent wash */}
        <div
          style={{
            position: 'absolute',
            top: -160,
            left: -120,
            width: 620,
            height: 620,
            borderRadius: 9999,
            background: 'radial-gradient(circle, rgba(139,92,246,0.55) 0%, rgba(139,92,246,0) 70%)',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -200,
            right: -140,
            width: 640,
            height: 640,
            borderRadius: 9999,
            background: 'radial-gradient(circle, rgba(217,70,239,0.45) 0%, rgba(217,70,239,0) 70%)',
            display: 'flex',
          }}
        />

        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 9999,
              background: '#e879f9',
              display: 'flex',
            }}
          />
          <div
            style={{
              fontSize: 24,
              letterSpacing: 6,
              color: '#c4b5fd',
              fontWeight: 700,
              display: 'flex',
            }}
          >
            MAYFAIR · SOHO · WEST END
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 104,
              fontWeight: 800,
              color: '#ffffff',
              letterSpacing: -3,
              lineHeight: 1,
              display: 'flex',
            }}
          >
            London Clubs
          </div>
          <div
            style={{
              fontSize: 104,
              fontWeight: 800,
              letterSpacing: -3,
              lineHeight: 1.1,
              color: '#e879f9',
              display: 'flex',
            }}
          >
            Tonight
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 30,
              color: '#a9a5b6',
              maxWidth: 900,
              lineHeight: 1.4,
              display: 'flex',
            }}
          >
            Which clubs are open tonight, what each door actually wants, and
            tables or guestlist sorted over WhatsApp.
          </div>
        </div>

        <div
          style={{
            fontSize: 26,
            color: '#716d7e',
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <span>londonclubstonight.com</span>
          <span style={{ color: '#25d366' }}>Replies in minutes</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
