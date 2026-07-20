import {
  getWhatsAppTableUrl,
  getWhatsAppGuestlistUrl,
  getWhatsAppTonightUrl,
  getWhatsAppGuestlistTonightUrl,
} from '@/lib/clubs';

interface WhatsAppCTAProps {
  clubName?: string;
  variant?: 'inline' | 'sticky' | 'hero' | 'tonight';
  heading?: string;
}

function TrustLine() {
  return (
    <p className="flex items-center justify-center gap-2 text-xs text-frost-500 mt-4">
      <span className="live-dot live-dot-green scale-75" aria-hidden />
      Replies in minutes&nbsp;&middot;&nbsp;No booking fees&nbsp;&middot;&nbsp;Same-night bookings
    </p>
  );
}

export default function WhatsAppCTA({ clubName, variant = 'inline', heading }: WhatsAppCTAProps) {
  const tableUrl = getWhatsAppTableUrl(clubName);
  const guestlistUrl = getWhatsAppGuestlistUrl(clubName);

  if (variant === 'tonight') {
    const tonightTableUrl = getWhatsAppTonightUrl(clubName);
    const tonightGuestlistUrl = getWhatsAppGuestlistTonightUrl(clubName);

    return (
      <div className="glass-card relative overflow-hidden p-8 md:p-12 text-center">
        <div className="glow-orb w-[400px] h-[300px] bg-neon-500/25 -top-32 -left-20" aria-hidden />
        <div className="glow-orb w-[350px] h-[280px] bg-glow-500/20 -bottom-28 -right-16" aria-hidden style={{ animationDelay: '-7s' }} />
        <div className="relative">
          <span className="chip chip-accent mb-5">
            <span className="live-dot scale-75" aria-hidden /> TONIGHT
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white mb-3 tracking-tight">
            {heading || 'Need a Table Tonight?'}
          </h2>
          <p className="text-frost-300 mb-8 max-w-md mx-auto">
            Message us on WhatsApp — we respond in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
            <a
              href={tonightTableUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp py-4 px-8 text-base"
            >
              <WhatsAppIcon />
              Book Table Tonight
            </a>
            <a
              href={tonightGuestlistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost py-4 px-8 text-base"
            >
              <WhatsAppIcon />
              Guestlist Tonight
            </a>
          </div>
          <TrustLine />
        </div>
      </div>
    );
  }

  if (variant === 'sticky') {
    return (
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-night-950/85 backdrop-blur-xl border-t border-white/[0.08] p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] lg:hidden">
        <div className="flex gap-3 max-w-lg mx-auto">
          <a
            href={tableUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp flex-1 py-3 px-4 text-sm"
          >
            <WhatsAppIcon />
            Book a Table
          </a>
          <a
            href={guestlistUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost flex-1 py-3 px-4 text-sm"
          >
            Join Guestlist
          </a>
        </div>
      </div>
    );
  }

  if (variant === 'hero') {
    return (
      <div className="flex flex-col items-center">
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a
            href={tableUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp py-4 px-9 text-base"
          >
            <WhatsAppIcon />
            Book a Table
          </a>
          <a
            href={guestlistUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost py-4 px-9 text-base"
          >
            <WhatsAppIcon />
            Join Guestlist
          </a>
        </div>
        <TrustLine />
      </div>
    );
  }

  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <a
        href={tableUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-whatsapp py-3 px-7 text-sm"
      >
        <WhatsAppIcon />
        Book a Table
      </a>
      <a
        href={guestlistUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-ghost py-3 px-7 text-sm"
      >
        <WhatsAppIcon />
        Join Guestlist
      </a>
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
