import BlogNavigation from "@/components/blog-navigation";
import Footer from "@/components/footer";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BlogNavigation />
      <div className="pt-20">{children}</div>
      <Footer />
    </>
  );
}

