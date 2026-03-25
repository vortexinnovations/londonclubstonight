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
      className={`block bg-[#141414] hover:bg-[#1A1A1A] border border-[#222] hover:border-[#333] rounded-xl transition-all duration-300 ${featured ? 'p-6 md:p-8' : 'p-5'}`}
    >
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs font-medium text-[#C0C0C0] bg-white/5 px-2.5 py-1 rounded-full">
          {post.category}
        </span>
        <span className="text-xs text-[#666]">
          {new Date(post.publishedDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
        </span>
      </div>

      <h3 className={`font-bold text-white mb-2 leading-snug ${featured ? 'text-xl md:text-2xl' : 'text-lg'}`}>
        {post.title}
      </h3>

      <p className="text-[#999] text-sm mb-4 leading-relaxed">
        {post.excerpt}
      </p>

      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-1.5">
          {post.tags.slice(0, 3).map(tag => (
            <span key={tag} className="text-xs bg-white/5 text-[#666] px-2 py-0.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <span className="text-[#C0C0C0] text-xs shrink-0 ml-3">Read Article →</span>
      </div>
    </Link>
  );
}
