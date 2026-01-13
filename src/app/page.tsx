"use client";

import { motion } from "framer-motion";
import { CaseStudyCard, Footer } from "@/components";
import { caseStudies, siteConfig } from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-20">
        <div className="grid-container w-full">
          <div className="grid grid-cols-12 gap-6">
            {/* Main Title */}
            <div className="col-span-12 lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Red accent line - Bauhaus element */}
                <div className="bauhaus-line-red w-16 mb-8" />

                <h1 className="text-display-xl mb-6">
                  {siteConfig.name.split(" ")[0]}
                  <br />
                  <span className="text-bauhaus-gray">
                    {siteConfig.name.split(" ").slice(1).join(" ")}
                  </span>
                </h1>

                <div className="flex items-baseline gap-4 mb-12">
                  <span className="text-display text-bauhaus-black">
                    {siteConfig.title}
                  </span>
                  <span className="text-display text-bauhaus-gray">
                    {siteConfig.subtitle}
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Geometric Element - Bauhaus Circle */}
            <div className="hidden lg:flex col-span-4 items-center justify-center">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <div className="w-48 h-48 rounded-full border-4 border-bauhaus-black" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-bauhaus-red rounded-full" />
              </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
              className="col-span-12 mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <div className="flex items-center gap-4">
                <span className="text-caption text-bauhaus-gray">
                  SELECTED WORK
                </span>
                <div className="bauhaus-line flex-1 max-w-32 opacity-30" />
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-bauhaus-gray"
                  >
                    <path
                      d="M12 5V19M12 19L5 12M12 19L19 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-grid-4">
        <div className="grid-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {caseStudies.map((study, index) => (
              <CaseStudyCard key={study.slug} study={study} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Statement */}
      <section className="py-grid-4 border-t-2 border-bauhaus-black">
        <div className="grid-container">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-8">
              <motion.p
                className="text-display-lg text-bauhaus-gray"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                Design is not just what it looks like.{" "}
                <span className="text-bauhaus-black">
                  Design is how it works.
                </span>
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
