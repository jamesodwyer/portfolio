"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { CaseStudy } from "@/lib/data";

interface CaseStudyCardProps {
  study: CaseStudy;
  index: number;
}

const colorMap = {
  red: "bg-bauhaus-red",
  blue: "bg-bauhaus-blue",
  yellow: "bg-bauhaus-yellow",
  black: "bg-bauhaus-black",
};

const hoverColorMap = {
  red: "group-hover:text-bauhaus-red",
  blue: "group-hover:text-bauhaus-blue",
  yellow: "group-hover:text-bauhaus-black",
  black: "group-hover:text-bauhaus-black",
};

export function CaseStudyCard({ study, index }: CaseStudyCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link href={`/work/${study.slug}`} className="group block">
        {/* Thumbnail Container */}
        <div className="relative aspect-[4/3] overflow-hidden mb-6">
          {/* Color Overlay */}
          <div
            className={`absolute inset-0 ${colorMap[study.color]} opacity-90`}
          />

          {/* Geometric Pattern (Bauhaus-inspired) */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="w-32 h-32 border-4 border-white/30 rounded-full"
              whileHover={{ scale: 1.2, rotate: 90 }}
              transition={{ duration: 0.4 }}
            />
          </div>

          {/* Project Number */}
          <div className="absolute top-6 left-6">
            <span className="text-white/60 text-caption">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          {/* Category */}
          <div className="absolute bottom-6 left-6">
            <span className="text-white text-caption">{study.category.toUpperCase()}</span>
          </div>

          {/* Year */}
          <div className="absolute bottom-6 right-6">
            <span className="text-white/60 text-caption">{study.year}</span>
          </div>

          {/* Hover Arrow */}
          <motion.div
            className="absolute top-6 right-6 opacity-0 group-hover:opacity-100"
            initial={{ x: -10 }}
            whileHover={{ x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="text-white"
            >
              <path
                d="M7 17L17 7M17 7H7M17 7V17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </div>

        {/* Content */}
        <div className="space-y-2">
          <h3
            className={`text-heading transition-colors ${hoverColorMap[study.color]}`}
          >
            {study.title}
          </h3>
          <p className="text-body text-bauhaus-gray">{study.subtitle}</p>
        </div>
      </Link>
    </motion.article>
  );
}
