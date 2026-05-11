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
                    DIGITAL DESIGNER & DESIGN TECHNOLOGIST
                  </span>
                </div>

                {/* Large Name */}
                <h1 className="text-display-hero mb-12">
                  Design
                  <br />
                  <span className="text-swiss-muted">For</span>
                  <br />
                  People
                </h1>

                {/* Tagline */}
                <p className="text-subheading text-swiss-muted max-w-md leading-relaxed">
                  I create digital products that balance form and function.
                  With a focus on clarity, precision, and user experience.
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

      {/* Philosophy Section */}
      <section className="py-grid-8 border-t border-swiss-gray">
        <div className="grid-container">
          <div className="grid grid-cols-12 gap-8">
            <motion.div
              className="col-span-12 lg:col-span-7"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-caption text-swiss-muted block mb-8">PHILOSOPHY</span>
              <h2 className="text-display-xl mb-12">
                Good Design Is
                <br />
                <span className="text-swiss-yellow">As Little Design</span>
                <br />
                As Possible
              </h2>
              <p className="text-subheading text-swiss-muted max-w-xl leading-relaxed">
                Less, but better – because it concentrates on the essential aspects,
                and the products are not burdened with non-essentials. Back to purity,
                back to simplicity.
              </p>
              <span className="text-caption text-swiss-muted block mt-8">- DIETER RAMS</span>
            </motion.div>

            {/* Geometric Element */}
            <div className="hidden lg:flex col-span-5 items-center justify-center">
              <motion.div
                initial={{ opacity: 0, rotate: -90 }}
                whileInView={{ opacity: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <DotPattern
                  rows={10}
                  cols={10}
                  dotSize={14}
                  gap={12}
                  circular={true}
                  className="text-swiss-yellow"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles Section - Grid Style */}
      <section className="py-grid-8 border-t border-swiss-gray">
        <div className="grid-container">
          <motion.div
            className="mb-grid-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-caption text-swiss-muted block mb-6">THREE PRINCIPLES</span>
            <h2 className="text-display-lg">
              Be Simple.
              <br />
              Be Organised.
              <br />
              Be Familiar.
            </h2>
          </motion.div>

          {/* Principles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-grid-3">
            {[
              {
                number: "1",
                title: "Be Simple",
                subtitle: "Hick's Law",
                description: "The time it takes for a person to make a decision increases with the number of choices. Reduce complexity, increase clarity.",
              },
              {
                number: "2",
                title: "Be Organised",
                subtitle: "Miller's Law",
                description: "The average person can only keep 7 items in their working memory. Chunk information into digestible units.",
              },
              {
                number: "3",
                title: "Be Familiar",
                subtitle: "Jakob's Law",
                description: "Users spend most of their time on other sites. They prefer your site to work the same way as the ones they already know.",
              },
            ].map((principle, index) => (
              <motion.div
                key={index}
                className="border-t border-swiss-gray pt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <span className="text-number text-swiss-white block mb-6">
                  {principle.number}
                </span>
                <span className="text-caption text-swiss-muted block mb-3">
                  / {principle.title} /
                </span>
                <span className="text-heading block mb-6">{principle.subtitle}</span>
                <p className="text-small text-swiss-muted leading-relaxed">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
