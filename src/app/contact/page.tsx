"use client";

import { motion } from "framer-motion";
import { Footer, DotPattern } from "@/components";
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
                <p className="text-subheading text-swiss-muted max-w-md leading-relaxed">
                  Looking to build what&apos;s next or want to discuss design and development?
                  I'd love to hear from you.
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

      {/* Contact Information Section */}
      <section className="py-grid-7 border-t border-swiss-gray">
        <div className="grid-container">
          <div className="grid grid-cols-12 gap-8">
            {/* Email Section */}
            <motion.div
              className="col-span-12 lg:col-span-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="border-t border-swiss-gray pt-8">
                <span className="text-caption text-swiss-muted block mb-8">
                  EMAIL
                </span>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-display-lg text-swiss-white hover:text-swiss-yellow transition-colors duration-300 break-all"
                >
                  {siteConfig.email}
                </a>
              </div>
            </motion.div>

            {/* Location */}
            <motion.div
              className="col-span-12 lg:col-span-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="border-t border-swiss-gray pt-8">
                <span className="text-caption text-swiss-muted block mb-8">
                  LOCATION
                </span>
                <span className="text-display-lg text-swiss-white">
                  {siteConfig.location}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Links Section */}
      <section className="py-grid-7 border-t border-swiss-gray">
        <div className="grid-container">
          <motion.div
            className="mb-grid-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-caption text-swiss-muted block mb-6">
              CONNECT
            </span>
            <h2 className="text-display-lg">Find Me Online</h2>
          </motion.div>

          {/* Social Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-grid-3">
            {[
              {
                number: "1",
                name: "LinkedIn",
                url: siteConfig.social.linkedin,
              },
              {
                number: "2",
                name: "GitHub",
                url: siteConfig.social.github,
              },
            ].map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="border-t border-swiss-gray pt-8 group block"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <span className="text-number text-swiss-white block mb-6 group-hover:text-swiss-yellow transition-colors duration-300">
                  {social.number}
                </span>
                <span className="text-caption text-swiss-muted block mb-3">
                  / {social.name.toUpperCase()} /
                </span>
                <span className="text-heading text-swiss-white group-hover:text-swiss-yellow transition-colors duration-300">
                  View Profile →
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Section with Dot Pattern */}
      <section className="py-grid-7 border-t border-swiss-gray">
        <div className="grid-container">
          <div className="grid grid-cols-12 gap-8 items-center">
            <motion.div
              className="col-span-12 lg:col-span-7"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-caption text-swiss-muted block mb-8">
                AVAILABILITY
              </span>
              <p className="text-subheading text-swiss-muted max-w-xl leading-relaxed mb-6">
                I'm currently available for freelance projects and full-time opportunities.
                Let's create something great together.
              </p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-block text-heading text-swiss-white hover:text-swiss-yellow transition-colors duration-300"
              >
                Send me a message →
              </a>
            </motion.div>

            {/* Decorative Dot Pattern */}
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
