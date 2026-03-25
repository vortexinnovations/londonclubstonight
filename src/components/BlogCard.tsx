import Link from 'next/link';
import type { BlogPost } from '@/lib/blog';

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`group relative block bg-[#141414] border border-[#222] rounded-2xl transition-all duration-500 hover:border-[#444] hover:shadow-[0_0_40px_rgba(255,255,255,0.04)] hover:-translate-y-0.5 overflow-hidden ${
        featured ? 'p-8' : 'p-6'
      }`}
    >
      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />

      <div className="relative z-10">
        {/* Category badge + date centered */}
        <div className="flex items-center justify-center gap-3 mb-5">
          <span className="text-xs font-medium text-[#C0C0C0] bg-white/5 px-3 py-1 rounded-full border border-white/[0.04]">
            {post.category}
          </span>
          <span className="text-xs text-[#888]">
            {new Date(post.publishedDate).toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
            })}
          </span>
        </div>

        {/* Title */}
        <h3
          className={`font-bold text-white text-center leading-snug tracking-tight ${
            featured ? 'text-xl md:text-2xl' : 'text-lg'
          }`}
        >
          {post.title}
        </h3>

        {/* Excerpt */}
        <p
          className={`text-[#BBB] text-center leading-relaxed ${
            featured ? 'text-sm md:text-base mt-4' : 'text-sm mt-3'
          }`}
        >
          {post.excerpt}
        </p>

        {/* Tags centered */}
        <div className="flex flex-wrap justify-center gap-2 mt-5">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs bg-white/5 text-[#888] px-3 py-1 rounded-full border border-white/[0.04]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Read Article link */}
        <div className="text-center mt-5">
          <span className="text-sm text-[#C0C0C0] group-hover:text-white transition-colors duration-300">
            Read Article →
          </span>
        </div>
      </div>
    </Link>
  );
}
