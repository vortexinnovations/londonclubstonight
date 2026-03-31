import Link from 'next/link';
import Image from 'next/image';
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
      className={`group relative block bg-[#141414] border border-[#222] rounded-2xl transition-all duration-500 hover:border-[#444] hover:shadow-[0_0_40px_rgba(255,255,255,0.04)] hover:-translate-y-0.5 overflow-hidden`}
    >
      {/* Card image */}
      <div className={`relative w-full overflow-hidden ${featured ? 'aspect-[16/9]' : 'aspect-[3/2]'}`}>
        <Image
          src={club.cardImage}
          alt={`${club.name} nightclub London`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className={`relative z-10 ${featured ? 'p-8 md:p-10' : 'p-6 md:p-7'}`}>
        <h3 className={`font-bold text-white text-center tracking-tight ${featured ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
          {club.name}
        </h3>
        <p className={`text-[#BBB] text-center leading-relaxed ${featured ? 'text-sm md:text-base mt-4' : 'text-sm mt-3'}`}>
          {club.tagline}
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-5">
          {club.musicGenres.map((genre) => (
            <span key={genre} className="text-xs bg-white/5 text-[#aaa] px-3 py-1 rounded-full border border-white/[0.04]">
              {genre}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-center gap-3 mt-6 text-xs text-[#888]">
          {showArea && (
            <>
              <span>{club.area}</span>
              <span className="text-[#333]">&middot;</span>
            </>
          )}
          <span>Tables from {club.tableMinimum}</span>
        </div>
        <div className="text-center mt-5">
          <span className="text-sm text-[#C0C0C0] group-hover:text-white transition-colors duration-300">
            View Details →
          </span>
        </div>
      </div>
    </Link>
  );
}
