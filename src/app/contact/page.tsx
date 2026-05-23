"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";

export default function Contact() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-32 pb-grid-6">
        <div className="grid-container w-full">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Title Label */}
              <div className="mb-12">
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
        </div>
      </section>

    </>
  );
}
