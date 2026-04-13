"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { CaseStudy } from "@/lib/data";

interface CaseStudyCardProps {
  study: CaseStudy;
  index: number;
}

export function CaseStudyCard({ study, index }: CaseStudyCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <Link href={`/work/${study.slug}`} className="block">
        {/* Number and Category Header */}
        <div className="flex items-baseline justify-between mb-6 border-b border-swiss-gray pb-6">
          <div className="flex items-baseline gap-6">
            <span className="text-number-sm text-swiss-white">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="text-caption text-swiss-muted">
              / {study.category.toUpperCase()} /
            </span>
          </div>
          {study.year && <span className="text-caption text-swiss-muted">{study.year}</span>}
        </div>

        {/* Title */}
        <h3 className="text-display-lg mb-6 transition-colors group-hover:text-swiss-yellow">
          {study.title}
        </h3>

        {/* Description */}
        <p className="text-body text-swiss-muted mb-10 leading-relaxed">{study.subtitle}</p>

        {/* Results Row */}
        <div className="grid grid-cols-3 gap-10 pt-8 border-t border-swiss-gray">
          {study.results.slice(0, 3).map((result, i) => (
            <div key={i}>
              <span className="text-subheading text-swiss-yellow block mb-3 leading-[1.15]" style={{ fontWeight: 900 }}>
                {result.metric}
              </span>
              <span className="text-micro text-swiss-muted block leading-relaxed">
                {result.value.toUpperCase()}
              </span>
            </div>
          ))}
        </div>

        {/* Arrow indicator */}
        <div className="mt-10 flex items-center gap-3 text-swiss-muted group-hover:text-swiss-yellow transition-colors">
          <span className="text-caption">VIEW PROJECT</span>
          <motion.svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            className="transform group-hover:translate-x-1 transition-transform"
          >
            <path
              d="M7 17L17 7M17 7H7M17 7V17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        </div>
      </Link>
    </motion.article>
  );
}
