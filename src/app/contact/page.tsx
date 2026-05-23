"use client";

import { motion } from "framer-motion";
import { DotPattern } from "@/components";
import { siteConfig } from "@/lib/data";

export default function Contact() {
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
                    LET'S WORK TOGETHER
                  </span>
                </div>

                {/* Large Title */}
                <h1 className="text-display-hero mb-12">
                  Get In
                  <br />
                  <span className="text-swiss-yellow">Touch</span>
                </h1>

                {/* Description */}
                <p className="text-subheading text-swiss-muted max-w-md leading-relaxed mb-8">
                  I'd love to hear from you.
                </p>

                {/* Email */}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-4 text-heading text-swiss-white hover:text-swiss-muted transition-colors group"
                >
                  {siteConfig.email}
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                    className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  >
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
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

    </>
  );
}
