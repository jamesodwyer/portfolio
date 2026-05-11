"use client";

import { motion } from "framer-motion";
import { Footer, DotPattern } from "@/components";

export default function Projects() {
  return (
    <>
      {/* Hero Section */}
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
                    SIDE PROJECTS & EXPERIMENTS
                  </span>
                </div>

                {/* Large Title */}
                <h1 className="text-display-hero mb-12">
                  Projects
                </h1>

                {/* Subtitle */}
                <p className="text-subheading text-swiss-muted max-w-md leading-relaxed">
                  A collection of side projects, experiments, and creative explorations
                  in design and development.
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

      {/* Coming Soon Section */}
      <section className="py-grid-7 border-t border-swiss-gray">
        <div className="grid-container">
          <div className="grid grid-cols-12 gap-8">
            <motion.div
              className="col-span-12 lg:col-span-7"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-caption text-swiss-muted block mb-8">STATUS</span>
              <h2 className="text-display-xl mb-12">
                Coming
                <br />
                <span className="text-swiss-yellow">Soon</span>
              </h2>
              <p className="text-subheading text-swiss-muted max-w-xl leading-relaxed">
                I'm currently documenting and polishing my projects.
                Check back soon to see what I've been building.
              </p>
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

      <Footer />
    </>
  );
}
