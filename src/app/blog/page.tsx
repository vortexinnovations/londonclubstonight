import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllBlogPosts, getCategories } from '@/lib/blog';
import BlogCard from '@/components/BlogCard';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import SchemaMarkup, { getArticleSchema } from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'London Nightlife Blog — Insider Guides, Tips & Club Reviews',
  description:
    'The London nightlife blog for people who actually go out. Insider guides to London clubs, honest reviews, dress code tips, and everything you need to know before a night out in London.',
  keywords: [
    'London nightlife blog',
    'London clubs blog',
    'nightclub guides London',
    'London club reviews',
    'London nightlife tips',
  ],
  openGraph: {
    title: 'London Nightlife Blog — Insider Guides, Tips & Club Reviews',
    description:
      'The London nightlife blog for people who actually go out. Insider guides, honest reviews, and everything you need to know before a night out.',
    url: 'https://londonclubstonight.com/blog',
    type: 'website',
  },
  alternates: {
    canonical: 'https://londonclubstonight.com/blog',
  },
};

export default function BlogPage() {
  const posts = getAllBlogPosts().sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime());
  const categories = getCategories();
  const featuredPost = posts[0];
  const remainingPosts = posts.slice(1);

  const blogListSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'London Nightlife Blog',
    description:
      'Insider guides, tips, and club reviews for London nightlife.',
    url: 'https://londonclubstonight.com/blog',
    publisher: {
      '@type': 'Organization',
      name: 'London Clubs Tonight',
      url: 'https://londonclubstonight.com',
    },
    blogPost: posts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      url: `https://londonclubstonight.com/blog/${post.slug}`,
      datePublished: post.publishedDate,
    })),
  };

  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      <SchemaMarkup schema={blogListSchema} />

      {/* Header */}
      <section className="pt-24 pb-12 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-[#888] mb-8">
            <Link href="/" className="hover:text-[#BBB] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#BBB]">Blog</span>
          </nav>

          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            London Nightlife Blog
          </h1>
          <p className="text-[#BBB] text-lg md:text-xl max-w-2xl leading-relaxed">
            Insider knowledge from people who work the scene. Weekly guides,
            honest reviews, and everything you need to plan a proper night out
            in London.
          </p>

          {/* Category filters */}
          <div className="flex flex-wrap gap-2 mt-8">
            {categories.map((category) => (
              <span
                key={category}
                className="text-sm font-medium text-[#C0C0C0] bg-white/5 border border-[#222] px-4 py-2 rounded-full"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="px-4 sm:px-6 pb-8">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-[#888] mb-4 font-medium">
            Featured
          </p>
          <BlogCard post={featuredPost} featured={true} />
        </div>
      </section>

      {/* Post Grid */}
      <section className="px-4 sm:px-6 pb-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {remainingPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="px-4 sm:px-6 pb-16">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#141414] border border-[#222] rounded-xl p-8 md:p-10 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              Need Help Planning Your Night?
            </h2>
            <p className="text-[#BBB] mb-6 max-w-lg mx-auto">
              Message us on WhatsApp for free, personalised recommendations.
              Table bookings, guestlist access, or just honest advice on where
              to go tonight.
            </p>
            <div className="flex justify-center">
              <WhatsAppCTA />
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="px-4 sm:px-6 pb-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-6">
            Explore More
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              href="/guides/how-to-get-into-london-clubs"
              className="block bg-[#141414] border border-[#222] hover:border-[#333] rounded-xl p-5 transition-all duration-300"
            >
              <h3 className="text-white font-semibold mb-1">Club Guides</h3>
              <p className="text-[#888] text-sm">
                How to get into London&apos;s best clubs, from dress codes to
                door policies.
              </p>
            </Link>
            <Link
              href="/best-clubs-in-london"
              className="block bg-[#141414] border border-[#222] hover:border-[#333] rounded-xl p-5 transition-all duration-300"
            >
              <h3 className="text-white font-semibold mb-1">Best Clubs</h3>
              <p className="text-[#888] text-sm">
                The top-ranked nightclubs in London right now, reviewed and
                rated.
              </p>
            </Link>
            <Link
              href="/areas/mayfair"
              className="block bg-[#141414] border border-[#222] hover:border-[#333] rounded-xl p-5 transition-all duration-300"
            >
              <h3 className="text-white font-semibold mb-1">
                Clubs by Area
              </h3>
              <p className="text-[#888] text-sm">
                Mayfair, Soho, Central London — find the best clubs near you.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
