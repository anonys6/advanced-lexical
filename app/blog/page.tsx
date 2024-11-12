import { Hero } from '../../components/Hero';
import { BlogCard } from '../../components/BlogCard';
import { Newsletter } from '../../components/Newsletter';
import { blogPosts } from '../../data/blogPosts';

export default function BlogHome() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />

      {/* Featured Posts */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-gray-900">Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      <Newsletter />
    </main>
  );
}
