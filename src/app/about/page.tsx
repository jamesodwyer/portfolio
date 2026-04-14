"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";
import { Footer, DotPattern } from "@/components";

const experience = [
  {
    role: "Associate Director - Global Design Systems",
    company: "Ticketmaster London",
    period: "Mar 2024 - Present",
    description:
      "Scaling the Global Design System across 8 products and 2 verticals. Leading AI integration, token architecture, MCP documentation, and a contribution model with 20+ designers.",
    skills: ["Design Systems", "Mentoring", "Team Leadership", "AI", "User Interface Design", "User-centered Design", "User Experience Design", "Creative Problem Solving", "Responsive Web Design"],
  },
  {
    role: "Head of Digital / Principal Product Designer",
    company: "ATG Tickets London (Ticketing/Ecom)",
    period: "Aug 2022 - Jan 2024",
    description:
      "Built a multi-brand design system from the ground up - foundations, tokens, governance, and Git workflows to scale ATG's digital estate.",
    skills: ["Team Leadership", "User Interface Design", "User-centered Design", "Service Design", "User Experience Design", "Design Systems", "Creative Problem Solving", "Responsive Web Design"],
  },
  {
    role: "Principal Product Designer",
    company: "CMC Invest London (Finance)",
    period: "May 2022 - Aug 2022",
    description:
      "Product design for a finance platform, focusing on mobile design, design systems, and creative problem solving across iOS.",
    skills: ["Team Leadership", "User Interface Design", "User Experience Design", "Mobile Design", "iOS", "Design Systems", "Creative Problem Solving"],
  },
  {
    role: "Lead Product Designer",
    company: "Yell (B2B)",
    period: "Feb 2022 - May 2022",
    description:
      "Designed and tested new features for Yell's platform using lean research, systematic UI assets, and a reusable component approach across iOS, Android, and responsive web.",
    skills: ["Team Leadership", "User Experience Design", "Mobile Design", "User Research", "iOS", "Design Systems", "Responsive Web Design"],
  },
  {
    role: "Senior User Experience Consultant",
    company: "CX Partners Bristol (Learning Platform)",
    period: "Dec 2021 - Feb 2022",
    description:
      "Service design and UX consultancy for a learning platform, leading user research, user flows, and graphic design.",
    skills: ["Team Leadership", "Service Design", "User Experience", "Graphic Design", "User-centered Design", "User Research", "User Flows"],
  },
  {
    role: "Lead User Interface Designer",
    company: "Hargreaves Lansdown Bristol (Finance)",
    period: "Nov 2018 - Nov 2021",
    description:
      "Led the AEM migration and established a design system that brought consistency and reduced call centre volumes across all digital products.",
    skills: ["Team Leadership", "User Interface Design", "User Experience Design", "Experience Design", "Design Systems", "Responsive Web Design"],
  },
  {
    role: "Senior Product Designer",
    company: "Parmenion Bristol (Finance)",
    period: "Nov 2016 - Nov 2018",
    description:
      "Product design for a financial services platform, focusing on user experience, interaction design, and user research.",
    skills: ["Team Leadership", "User Experience", "User Interface Design", "Interaction Design", "User Research"],
  },
  {
    role: "User Experience & Digital Designer",
    company: "Various Clients",
    period: "2010 - 2016",
    description:
      "Start-ups, Nationwide Building Society, Expedia, SKY Sports, Booking.com, EA Sports, MySingleFriend, Muller, Sky Sports, Sky, ECCO, Nickelodeon, Hasbro Toys, Disney, UEFA, BBC, Comic Relief.",
    skills: [],
  },
];

const keySkills = [
  "Product Design",
  "Design Systems",
  "Service Design",
  "User-centred Design",
  "Strategy",
  "Team Leadership",
  "Mentoring",
  "Creative Problem Solving",
  "Responsive Web Design",
  "Native App Design",
  "Building AI Workflows",
  "Design System MCP",
  "Custom Built Plugins for Figma",
];

const tools = [
  "Figma",
  "Sketch",
  "Invision",
  "Figma Tokens",
  "MIRO",
  "Axure",
  "UXPin",
  "Swift Prototyping in iOS",
  "Git",
  "HTML & CSS",
  "Mentoring",
  "Documenting",
  "Notion",
  "Confluence",
  "JIRA",
];

const processes = [
  "Design Thinking",
  "Mental Models",
  "Lean",
  "Agile",
  "Agile at Scale",
  "Workshops",
  "Interviewing",
  "AB Testing",
  "Remote Testing",
];

