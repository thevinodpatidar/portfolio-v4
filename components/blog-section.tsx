import Link from "next/link";
import { getAllBlogPosts } from "@/lib/blog-data";
import BlogPostCard from "@/components/blog-post-card";

export default function BlogSection() {
  const posts = getAllBlogPosts().slice(0, 4); // Show latest 4 blogs

  return (
    <section id="blog" className="min-h-screen flex items-center px-6 py-20">
      <div className="max-w-2xl mx-auto w-full space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-light lowercase tracking-tight">
            thoughts
          </h2>
          <p className="text-muted-foreground lowercase">
            reflections on technology, design, and building products
          </p>
        </div>

        <div>
          {posts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>

        <div className="text-center pt-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors lowercase text-sm"
          >
            <span>view all thoughts</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

