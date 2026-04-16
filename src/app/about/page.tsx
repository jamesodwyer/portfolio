"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";
import { Footer, DotPattern } from "@/components";

const experience = [
  {
    role: "Associate Director – Global Design Systems",
    company: "Ticketmaster, London",
    period: "Mar 2024 – Present",
    freelance: false,
    bullets: [
      "Own and scale a global design system across 8 products and multiple business verticals",
      "Established a federated contribution model enabling 20+ designers to contribute to a single governed system",
      "Defined and implemented token architecture supporting multi-brand theming across platforms",
      "Introduced AI-driven design workflows (MCP, Claude, Figma Make) to accelerate component delivery and reduce manual effort",
      "Improved cross-team consistency and reduced duplication across product teams",
      "Partner with product and engineering leadership to align design strategy with delivery outcomes",
      "Mentor and develop designers, raising overall design maturity across teams",
    ],
  },
  {
    role: "Head of Digital / Principal Product Designer",
    company: "ATG Tickets, London (Ticketing / Ecom)",
    period: "Aug 2022 – Jan 2024",
    freelance: true,
    bullets: [
      "Led digital product design across web and mobile platforms for a global ticketing business",
      "Established and rolled out a design system to improve consistency and delivery speed",
      "Defined UX strategy across key customer journeys, improving usability and conversion",
      "Built and led design capability, introducing scalable ways of working across teams",
      "Collaborated with senior stakeholders to align design with commercial objectives",
    ],
  },
  {
    role: "Principal Product Designer",
    company: "CMC Invest, London (Finance)",
    period: "May 2022 – Aug 2022",
    freelance: true,
    bullets: [
      "Led product design for mobile-first investment platform",
      "Delivered high-quality UX/UI across complex financial workflows",
      "Partnered with product and engineering to deliver scalable design solutions",
      "Introduced design system thinking to improve consistency across the platform",
    ],
  },
  {
    role: "Lead Product Designer",
    company: "Yell (B2B)",
    period: "Feb 2022 – May 2022",
    freelance: true,
    bullets: [
      "Led UX and product design across B2B digital products",
      "Delivered mobile and responsive experiences for SME customers",
      "Introduced structured design processes and improved research practices",
      "Contributed to design system development and scalable UI patterns",
    ],
  },
  {
    role: "Senior User Experience Consultant",
    company: "CX Partners, Bristol (Learning Platform)",
    period: "Dec 2021 – Feb 2022",
    freelance: true,
    bullets: [
      "Delivered service design and UX strategy for large-scale digital platforms",
      "Led user research and defined user journeys across complex systems",
      "Facilitated workshops and stakeholder alignment sessions",
      "Produced end-to-end UX deliverables from discovery through to delivery",
    ],
  },
  {
    role: "Lead User Interface Designer",
    company: "Hargreaves Lansdown, Bristol (Finance)",
    period: "Nov 2018 – Nov 2021",
    freelance: true,
    bullets: [
      "Led UI design across web platforms for a leading financial services provider",
      "Contributed to and evolved the organisation\u2019s design system",
      "Delivered responsive, accessible interfaces across multiple products",
      "Worked closely with engineering teams to ensure high-quality implementation",
    ],
  },
  {
    role: "Senior Product Designer",
    company: "Parmenion, Bristol (Finance)",
    period: "Nov 2016 – Nov 2018",
    freelance: true,
    bullets: [
      "Delivered UX and UI design across financial platforms",
      "Led interaction design and user research initiatives",
      "Collaborated with cross-functional teams to deliver product improvements",
    ],
  },
  {
    role: "User Experience & Digital Designer",
    company: "Various Clients",
    period: "2010 – 2016",
    freelance: true,
    bullets: [
      "Delivered UX and digital design across major brands including BBC, Sky, UEFA, Disney, and Expedia",
      "Worked across multiple industries including media, sports, finance, and e-commerce",
      "Led design delivery across web, mobile, and emerging platforms",
      "Established early design system thinking across client projects",
    ],
  },
];

