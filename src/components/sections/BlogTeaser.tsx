import { posts } from "@/data/blog";
import { SectionHeader } from "../ui/SectionHeader";
import { BlogCard } from "../ui/BlogCard";

export function BlogTeaser() {
  const list = posts.slice(0, 2);
  return (
    <section className="pb-20 pt-10 sm:pb-28 sm:pt-12">
      <div className="container-x">
        <SectionHeader
          title="Blog."
          subtitle="Daily articles, inspiration, and resources by our lovely team."
          cta={{ label: "Visit Blog", href: "/blog" }}
        />
        <div className="mt-14 grid gap-7 sm:grid-cols-2">
          {list.map((p, i) => (
            <BlogCard key={p.slug} post={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
