"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";
import { Footer } from "@/components";

const experience = [
  {
    role: "Senior Product Designer",
    company: "Fintech Startup",
    period: "2022 — Present",
    description:
      "Leading design for a banking platform serving 2M+ users. Established design system and mentored junior designers.",
  },
  {
    role: "Product Designer",
    company: "Design Agency",
    period: "2019 — 2022",
    description:
      "Delivered end-to-end design solutions for clients including healthcare, e-commerce, and B2B SaaS companies.",
  },
  {
    role: "UI/UX Designer",
    company: "Tech Company",
    period: "2017 — 2019",
    description:
      "Designed web and mobile applications. Collaborated closely with engineering teams to ship pixel-perfect implementations.",
  },
];

const skills = [
  "Product Strategy",
  "User Research",
  "Information Architecture",
  "Interaction Design",
  "Visual Design",
  "Design Systems",
  "Prototyping",
  "Front-end Development",
];

const tools = [
  "Figma",
  "Protopie",
  "Principle",
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-end pt-20 pb-grid-2">
        <div className="grid-container w-full">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="swiss-line-yellow w-16 mb-8" />

                <h1 className="text-display-xl mb-8">About</h1>

                <p className="text-heading text-swiss-muted leading-relaxed max-w-3xl">
                  I&apos;m a designer and developer based in {siteConfig.location}, focused on
                  creating digital products that are both{" "}
                  <span className="text-swiss-white">beautiful</span> and{" "}
                  <span className="text-swiss-white">functional</span>.
                </p>
              </motion.div>
            </div>

            {/* Geometric Element */}
            <div className="hidden lg:flex col-span-4 items-end justify-end">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative"
              >
                <div className="w-32 h-32 bg-swiss-yellow" />
                <div className="absolute -top-8 -left-8 w-32 h-32 border-4 border-swiss-gray" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-grid-6 border-t-2 border-swiss-gray">
        <div className="grid-container">
          <div className="grid grid-cols-12 gap-6">
            <motion.div
              className="col-span-12 lg:col-span-3 mb-8 lg:mb-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-caption text-swiss-muted">BACKGROUND</span>
            </motion.div>

            <motion.div
              className="col-span-12 lg:col-span-7"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="space-y-6 text-body leading-relaxed">
                <p>
                  With over 7 years of experience in digital product design, I&apos;ve
                  had the privilege of working with startups, agencies, and
                  established companies to create meaningful digital experiences.
                </p>
                <p>
                  My approach is rooted in the principles of Swiss design—clarity,
                  precision, and function. I believe that great design should feel
                  invisible, serving the user without calling attention to itself.
                </p>
                <p>
                  Beyond pixels, I&apos;m passionate about the intersection of design
                  and engineering. I code to better understand constraints and
                  possibilities, ensuring my designs are not just beautiful but
                  buildable.
                </p>
                <p className="text-swiss-muted">
                  When I&apos;m not designing, you&apos;ll find me exploring architecture,
                  reading about design history, or experimenting with generative
                  art.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-grid-6 border-t border-swiss-gray">
        <div className="grid-container">
          <div className="grid grid-cols-12 gap-6">
            <motion.div
              className="col-span-12 lg:col-span-3 mb-8 lg:mb-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-caption text-swiss-muted">EXPERIENCE</span>
            </motion.div>

            <div className="col-span-12 lg:col-span-9">
              <div className="space-y-12">
                {experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-4 gap-4"
                  >
                    <div className="md:col-span-1">
                      <span className="text-small text-swiss-muted">
                        {exp.period}
                      </span>
                    </div>
                    <div className="md:col-span-3">
                      <h3 className="text-subheading mb-1">{exp.role}</h3>
                      <span className="text-body text-swiss-yellow block mb-3">
                        {exp.company}
                      </span>
                      <p className="text-body text-swiss-muted">
                        {exp.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Tools */}
      <section className="py-grid-6 border-t border-swiss-gray">
        <div className="grid-container">
          <div className="grid grid-cols-12 gap-6">
            <motion.div
              className="col-span-12 lg:col-span-3 mb-8 lg:mb-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-caption text-swiss-muted">
                SKILLS & TOOLS
              </span>
            </motion.div>

            <div className="col-span-12 lg:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h3 className="text-subheading mb-6">Capabilities</h3>
                <ul className="space-y-3">
                  {skills.map((skill, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-swiss-yellow" />
                      <span className="text-body">{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-subheading mb-6">Tools</h3>
                <ul className="space-y-3">
                  {tools.map((tool, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-swiss-white" />
                      <span className="text-body">{tool}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-grid-4 border-t-2 border-swiss-gray">
        <div className="grid-container">
          <motion.div
            className="grid grid-cols-12 gap-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="col-span-12 lg:col-span-8">
              <span className="text-caption text-swiss-muted block mb-6">
                LET&apos;S WORK TOGETHER
              </span>
              <h2 className="text-display-lg mb-8">
                Have a project in mind?
                <br />
                <span className="text-swiss-muted">Let&apos;s talk.</span>
              </h2>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-4 text-heading hover:text-swiss-yellow transition-colors group"
              >
                {siteConfig.email}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="transform group-hover:translate-x-2 transition-transform"
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
            </div>

            {/* Geometric Element */}
            <div className="hidden lg:flex col-span-4 items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-32 h-32 border-4 border-swiss-gray"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
