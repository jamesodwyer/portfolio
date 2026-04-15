"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20">
      <div className="grid-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center justify-center mb-8">
            <div className="w-24 h-24 border-4 border-swiss-gray flex items-center justify-center">
              <span className="text-display-xl">?</span>
            </div>
          </div>

          <h1 className="text-display-xl mb-4">404</h1>
          <p className="text-subheading text-swiss-muted mb-12">
            This page doesn&apos;t exist.
          </p>

          <Link
            href="/"
            className="inline-flex items-center gap-3 text-caption tracking-widest hover:text-swiss-yellow transition-colors"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M19 12H5M5 12L12 19M5 12L12 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            BACK TO HOME
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
