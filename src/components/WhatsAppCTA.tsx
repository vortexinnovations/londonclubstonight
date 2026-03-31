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

export default function WhatsAppCTA({ clubName, variant = 'inline', heading }: WhatsAppCTAProps) {
  const tableUrl = getWhatsAppTableUrl(clubName);
  const guestlistUrl = getWhatsAppGuestlistUrl(clubName);

  if (variant === 'tonight') {
    const tonightTableUrl = getWhatsAppTonightUrl(clubName);
    const tonightGuestlistUrl = getWhatsAppGuestlistTonightUrl(clubName);

    return (
      <div className="bg-[#141414] border border-[#222] rounded-2xl p-8 md:p-10 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
          {heading || 'Need a Table Tonight?'}
        </h2>
        <p className="text-[#BBB] mb-6">
          Message us on WhatsApp — we respond in minutes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
          <a
            href={tonightTableUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#20BD5A] text-[#003d20] text-center py-4 px-8 rounded-lg font-semibold text-base transition-colors flex items-center justify-center gap-2"
          >
            <WhatsAppIcon />
            Book Table Tonight
          </a>
          <a
            href={tonightGuestlistUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white/15 text-white text-center py-4 px-8 rounded-lg font-semibold text-base transition-colors border border-white/20 flex items-center justify-center gap-2"
          >
            <WhatsAppIcon />
            Guestlist Tonight
          </a>
        </div>
      </div>
    );
  }

  if (variant === 'sticky') {
    return (
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#0A0A0A]/95 backdrop-blur-md border-t border-[#222] p-3 lg:hidden">
        <div className="flex gap-3 max-w-lg mx-auto">
          <a
            href={tableUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-[#25D366] hover:bg-[#20BD5A] text-[#003d20] text-center py-3 px-4 rounded-lg font-semibold text-sm transition-colors flex items-center justify-center gap-2"
          >
            <WhatsAppIcon />
            Book a Table
          </a>
          <a
            href={guestlistUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-white/10 hover:bg-white/15 text-white text-center py-3 px-4 rounded-lg font-semibold text-sm transition-colors border border-white/20"
          >
            Join Guestlist
          </a>
        </div>
      </div>
    );
  }

  if (variant === 'hero') {
    return (
      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        <a
          href={tableUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] hover:bg-[#20BD5A] text-[#003d20] text-center py-4 px-8 rounded-lg font-semibold text-base transition-colors flex items-center justify-center gap-2"
        >
          <WhatsAppIcon />
          Book a Table
        </a>
        <a
          href={guestlistUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/10 hover:bg-white/15 text-white text-center py-4 px-8 rounded-lg font-semibold text-base transition-colors border border-white/20 flex items-center justify-center gap-2"
        >
          <WhatsAppIcon />
          Join Guestlist
        </a>
      </div>
    );
  }

  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <a
        href={tableUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] hover:bg-[#20BD5A] text-[#003d20] text-center py-3 px-6 rounded-lg font-semibold text-sm transition-colors flex items-center justify-center gap-2"
      >
        <WhatsAppIcon />
        Book a Table
      </a>
      <a
        href={guestlistUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white/10 hover:bg-white/15 text-white text-center py-3 px-6 rounded-lg font-semibold text-sm transition-colors border border-white/20 flex items-center justify-center gap-2"
      >
        <WhatsAppIcon />
        Join Guestlist
      </a>
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
