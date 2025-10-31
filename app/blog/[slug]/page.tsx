import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays, ArrowLeft } from "lucide-react";
import {
  getBlogPostBySlug,
  getAllBlogPosts,
  formatDate,
} from "@/lib/blog-data";
import type { Metadata } from "next";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "post not found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      tags: [post.category],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Split content into paragraphs
  const paragraphs = post.content
    .split("\n\n")
    .filter((p) => p.trim().length > 0);

  return (
    <article className="min-h-screen bg-background text-foreground max-w-3xl mx-auto px-6 py-20">
      {/* Navigation */}
      <div className="mb-12">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors lowercase"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>back to thoughts</span>
        </Link>
      </div>

      {/* Header */}
      <header className="mb-12 space-y-6">
        <div className="flex items-center gap-4 text-sm text-muted-foreground lowercase">
          <span className="flex items-center gap-1.5">
            <CalendarDays className="w-3.5 h-3.5" />
            {formatDate(post.date)}
          </span>
          <span className="px-2 py-0.5 bg-muted rounded-full">
            {post.category}
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-light lowercase tracking-tight leading-tight">
          {post.title}
        </h1>
        <p className="text-lg text-muted-foreground lowercase leading-relaxed">
          {post.excerpt}
        </p>
      </header>

      {/* Content */}
      <div className="prose prose-invert max-w-none">
        <div className="space-y-6 lowercase leading-relaxed">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="text-foreground">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </article>
  );
}

