"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Post } from "@/data/blog";

const EASE = [0.22, 1, 0.36, 1] as const;

export function BlogCard({ post, index = 0 }: { post: Post; index?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.7, ease: EASE, delay: index * 0.08 }}
    >
      <Link href={`/blog/${post.slug}`} className="hover-img-zoom group block">
        <div className="relative aspect-[16/11] overflow-hidden rounded-2xl bg-ink-700">
          <Image
            src={post.cover}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="mt-5">
          <p className="font-mono text-[12px] text-muted">{post.date}</p>
          <h3 className="mt-2 text-[20px] font-medium leading-snug tracking-tight transition-colors group-hover:text-white/80 sm:text-[22px]">
            {post.title}
          </h3>
        </div>
      </Link>
    </motion.article>
  );
}
