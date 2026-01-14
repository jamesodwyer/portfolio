"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { CaseStudy } from "@/lib/data";
import { Footer } from "@/components";

const colorMap = {
  red: "bg-red-600",
  blue: "bg-blue-600",
  yellow: "bg-swiss-yellow",
  black: "bg-swiss-black",
};

const textColorMap = {
  red: "text-red-500",
  blue: "text-blue-500",
  yellow: "text-swiss-yellow",
  black: "text-swiss-white",
};

interface CaseStudyClientProps {
  study: CaseStudy;
  nextStudy: CaseStudy;
}

export default function CaseStudyClient({ study, nextStudy }: CaseStudyClientProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-end pt-20 pb-grid-2">
        <div className="grid-container w-full">
          <div className="grid grid-cols-12 gap-6">
            {/* Back Link */}
            <motion.div
              className="col-span-12 mb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                href="/"
                className="text-caption text-swiss-muted hover:text-swiss-white transition-colors inline-flex items-center gap-2"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M19 12H5M5 12L12 19M5 12L12 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                BACK TO WORK
              </Link>
            </motion.div>

            {/* Title */}
            <div className="col-span-12 lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <div className="bauhaus-line-red w-16 mb-8" style={{ backgroundColor: study.color === 'red' ? '#FF0000' : study.color === 'blue' ? '#0047FF' : study.color === 'yellow' ? '#FFCC00' : '#000000' }} />

                <span className="text-caption text-swiss-muted block mb-4">
                  {study.category.toUpperCase()} — {study.year}
                </span>

                <h1 className="text-display-xl mb-6">{study.title}</h1>

                <p className="text-subheading text-swiss-muted max-w-2xl">
                  {study.subtitle}
                </p>
              </motion.div>
            </div>

            {/* Results Preview */}
            <div className="col-span-12 lg:col-span-4 lg:flex lg:items-end">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="grid grid-cols-3 lg:grid-cols-1 gap-6"
              >
                {study.results.map((result, index) => (
                  <div key={index}>
                    <span className={`text-display ${textColorMap[study.color]}`}>
                      {result.value}
                    </span>
                    <span className="text-caption text-swiss-muted block mt-1">
                      {result.metric.toUpperCase()}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image Placeholder */}
      <section className="py-grid">
        <div className="grid-container">
          <motion.div
            className={`aspect-[21/9] ${colorMap[study.color]} relative overflow-hidden`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 border-8 border-white/20 rounded-full" />
              <div className="absolute w-32 h-32 bg-white/10" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-grid-5 border-t-2 border-swiss-gray">
        <div className="grid-container">
          <div className="grid grid-cols-12 gap-6">
            <motion.div
              className="col-span-12 lg:col-span-3 mb-8 lg:mb-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-caption text-swiss-muted">OVERVIEW</span>
            </motion.div>

            <motion.div
              className="col-span-12 lg:col-span-9 grid grid-cols-2 md:grid-cols-4 gap-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div>
                <span className="text-caption text-swiss-muted block mb-2">ROLE</span>
                <span className="text-body">{study.overview.role}</span>
              </div>
              <div>
                <span className="text-caption text-swiss-muted block mb-2">TIMELINE</span>
                <span className="text-body">{study.overview.timeline}</span>
              </div>
              <div>
                <span className="text-caption text-swiss-muted block mb-2">TEAM</span>
                <span className="text-body">{study.overview.team}</span>
              </div>
              <div>
                <span className="text-caption text-swiss-muted block mb-2">TOOLS</span>
                <span className="text-body">{study.overview.tools.join(", ")}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-grid-5 border-t border-swiss-gray">
        <div className="grid-container">
          <div className="grid grid-cols-12 gap-6">
            <motion.div
              className="col-span-12 lg:col-span-3 mb-8 lg:mb-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-caption text-swiss-muted">CHALLENGE</span>
            </motion.div>

            <motion.div
              className="col-span-12 lg:col-span-7"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="text-heading leading-relaxed">{study.challenge}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-grid-5 border-t border-swiss-gray">
        <div className="grid-container">
          <div className="grid grid-cols-12 gap-6">
            <motion.div
              className="col-span-12 lg:col-span-3 mb-8 lg:mb-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-caption text-swiss-muted">PROCESS</span>
            </motion.div>

            <div className="col-span-12 lg:col-span-9">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {study.process.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <span className={`text-display ${textColorMap[study.color]} block mb-4`}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-subheading mb-3">{step.title}</h3>
                    <p className="text-body text-swiss-muted">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-grid-5 border-t border-swiss-gray">
        <div className="grid-container">
          <div className="grid grid-cols-12 gap-6">
            <motion.div
              className="col-span-12 lg:col-span-3 mb-8 lg:mb-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-caption text-swiss-muted">SOLUTION</span>
            </motion.div>

            <motion.div
              className="col-span-12 lg:col-span-7"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="text-heading leading-relaxed">{study.solution}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution Image Placeholder */}
      <section className="py-grid">
        <div className="grid-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              className={`aspect-[4/3] ${colorMap[study.color]} opacity-80`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 0.8, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            />
            <motion.div
              className="aspect-[4/3] bg-zinc-800"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            />
          </div>
        </div>
      </section>

      {/* Learnings Section */}
      <section className="py-grid-5 border-t border-swiss-gray">
        <div className="grid-container">
          <div className="grid grid-cols-12 gap-6">
            <motion.div
              className="col-span-12 lg:col-span-3 mb-8 lg:mb-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-caption text-swiss-muted">LEARNINGS</span>
            </motion.div>

            <div className="col-span-12 lg:col-span-9">
              <ul className="space-y-6">
                {study.learnings.map((learning, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <span className={`${textColorMap[study.color]} text-heading`}>→</span>
                    <span className="text-subheading">{learning}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className="py-grid-4 border-t-2 border-swiss-gray">
        <div className="grid-container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-caption text-swiss-muted block mb-6">NEXT PROJECT</span>
            <Link href={`/work/${nextStudy.slug}`} className="group inline-block">
              <h2 className="text-display-lg group-hover:text-swiss-yellow transition-colors">
                {nextStudy.title}
              </h2>
              <p className="text-subheading text-swiss-muted mt-2">{nextStudy.subtitle}</p>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
