export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  color: "red" | "blue" | "yellow" | "black";
  thumbnail: string;
  hero: string;
  overview: {
    role: string;
    timeline: string;
    team: string;
    tools: string[];
  };
  results: {
    metric: string;
    value: string;
  }[];
  challenge: string;
  process: {
    title: string;
    description: string;
  }[];
  solution: string;
  learnings: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "hargreaves-lansdown",
    title: "Hargreaves Lansdown",
    subtitle: "Reimagining the investment experience for millions of users",
    category: "Product Design",
    year: "2024",
    color: "blue",
    thumbnail: "/images/hl/thumb.jpg",
    hero: "/images/hl/hero.jpg",
    overview: {
      role: "Senior Product Designer",
      timeline: "12 months",
      team: "4 designers, 12 engineers, 3 PMs",
      tools: ["Figma", "Protopie", "Maze", "Amplitude"],
    },
    results: [
      { metric: "Task completion", value: "+42%" },
      { metric: "User satisfaction", value: "+35%" },
      { metric: "Time on task", value: "-28%" },
    ],
    challenge:
      "Hargreaves Lansdown needed to modernise their digital investment platform while maintaining trust with their existing customer base. The legacy system had accumulated years of design debt, resulting in inconsistent patterns and a steep learning curve for new investors.",
    process: [
      {
        title: "Research & Discovery",
        description:
          "Conducted extensive user research with both novice and experienced investors. Mapped customer journeys and identified key pain points in the investment flow.",
      },
      {
        title: "Design Strategy",
        description:
          "Developed a phased approach to redesign that allowed for iterative improvements while maintaining platform stability and user trust.",
      },
      {
        title: "Design System",
        description:
          "Created a comprehensive design system that ensured consistency across all touchpoints while enabling faster development cycles.",
      },
      {
        title: "Testing & Iteration",
        description:
          "Ran multiple rounds of usability testing, A/B tests, and gathered quantitative data to validate design decisions.",
      },
    ],
    solution:
      "Delivered a modernised investment platform that simplifies complex financial information, improves accessibility, and creates a more intuitive experience for users at all levels of investment expertise.",
    learnings: [
      "Financial services require extra care in balancing innovation with trust",
      "Progressive disclosure helps manage complexity in data-heavy interfaces",
      "Accessibility improvements benefit all users, not just those with disabilities",
    ],
  },
  {
    slug: "virgin",
    title: "Virgin",
    subtitle: "Crafting digital experiences across the Virgin ecosystem",
    category: "Design Systems",
    year: "2023",
    color: "red",
    thumbnail: "/images/virgin/thumb.jpg",
    hero: "/images/virgin/hero.jpg",
    overview: {
      role: "Design Systems Lead",
      timeline: "8 months",
      team: "3 designers, 5 engineers",
      tools: ["Figma", "Storybook", "React", "Tokens Studio"],
    },
    results: [
      { metric: "Design efficiency", value: "+65%" },
      { metric: "Brand consistency", value: "+90%" },
      { metric: "Dev handoff time", value: "-50%" },
    ],
    challenge:
      "Virgin's diverse portfolio of brands needed a unified design language that could flex across different products while maintaining the iconic Virgin identity. Teams were duplicating effort and brand consistency was suffering.",
    process: [
      {
        title: "Brand Audit",
        description:
          "Conducted a comprehensive audit across Virgin's digital properties to understand the current state and identify opportunities for unification.",
      },
      {
        title: "Token Architecture",
        description:
          "Developed a flexible token system that allows brand-specific theming while maintaining core design principles.",
      },
      {
        title: "Component Library",
        description:
          "Built a modular component library that scales across different Virgin products and use cases.",
      },
      {
        title: "Documentation & Training",
        description:
          "Created comprehensive documentation and ran training sessions to ensure adoption across teams.",
      },
    ],
    solution:
      "Launched a unified design system that enables Virgin brands to move faster while staying on-brand. The system includes Figma libraries, coded components, and governance processes.",
    learnings: [
      "Multi-brand systems require flexibility without sacrificing consistency",
      "Governance is as important as the design system itself",
      "Early adopters are your best advocates for driving adoption",
    ],
  },
  {
    slug: "atg",
    title: "ATG",
    subtitle: "Transforming the theatre ticketing experience",
    category: "Product Design",
    year: "2023",
    color: "yellow",
    thumbnail: "/images/atg/thumb.jpg",
    hero: "/images/atg/hero.jpg",
    overview: {
      role: "Product Designer",
      timeline: "6 months",
      team: "2 designers, 8 engineers, 2 PMs",
      tools: ["Figma", "Principle", "Hotjar", "Google Analytics"],
    },
    results: [
      { metric: "Conversion rate", value: "+38%" },
      { metric: "Booking completion", value: "+45%" },
      { metric: "Customer satisfaction", value: "+52%" },
    ],
    challenge:
      "ATG's ticketing platform needed to compete in an increasingly digital-first market. The existing booking flow was complex, leading to high abandonment rates and customer frustration.",
    process: [
      {
        title: "User Research",
        description:
          "Conducted user interviews and analysed booking funnel data to identify drop-off points and user pain points.",
      },
      {
        title: "Journey Mapping",
        description:
          "Mapped the end-to-end booking experience, from discovery to post-show, to identify opportunities for improvement.",
      },
      {
        title: "Rapid Prototyping",
        description:
          "Created and tested multiple prototype concepts to validate new booking flows and seat selection interfaces.",
      },
      {
        title: "Iterative Launch",
        description:
          "Rolled out improvements incrementally, measuring impact and iterating based on real user data.",
      },
    ],
    solution:
      "Redesigned the ticketing experience with a focus on simplicity and delight. The new platform features intuitive seat selection, streamlined checkout, and personalised recommendations.",
    learnings: [
      "Entertainment purchases are emotional—design should enhance anticipation",
      "Seat selection UI is critical for theatre bookings",
      "Mobile-first approach is essential for impulse purchases",
    ],
  },
  {
    slug: "gds-mcp",
    title: "GDS-MCP",
    subtitle: "AI-powered documentation workflow for the Global Design System",
    category: "AI Engineering / Design Systems",
    year: "2024",
    color: "black",
    thumbnail: "/images/gds-mcp/thumb.jpg",
    hero: "/images/gds-mcp/hero.jpg",
    overview: {
      role: "Developer & Designer",
      timeline: "Ongoing",
      team: "2 contributors",
      tools: ["TypeScript", "MCP SDK", "Figma API", "Node.js"],
    },
    results: [
      { metric: "Components documented", value: "50+" },
      { metric: "Documentation layers", value: "5" },
      { metric: "Tool integrations", value: "4" },
    ],
    challenge:
      "Design system documentation is time-consuming to write and quickly becomes outdated. Developers and AI assistants struggle to find accurate, structured information about components, tokens, and patterns. I wanted to automate documentation generation directly from Figma designs, optimised for LLM retrieval.",
    process: [
      {
        title: "Figma API Integration",
        description:
          "Built a Figma plugin and API integration to extract component data, variants, design tokens, and properties directly from design files.",
      },
      {
        title: "MCP Server Architecture",
        description:
          "Designed an MCP server that exposes design system documentation to AI assistants. Structured content across atoms, molecules, organisms, foundations, and patterns.",
      },
      {
        title: "Documentation Schema",
        description:
          "Created a structured markdown format including component overviews, variants, accessibility requirements, Tailwind mappings, and CSS custom properties.",
      },
      {
        title: "Multi-tool Support",
        description:
          "Enabled integration with Claude Code, Cursor, VS Code, and Windsurf—allowing teams to query design system docs directly in their workflow.",
      },
    ],
    solution:
      "Shipped an open-source MCP server that generates structured documentation from Figma designs. The /figma-doc command extracts component specs, design tokens, and accessibility guidelines. AI assistants can now answer questions about the design system with accurate, up-to-date information.",
    learnings: [
      "MCP makes design system knowledge accessible to AI assistants in context",
      "Structured documentation formats are essential for LLM retrieval accuracy",
      "Automating from source (Figma) keeps documentation in sync with designs",
    ],
  },
];

export const siteConfig = {
  name: "James O'Dwyer",
  title: "Digital Designer",
  subtitle: "& Developer",
  email: "hello@jamesodwyer.com",
  location: "London, UK",
  bio: "I design and build digital products that balance form and function. With a background in both design and engineering, I bridge the gap between vision and implementation.",
  social: {
    linkedin: "https://linkedin.com/in/jamesodwyer",
    github: "https://github.com/jamesodwyer",
    twitter: "https://twitter.com/jamesodwyer",
  },
};
