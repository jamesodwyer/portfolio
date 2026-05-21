"use client";

import { motion } from "framer-motion";
import { CaseStudyCard, Footer, DotPattern } from "@/components";
import { caseStudies } from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* Hero Section - Poster Style with generous whitespace */}
      <section className="min-h-screen flex items-center pt-32 pb-grid-6">
        <div className="grid-container w-full">
          <div className="grid grid-cols-12 gap-8 items-center">
            {/* Main Title - Left */}
            <div className="col-span-12 lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Title Label */}
                <div className="flex items-center gap-6 mb-12">
                  <DotPattern rows={3} cols={3} dotSize={6} gap={4} className="text-swiss-yellow" />
                  <span className="text-caption text-swiss-muted">
                    PRINCIPAL PRODUCT DESIGNER · DESIGN SYSTEMS LEADER
                  </span>
                </div>

                {/* Large Name */}
                <h1 className="text-display-hero mb-12">
                  Designing
                  <br />
                  <span className="text-swiss-muted">Products</span>
                  <br />
                  At Scale
                </h1>

                {/* Tagline */}
                <p className="text-subheading text-swiss-muted max-w-xl leading-relaxed">
                  Principal Product Designer and design leader. I shape products
                  and the teams that build them &mdash; at the intersection of
                  design, engineering, and AI.
                </p>
              </motion.div>
            </div>

            {/* Dot Pattern - Right */}
            <div className="hidden lg:flex col-span-5 items-center justify-center">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <DotPattern
                  rows={12}
                  cols={12}
                  dotSize={10}
                  gap={10}
                  circular={true}
                  className="text-swiss-white"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Work Section */}
      <section className="py-grid-8 border-t border-swiss-gray">
        <div className="grid-container">
          {/* Section Header */}
          <motion.div
            className="flex items-center justify-between mb-grid-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-6">
              <span className="text-number text-swiss-yellow">{caseStudies.length}</span>
              <div>
                <span className="text-caption text-swiss-muted block mb-2">SELECTED</span>
                <h2 className="text-display">Case Studies</h2>
              </div>
            </div>
            <div className="hidden md:block">
              <DotPattern rows={3} cols={6} dotSize={6} gap={8} className="text-swiss-muted" />
            </div>
          </motion.div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2" style={{ columnGap: 'var(--spacing-grid-4)' }}>
            {caseStudies.map((study, index) => (
              <CaseStudyCard key={study.slug} study={study} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
