import type { Metadata } from "next";
import { posts } from "@/data/blog";
import { PageHero } from "@/components/ui/PageHero";
import { BlogCard } from "@/components/ui/BlogCard";

export const metadata: Metadata = {
  title: "Blog - Glassbox",
  description: "Daily articles, inspiration, and resources by our lovely team.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="Creative Dispatch"
        subtitle="Daily articles, inspiration, and resources by our lovely team."
      />
      <section className="section-pad pt-14">
        <div className="container-x">
          <div className="grid gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((p, i) => (
              <BlogCard key={p.slug} post={p} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
