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
      className={`block bg-[#141414] hover:bg-[#1A1A1A] border border-[#222] hover:border-[#333] rounded-xl transition-all duration-300 ${featured ? 'p-6 md:p-8' : 'p-5'}`}
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className={`font-bold text-white ${featured ? 'text-xl md:text-2xl' : 'text-lg'}`}>
          {club.name}
        </h3>
        <span className={`shrink-0 text-xs font-medium px-2.5 py-1 rounded-full ${
          club.entryDifficulty === 'Very Hard' ? 'bg-red-500/20 text-red-400' :
          club.entryDifficulty === 'Hard' ? 'bg-orange-500/20 text-orange-400' :
          club.entryDifficulty === 'Moderate' ? 'bg-yellow-500/20 text-yellow-400' :
          'bg-green-500/20 text-green-400'
        }`}>
          {club.entryDifficulty}
        </span>
      </div>

      <p className="text-[#999] text-sm mb-4 leading-relaxed">
        {club.tagline}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {club.musicGenres.map(genre => (
          <span key={genre} className="text-xs bg-white/5 text-[#999] px-2.5 py-1 rounded-full">
            {genre}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between text-xs text-[#666]">
        <div className="flex items-center gap-4">
          {showArea && <span>{club.area}</span>}
          <span>Tables from {club.tableMinimum}</span>
        </div>
        <span className="text-[#C0C0C0]">View Details →</span>
      </div>
    </Link>
  );
}
