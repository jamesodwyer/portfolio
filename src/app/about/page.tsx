"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";
import { Footer, DotPattern } from "@/components";

const experience = [
  {
    role: "Associate Director, Global Design Systems",
    company: "Ticketmaster",
    period: "Mar 2024 – Present",
    contract: false,
    bullets: [
      "Leading the evolution and operational scaling of Ticketmaster’s Global Design System across eight products and multiple business verticals",
      "Established a federated contribution model enabling 20+ designers across distributed product teams to contribute into a single governed system",
      "Defined and implemented token architecture supporting scalable multi-brand theming across enterprise platforms",
      "Introduced AI-enabled workflows using MCP infrastructure, Claude, and Figma Make to accelerate component delivery and improve design-to-engineering collaboration",
      "Improved cross-team consistency, governance, and operational scalability across complex product ecosystems",
      "Partner closely with product and engineering leadership to align design strategy with delivery outcomes and platform scalability",
      "Mentor and support designers across product teams, improving design maturity and scalable ways of working",
    ],
  },
  {
    role: "Head of Digital / Principal Product Designer",
    company: "ATG Tickets",
    period: "Aug 2022 – Jan 2024",
    contract: true,
    bullets: [
      "Led digital product design across web and mobile platforms for a global ticketing and e-commerce business",
      "Established and scaled a design system to improve consistency, operational efficiency, and delivery speed across teams",
      "Defined UX strategy across key customer journeys, improving usability and supporting conversion-focused product experiences",
      "Built and developed design capability through scalable workflows, collaboration models, and structured delivery processes",
      "Collaborated with senior stakeholders to align customer experience strategy with commercial and operational objectives",
    ],
  },
  {
    role: "Principal Product Designer",
    company: "CMC Invest",
    period: "May 2022 – Aug 2022",
    contract: true,
    bullets: [
      "Led product design for a mobile-first investment platform within a fast-paced fintech environment",
      "Delivered scalable UX and UI solutions across complex financial workflows and customer journeys",
      "Partnered closely with product and engineering teams to improve delivery quality and implementation consistency",
      "Introduced design system thinking and reusable design approaches to improve scalability across the platform",
    ],
  },
  {
    role: "Lead Product Designer",
    company: "Yell",
    period: "Feb 2022 – May 2022",
    contract: true,
    bullets: [
      "Led UX and product design initiatives across B2B digital products and SME-focused experiences",
      "Delivered responsive and mobile-first experiences across customer-facing platforms",
      "Introduced structured design processes and improved research and collaboration workflows",
      "Contributed to scalable design system development and reusable UI standards",
    ],
  },
  {
    role: "Senior User Experience Consultant",
    company: "CX Partners",
    period: "Dec 2021 – Feb 2022",
    contract: true,
    bullets: [
      "Delivered UX strategy and service design across large-scale digital learning platforms",
      "Led user research, journey mapping, and stakeholder workshops across complex systems",
      "Facilitated cross-functional alignment sessions and produced end-to-end UX deliverables from discovery through delivery",
    ],
  },
  {
    role: "Lead User Interface Designer",
    company: "Hargreaves Lansdown",
    period: "Nov 2018 – Nov 2021",
    contract: true,
    bullets: [
      "Led UI design across web platforms for a major financial services organisation",
      "Contributed to the evolution of the organisation\u2019s design system and reusable UI standards",
      "Delivered responsive and accessible experiences across multiple financial products and services",
      "Worked closely with engineering teams to ensure high-quality implementation and scalable delivery",
    ],
  },
  {
    role: "Senior Product Designer",
    company: "Parmenion",
    period: "Nov 2016 – Nov 2018",
    contract: true,
    bullets: [
      "Delivered UX and UI design across digital financial platforms and investment experiences",
      "Led interaction design and user research initiatives across multiple product areas",
      "Collaborated with cross-functional teams to deliver scalable product improvements and customer-focused experiences",
    ],
  },
  {
    role: "User Experience & Digital Designer",
    company: "Earlier Experience",
    period: "2010 – 2016",
    contract: true,
    bullets: [
      "Worked across major brands including BBC, Sky, UEFA, Disney, Expedia, Comic Relief, Sky Sports, Dr WHO, Cravendale, Guinness, and Arla",
      "Delivered UX, digital product, and design system work across media, entertainment, FMCG, sports, finance, and e-commerce sectors",
      "Led design delivery across web, mobile, and emerging platforms",
      "Established early design system thinking across client projects",
    ],
  },
];

const coreSkills = [
  "Enterprise & Startup Design Systems",
  "AI-Driven Product Operations",
  "Design Operations & Governance",
  "MCP Infrastructure & AI Workflows",
  "Federated Contribution Models",
  "Multi-Brand Design Systems",
  "Team Development & Coaching",
  "Scalable Product Systems",
  "Accessibility & WCAG",
  "Cross-Functional Leadership",
  "Product Design Leadership",
  "Product Engineering Collaboration",
  "Product Discovery & Delivery",
  "Rapid Prototyping",
  "High-Fidelity Product Prototyping",
];

const tools = [
  "Figma",
  "Storybook",
  "Claude Code",
  "MCP Infrastructure",
  "Workflow Automation",
  "AI-Assisted Prototyping",
  "Agent Workflows",
  "Reusable AI Skills",
  "Front-End Collaboration",
  "Xcode",
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
                  I specialise in enterprise design systems, scalable product operations, rapid prototyping, web and app design, and AI-enabled workflows that improve delivery speed and consistency across large and small organisations.
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
                  At Ticketmaster, I currently lead the evolution of a global
                  design system spanning eight products and supporting
                  collaboration across distributed design and engineering teams.
                  My work focuses on governance, contribution models, token
                  architecture, accessibility, and operational scalability.
                </p>
                <p>
                  More recently, I&apos;ve been exploring how AI can improve
                  design and engineering workflows through MCP infrastructure,
                  machine-readable systems, rapid prototyping, and workflow
                  automation, helping teams reduce friction between design,
                  documentation, and implementation.
                </p>
                <p>
                  Alongside leadership and strategy, I remain hands-on with
                  end-to-end product design, systems thinking, and
                  cross-functional collaboration, and I love helping teams
                  rapidly test ideas, scale operationally, and deliver
                  high-quality user experiences across complex platforms.
                </p>
                <p>
                  Prior to Ticketmaster, I delivered design systems and digital
                  products across fintech and platform businesses including ATG
                  Tickets, Hargreaves Lansdown, CMC Invest, Yell, and CX
                  Partners.
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
                        {exp.contract && (
                          <span className="text-[10px] tracking-widest uppercase text-swiss-muted border border-swiss-gray px-2 py-0.5 rounded-full">
                            Contract
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
                      <span className="w-3 h-3 bg-swiss-yellow rounded-full mt-1.5 flex-shrink-0" />
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
                <h3 className="text-subheading mb-6">Platforms & AI Workflows</h3>
                <ul className="space-y-3">
                  {tools.map((tool, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-3 h-3 bg-swiss-muted rounded-full mt-1.5 flex-shrink-0" />
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
