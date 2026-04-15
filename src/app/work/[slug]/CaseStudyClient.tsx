"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import type { CaseStudy } from "@/lib/data";
import { Footer } from "@/components";

const colorMap = {
  red: "bg-swiss-yellow",
  blue: "bg-swiss-yellow",
  yellow: "bg-swiss-yellow",
  black: "bg-swiss-yellow",
};

const textColorMap = {
  red: "text-swiss-yellow",
  blue: "text-swiss-yellow",
  yellow: "text-swiss-yellow",
  black: "text-swiss-yellow",
};

interface CaseStudyClientProps {
  study: CaseStudy;
  nextStudy: CaseStudy;
}

export default function CaseStudyClient({ study, nextStudy }: CaseStudyClientProps) {
  const gallery = study.gallery ?? [];
  const hasImages = gallery.length > 0 || study.hero;

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-end pt-20 pb-grid-2">
        <div className="grid-container w-full">
          {/* Back Link */}
          <motion.div
            className="mb-8"
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
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="max-w-4xl"
          >
            <div className="bauhaus-line-red w-16 mb-8" style={{ backgroundColor: '#FFE500' }} />

            <span className="text-caption text-swiss-muted block mb-4">
              {study.category.toUpperCase()}{study.year ? ` - ${study.year}` : ""}
            </span>

            <h1 className="text-display-xl mb-6">{study.title}</h1>

            <p className="text-subheading text-swiss-muted max-w-2xl">
              {study.subtitle}
            </p>
          </motion.div>

          {/* Results Strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-3 gap-10 mt-16 pt-8 border-t border-swiss-gray"
          >
            {study.results.map((result, index) => (
              <div key={index}>
                <span className="text-subheading text-swiss-yellow block mb-3 leading-[1.15]" style={{ fontWeight: 900 }}>
                  {result.metric}
                </span>
                <span className="text-micro text-swiss-muted block leading-relaxed">
                  {result.value.toUpperCase()}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-grid">
        <div className="grid-container">
          <motion.div
            ref={heroRef}
            className={`${hasImages ? "aspect-video" : "aspect-[21/9]"} relative overflow-hidden`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {study.hero ? (
              <motion.img
                src={study.hero}
                alt={study.title}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ y: heroY, scale: 1.15 }}
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 border-8 border-white/20 rounded-full" />
                <div className="absolute w-32 h-32 bg-white/10" />
              </div>
            )}
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
              {(() => {
                const sentences = study.challenge.match(/[^.!?]+[.!?]+/g) || [study.challenge];
                const lead = sentences[0].trim();
                const rest = sentences.slice(1).map(s => s.trim()).filter(Boolean);
                return (
                  <>
                    <p className="text-heading leading-relaxed mb-10">{lead}</p>
                    {rest.length > 0 && (
                      <div className="space-y-6">
                        {rest.map((sentence, i) => (
                          <p key={i} className="text-body text-swiss-muted leading-relaxed">{sentence}</p>
                        ))}
                      </div>
                    )}
                  </>
                );
              })()}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery - between Challenge and Process (first pair) */}
      {gallery.length >= 2 && (
        <section className="py-grid">
          <div className="grid-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {gallery.slice(0, 2).map((img, index) => (
                <motion.div
                  key={index}
                  className="aspect-video relative overflow-hidden bg-zinc-950"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <img
                    src={img}
                    alt={`${study.title} - detail ${index + 1}`}
                    className="absolute inset-0 w-full h-full object-contain"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

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

      {/* Gallery - between Process and Solution (middle pair) */}
      {gallery.length >= 4 && (
        <section className="py-grid">
          <div className="grid-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {gallery.slice(2, 4).map((img, index) => (
                <motion.div
                  key={index}
                  className="aspect-video relative overflow-hidden bg-zinc-950"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <img
                    src={img}
                    alt={`${study.title} - detail ${index + 3}`}
                    className="absolute inset-0 w-full h-full object-contain"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Full-width gallery image (5th image) */}
      {gallery.length >= 5 && (
        <section className="py-grid">
          <div className="grid-container">
            <motion.div
              className="aspect-video relative overflow-hidden bg-zinc-950"
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={gallery[4]}
                alt={`${study.title} - detail 5`}
                className="absolute inset-0 w-full h-full object-contain"
              />
            </motion.div>
          </div>
        </section>
      )}

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
              {(() => {
                const sentences = study.solution.match(/[^.!?]+[.!?]+/g) || [study.solution];
                const lead = sentences[0].trim();
                const rest = sentences.slice(1).map(s => s.trim()).filter(Boolean);
                return (
                  <>
                    <p className="text-heading leading-relaxed mb-10">{lead}</p>
                    {rest.length > 0 && (
                      <div className="space-y-6">
                        {rest.map((sentence, i) => (
                          <p key={i} className="text-body text-swiss-muted leading-relaxed">{sentence}</p>
                        ))}
                      </div>
                    )}
                  </>
                );
              })()}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery - after Solution (remaining images) */}
      {gallery.length >= 6 && (
        <section className="py-grid">
          <div className="grid-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {gallery.slice(5).map((img, index) => {
                const remaining = gallery.slice(5);
                const isLastOdd = remaining.length % 2 !== 0 && index === remaining.length - 1;
                return (
                  <motion.div
                    key={index}
                    className={`aspect-video relative overflow-hidden bg-zinc-950 ${
                      isLastOdd ? "md:col-span-2" : ""
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <img
                      src={img}
                      alt={`${study.title} - detail ${index + 6}`}
                      className="absolute inset-0 w-full h-full object-contain"
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}


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
                    <span className="w-3 h-3 rounded-full bg-swiss-yellow mt-2 flex-shrink-0" />
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
              <h2 className="text-display-lg group-hover:text-swiss-yellow transition-colors inline-flex items-baseline gap-4">
                {nextStudy.title}
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="transform group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform flex-shrink-0 relative top-1"
                >
                  <path
                    d="M7 17L17 7M17 7H7M17 7V17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </h2>
              <p className="text-subheading text-swiss-muted mt-2 max-w-2xl">{nextStudy.subtitle}</p>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
