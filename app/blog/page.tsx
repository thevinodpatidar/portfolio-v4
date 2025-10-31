import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getAllBlogPosts } from "@/lib/blog-data";
import BlogPostCard from "@/components/blog-post-card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "thoughts",
  description:
    "reflections on technology, design, and building products by vinod patidar",
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <div className="min-h-screen bg-background text-foreground max-w-3xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors lowercase mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>back home</span>
        </Link>
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-light lowercase tracking-tight">
            thoughts
          </h1>
          <p className="text-muted-foreground lowercase">
            reflections on technology, design, and building products
          </p>
        </div>
      </div>

      {/* Blog Posts */}
      {posts.map((post) => (
        <BlogPostCard key={post.slug} post={post} />
      ))}

      {/* Footer Note */}
      <div className="text-center pt-16 mt-16 border-t border-muted">
        <p className="text-muted-foreground lowercase text-sm">
          more thoughts coming soon...
        </p>
      </div>
    </div>
  );
}

