import Link from 'next/link';
import Image from 'next/image';
import type { BlogPost } from '@/lib/blog';

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="glass-card glass-card-hover group relative block overflow-hidden"
    >
      {/* Featured image */}
      <div className={`relative w-full overflow-hidden ${featured ? 'aspect-video' : 'aspect-[3/2]'}`}>
        <Image
          src={post.featuredImage}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          sizes={featured ? '(max-width: 768px) 100vw, 100vw' : '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night-950/95 via-night-950/15 to-transparent" />

        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className="chip chip-accent backdrop-blur-md">{post.category}</span>
        </div>
      </div>

      <div className={featured ? 'p-6 md:p-8 pt-5 md:pt-5' : 'p-5 md:p-6 pt-4 md:pt-4'}>
        <time className="text-xs text-frost-500 font-medium tracking-wide uppercase">
          {new Date(post.publishedDate).toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          })}
        </time>

        {/* Title */}
        <h3
          className={`font-display font-bold text-white leading-snug tracking-tight mt-2 group-hover:text-neon-200 transition-colors duration-300 ${
            featured ? 'text-2xl md:text-3xl' : 'text-lg md:text-xl'
          }`}
        >
          {post.title}
        </h3>

        {/* Excerpt */}
        <p
          className={`text-frost-300 leading-relaxed ${
            featured ? 'text-sm md:text-base mt-3' : 'text-sm mt-2.5'
          }`}
        >
          {post.excerpt}
        </p>

        {/* Footer row */}
        <div className="flex items-center justify-between mt-5 pt-4 border-t border-white/[0.06]">
          <div className="flex flex-wrap gap-1.5">
            {post.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="chip">
                {tag}
              </span>
            ))}
          </div>
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-neon-300 group-hover:text-white transition-colors duration-300 whitespace-nowrap">
            Read Article
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
