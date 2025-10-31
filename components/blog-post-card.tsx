import Link from "next/link";
import { formatDate } from "@/lib/blog-data";
import type { BlogPost } from "@/lib/blog-data";

interface BlogPostCardProps {
  post: BlogPost;
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <article className="group">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="py-6 border-b border-border/20 last:border-0 group-hover:border-primary/30 transition-colors">
          <div className="space-y-3">
            <h3 className="text-xl font-medium lowercase group-hover:text-primary transition-colors">
              {post.title}
            </h3>
            <p className="text-muted-foreground lowercase leading-relaxed">
              {post.excerpt}
            </p>
            <div className="flex items-center gap-2.5 text-sm text-muted-foreground lowercase pt-1">
              <span>{formatDate(post.date)}</span>
              <span>·</span>
              <span>{post.category}</span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}

