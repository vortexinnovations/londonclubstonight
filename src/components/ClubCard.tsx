import Link from 'next/link';
import type { Club } from '@/lib/clubs';

interface ClubCardProps {
  club: Club;
  featured?: boolean;
  showArea?: boolean;
}

export default function ClubCard({ club, featured = false, showArea = true }: ClubCardProps) {
  return (
    <Link
      href={`/clubs/${club.slug}`}
      className={`group relative block bg-[#141414] border border-[#222] rounded-2xl transition-all duration-500 hover:border-[#444] hover:shadow-[0_0_40px_rgba(255,255,255,0.04)] hover:-translate-y-0.5 overflow-hidden ${
        featured ? 'p-8 md:p-10' : 'p-6 md:p-7'
      }`}
    >
      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />

      <div className="relative z-10">
        {/* Club name */}
        <h3
          className={`font-bold text-white text-center tracking-tight ${
            featured ? 'text-2xl md:text-3xl' : 'text-xl'
          }`}
        >
          {club.name}
        </h3>

        {/* Tagline */}
        <p
          className={`text-[#999] text-center leading-relaxed ${
            featured ? 'text-sm md:text-base mt-4' : 'text-sm mt-3'
          }`}
        >
          {club.tagline}
        </p>

        {/* Music genres */}
        <div className="flex flex-wrap justify-center gap-2 mt-5">
          {club.musicGenres.map((genre) => (
            <span
              key={genre}
              className="text-xs bg-white/5 text-[#aaa] px-3 py-1 rounded-full border border-white/[0.04]"
            >
              {genre}
            </span>
          ))}
        </div>

        {/* Bottom info: area + table minimum */}
        <div className="flex items-center justify-center gap-3 mt-6 text-xs text-[#666]">
          {showArea && (
            <>
              <span>{club.area}</span>
              <span className="text-[#333]">&middot;</span>
            </>
          )}
          <span>Tables from {club.tableMinimum}</span>
        </div>

        {/* View Details link */}
        <div className="text-center mt-5">
          <span className="text-sm text-[#C0C0C0] group-hover:text-white transition-colors duration-300">
            View Details →
          </span>
        </div>
      </div>
    </Link>
  );
}
