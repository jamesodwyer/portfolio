"use client";

import { motion } from "framer-motion";
import { BrandMarquee, CaseStudyCard, DesignCard, Footer, DotPattern } from "@/components";
import { caseStudies, designs } from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* Hero Section - Poster Style with generous whitespace */}
      <section className="pt-28 pb-grid-4">
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
                <div className="mb-12">
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
                  That Scale
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
                  rows={3}
                  cols={3}
                  dotSize={40}
                  gap={40}
                  circular={true}
                  className="text-swiss-white"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <BrandMarquee />

      {/* Selected Work Section */}
      <section className="pt-grid-4">
        <div className="grid-container">
          {/* Case Studies + Designs Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2" style={{ columnGap: 'var(--spacing-grid-4)' }}>
            {caseStudies.map((study, index) => (
              <CaseStudyCard key={study.slug} study={study} index={index} />
            ))}
            {designs.map((design, index) => (
              <DesignCard
                key={design.slug}
                design={design}
                index={caseStudies.length + index}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
