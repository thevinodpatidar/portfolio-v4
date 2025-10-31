import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-6">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h1 className="text-4xl md:text-5xl font-light lowercase tracking-tight">
          post not found
        </h1>
        <p className="text-muted-foreground lowercase">
          the blog post you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-primary hover:underline lowercase"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>back to all thoughts</span>
        </Link>
      </div>
    </div>
  );
}