const coreSkills = [
  "Design Systems Strategy & Ownership",
  "AI-Driven Design Workflows (MCP, Claude, Figma Make)",
  "Design Operations & Governance",
  "Token Architecture (Core, Semantic, Component)",
  "Multi-Brand & Theming Systems",
  "Federated Contribution Models",
  "Cross-Functional Leadership (Design, Product, Engineering)",
  "Product Design Leadership (Enterprise / Multi-Product)",
  "End-to-End Product Design (Discovery \u2192 Delivery)",
  "Scalable Component & Pattern Libraries",
  "Design System Automation & Documentation",
  "Figma, Token Studio & Front-End Collaboration",
];

const tools = [
  "Figma",
  "Token Studio",
  "Storybook",
  "React collaboration",
  "HTML/CSS",
  "Git",
  "Miro",
  "Notion",
  "Jira",
  "Confluence",
  "AI tooling (Claude, MCP)",
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
                  I&apos;m a design systems leader and design technologist based in the UK, currently scaling Ticketmaster&apos;s Global Design System across eight products and pioneering AI-driven design operations that enable small teams to deliver at enterprise scale.
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
                  Associate Director of Design Systems at Ticketmaster, responsible
                  for defining and scaling a global design system across eight products
                  and multiple business verticals. I lead the intersection of product,
                  design, and engineering, building systems and operating models that
                  improve speed, consistency, and measurable delivery outcomes at scale.
                </p>
                <p>
                  I have established a federated contribution model that enables 20+
                  designers across product teams to contribute into a single governed
                  system, transforming design delivery from a centralised bottleneck
                  into a distributed, self-sustaining capability. This has strengthened
                  cross-team alignment, increased adoption, and accelerated delivery
                  across complex product ecosystems.
                </p>
                <p>
                  My current focus is on AI-enabled design operations. I design and
                  implement workflows that make design systems queryable, executable,
                  and embedded into the product lifecycle. This includes building
                  MCP-based infrastructure, automating token pipelines, and creating
                  documentation systems optimised for both human and AI consumption,
                  enabling multi-brand scalability and faster product iteration.
                </p>
                <p>
                  I operate end-to-end across discovery and delivery, from prototyping
                  and piloting new approaches through to production-ready implementation.
                  I lead through a combination of strategic direction and hands-on
                  execution, mentoring teams, improving design maturity, and embedding
                  scalable ways of working across organisations.
                </p>
                <p>
                  Prior to Ticketmaster, I have delivered design systems and digital
                  products across fintech and platform businesses including ATG Tickets,
                  Hargreaves Lansdown, CMC Invest, Yell, and CX Partners.
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
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    className="grid grid-cols-1 md:grid-cols-4 gap-4"
                  >
                    <div className="md:col-span-1">
                      <span className="text-small text-swiss-muted">
                        {exp.period}
                      </span>
                    </div>
                    <div className="md:col-span-3">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-subheading">{exp.role}</h3>
                        {exp.freelance && (
                          <span className="text-[10px] tracking-widest uppercase text-swiss-muted border border-swiss-gray px-2 py-0.5 rounded-full">
                            Freelance
                          </span>
                        )}
                      </div>
                      <span className="text-body text-swiss-yellow block mb-3">
                        {exp.company}
                      </span>
                      <ul className="space-y-2">
                        {exp.bullets.map((bullet, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 bg-swiss-muted rounded-full mt-2 flex-shrink-0" />
                            <span className="text-body text-swiss-muted">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Skills & Tools */}
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
                <h3 className="text-subheading mb-6">Core Skills</h3>
                <ul className="space-y-3">
                  {coreSkills.map((skill, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-swiss-muted rounded-full mt-2 flex-shrink-0" />
                      <span className="text-body text-swiss-muted">{skill}</span>
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
                <h3 className="text-subheading mb-6">Tools & Technology</h3>
                <ul className="space-y-3">
                  {tools.map((tool, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-swiss-muted rounded-full mt-2 flex-shrink-0" />
                      <span className="text-body text-swiss-muted">{tool}</span>
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
                Looking to build what&apos;s next?
                <br />
                <span className="text-swiss-yellow">Let&apos;s talk.</span>
              </h2>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-4 text-heading hover:text-swiss-yellow transition-colors group"
              >
                Get in touch → {siteConfig.email}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
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
              <DotPattern
                rows={8}
                cols={8}
                dotSize={10}
                gap={10}
                circular={true}
                className="text-swiss-yellow"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
