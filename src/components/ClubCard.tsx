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
      className="glass-card glass-card-hover group relative block overflow-hidden"
    >
      {/* Card image with overlaid name */}
      <div className={`relative w-full overflow-hidden ${featured ? 'aspect-[16/9]' : 'aspect-[3/2]'}`}>
        <Image
          src={club.cardImage}
          alt={`${club.name} nightclub London`}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night-950/95 via-night-950/20 to-transparent" />

        {/* Chips on image */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-start gap-2">
          {showArea ? (
            <span className="chip backdrop-blur-md bg-night-950/50">{club.area}</span>
          ) : <span />}
          <span className="chip chip-accent backdrop-blur-md">Tables from {club.tableMinimum}</span>
        </div>

        {/* Name overlaid at image base */}
        <h3
          className={`absolute bottom-4 left-5 right-5 font-display font-extrabold text-white tracking-tight drop-shadow-lg ${
            featured ? 'text-3xl md:text-4xl' : 'text-2xl'
          }`}
        >
          {club.name}
        </h3>
      </div>

      {/* Content */}
      <div className={featured ? 'p-6 md:p-8 pt-5 md:pt-5' : 'p-5 md:p-6 pt-4 md:pt-4'}>
        <p className={`text-frost-300 leading-relaxed ${featured ? 'text-sm md:text-base' : 'text-sm'}`}>
          {club.tagline}
        </p>

        <div className="flex flex-wrap gap-1.5 mt-4">
          {club.musicGenres.map((genre) => (
            <span key={genre} className="chip">
              {genre}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between mt-5 pt-4 border-t border-white/[0.06]">
          {showArea ? (
            <span className="text-xs text-frost-400">London &middot; {club.area}</span>
          ) : (
            <span />
          )}
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-neon-300 group-hover:text-white transition-colors duration-300">
            View Details
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