const brands = [
  "Ticketmaster", "ATG Tickets", "Virgin Money", "Hargreaves Lansdown",
  "Yell4Business", "Doctor Who", "Comic Relief", "Anchor", "Muller Cravendale",
  "Guinness", "Sony", "SKY", "SKY Sports", "MySingleFriend",
  "Expedia (Global)", "Nationwide Building Society", "Booking.com",
  "EA Sports", "ECCO", "Nickelodeon", "Hasbro Toys", "Disney",
  "UEFA", "BBC", "Bugatti", "CX Partners",
];

const favWork = [
  { brand: "Ticketmaster", project: "Token Systems" },
  { brand: "ATG Tickets", project: "Design System Set Up" },
  { brand: "CX Partners", project: "Service Design" },
  { brand: "Hargreaves Lansdown", project: "Design System" },
  { brand: "Virgin Money", project: "iOS App" },
  { brand: "Bugatti", project: "App Design" },
  { brand: "BBC", project: "Doctor Who Games" },
  { brand: "Cravendale", project: "Last Glass Online Version" },
  { brand: "Muller Yogurts", project: "How Milk is Made" },
  { brand: "Anchor Butter", project: "Make a Moooo" },
  { brand: "Guinness", project: "Infinity Bar" },
  { brand: "Comic Relief", project: "Donation iOS App" },
  { brand: "Sky Sports", project: "Moments" },
  { brand: "Expedia", project: "Responsive Conversion" },
  { brand: "Nationwide", project: "Tablet Application" },
];

const recognition = [
  "Cardiff Design Festival",
  "Glug Networking",
  "Teschan Books",
  "World Travel Awards",
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
                  I&apos;m a designer and design technologist based in {siteConfig.location}.
                  Currently scaling Ticketmaster&apos;s Global Design System across 8 products
                  and pioneering AI-powered design operations that let a small team
                  perform like a large one.
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
                      <h3 className="text-subheading mb-1">{exp.role}</h3>
                      <span className="text-body text-swiss-yellow block mb-3">
                        {exp.company}
                      </span>
                      <p className="text-body text-swiss-muted mb-3">
                        {exp.description}
                      </p>
                      {exp.skills.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, i) => (
                            <span
                              key={i}
                              className="text-micro px-2 py-1 border border-swiss-gray text-swiss-muted"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills, Tools & Process */}
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

            <div className="col-span-12 lg:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h3 className="text-subheading mb-6">Key Skills</h3>
                <ul className="space-y-3">
                  {keySkills.map((skill, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-swiss-yellow flex-shrink-0" />
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
                      <span className="w-2 h-2 bg-swiss-white flex-shrink-0" />
                      <span className="text-body">{tool}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h3 className="text-subheading mb-6">Process</h3>
                <ul className="space-y-3">
                  {processes.map((process, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-swiss-gray flex-shrink-0" />
                      <span className="text-body">{process}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands */}
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
              <span className="text-caption text-swiss-muted">BRANDS</span>
              <div className="mt-4">
                <span className="text-number-sm text-swiss-yellow">{brands.length}+</span>
              </div>
            </motion.div>

            <motion.div
              className="col-span-12 lg:col-span-9"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex flex-wrap gap-3">
                {brands.map((brand, index) => (
                  <span
                    key={index}
                    className="text-small px-4 py-2 border border-swiss-gray text-swiss-white hover:border-swiss-yellow hover:text-swiss-yellow transition-colors"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Favourite Work */}
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
              <span className="text-caption text-swiss-muted">FAVOURITE WORK</span>
            </motion.div>

            <div className="col-span-12 lg:col-span-9">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {favWork.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-baseline gap-3"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.03 }}
                  >
                    <span className="text-body font-semibold">{item.brand}</span>
                    <span className="text-small text-swiss-muted">- {item.project}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="py-grid-4 border-t border-swiss-gray">
        <div className="grid-container">
          <div className="grid grid-cols-12 gap-6">
            <motion.div
              className="col-span-12 lg:col-span-3 mb-8 lg:mb-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-caption text-swiss-muted">RECOGNITION</span>
            </motion.div>

            <motion.div
              className="col-span-12 lg:col-span-9"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex flex-wrap gap-6">
                {recognition.map((item, index) => (
                  <span key={index} className="text-body text-swiss-white">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* General Interests */}
      <section className="py-grid-4 border-t border-swiss-gray">
        <div className="grid-container">
          <div className="grid grid-cols-12 gap-6">
            <motion.div
              className="col-span-12 lg:col-span-3 mb-8 lg:mb-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-caption text-swiss-muted">GENERAL</span>
            </motion.div>

            <motion.div
              className="col-span-12 lg:col-span-9"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="text-body text-swiss-muted leading-relaxed">
                Cooking, surfing, gym, new technologies, eating, swimming, my lawn, my family,
                cycling, meeting new people, travel, experimenting with Indian cooking, Lego!
              </p>
            </motion.div>
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
