"use client";

import { motion } from "framer-motion";
import type { Design } from "@/lib/data";

interface DesignCardProps {
  design: Design;
  index: number;
}

export function DesignCard({ design, index }: DesignCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="grid gap-0 lg:grid-rows-subgrid lg:row-span-5 pb-grid-4"
    >
      {/* Row 1: Hero image */}
      <div className="relative aspect-video overflow-hidden mb-8 self-start">
        <img
          src={design.thumbnail}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Row 2: Category Header */}
      <div className="flex items-baseline border-b border-swiss-gray pb-6 self-start">
        <span className="text-caption text-swiss-muted">
          / {design.category.toUpperCase()} /
        </span>
      </div>

      {/* Row 3: Title */}
      <h3 className="text-heading pt-6 self-start">{design.title}</h3>
    </motion.article>
  );
}
