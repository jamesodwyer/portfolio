export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  color: "red" | "blue" | "yellow" | "black";
  thumbnail: string;
  hero: string;
  gallery?: string[];
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
    slug: "ticketmaster-gds",
    title: "Ticketmaster GDS",
    subtitle: "Scaling a Global Design System Across Products and Teams - Transforming fragmented workflows into a scalable design platform that enables consistent, high-quality product delivery at scale",
    category: "Design Systems / Leadership",
    year: "",
    color: "blue",
    thumbnail: "/images/ticketmaster-gds/thumb.svg",
    hero: "/images/ticketmaster-gds/hero.png",
    overview: {
      role: "Associate Director, Product Design",
      timeline: "18 months (ongoing)",
      team: "Cross-functional product teams, design contributors, engineering partners",
      tools: ["Figma", "Token Studio", "Jira", "Claude Code", "Confluence"],
    },
    results: [
      { metric: "Scale", value: "Multiple products across distinct business verticals" },
      { metric: "Adoption", value: "Widely used across product teams, enabling consistent delivery" },
      { metric: "Operating Model", value: "A structured system for contribution, governance, and continuous evolution" },
    ],
    challenge:
      "Ticketmaster operates across a complex ecosystem of products, each with its own priorities, workflows, and technical constraints. This created fragmentation across teams, inconsistent user experiences, and duplication of effort, making it difficult to scale effectively. The challenge was not just to define a design system, but to embed a model that enables teams to build consistently, efficiently, and at scale.",
    process: [
      {
        title: "System Architecture",
        description:
          "A scalable foundation designed to support multiple products and use cases.",
      },
      {
        title: "Contribution Model",
        description:
          "A federated approach enabling teams to contribute while maintaining quality and consistency.",
      },
      {
        title: "Cross-Team Alignment",
        description:
          "Shared visibility and structured workflows across product teams.",
      },
      {
        title: "AI as an Enabler",
        description:
          "AI-driven workflows supporting documentation, contribution, and delivery at scale.",
      },
    ],
    solution:
      "The Global Design System now supports multiple products through a standardised, scalable approach to design and development. It enables teams to build consistently using shared components and patterns, contribute back into the system through a governed model, and move faster with reduced duplication and clearer workflows. AI-driven infrastructure supports ongoing documentation and enables teams to work more independently, reducing reliance on central coordination. The result is a system that doesn't just document decisions, but enables them at scale.",
    learnings: [
      "A design system is an operating model, not just a component library",
      "Scalable contribution requires ownership, not central control",
      "Complexity at scale must be solved through systems, not coordination",
      "The right infrastructure enables small teams to operate at organisational scale",
    ],
  },
  {
    slug: "gds-mcp",
    title: "GDS-MCP",
    subtitle: "Building an AI-native knowledge layer for a Global Design System - Transforming a static design system into a queryable, intelligent platform that enables teams and AI tools to design and build with accuracy, speed, and confidence",
    category: "AI Engineering / Design Systems",
    year: "",
    color: "black",
    thumbnail: "/images/gds-mcp/thumb.svg",
    hero: "/images/gds-mcp/hero.png",
    overview: {
      role: "Associate Director, Product Design",
      timeline: "6 months (ongoing)",
      team: "Cross-functional design and engineering teams",
      tools: ["TypeScript", "MCP SDK", "Figma API", "Claude Code", "Token Studio"],
    },
    results: [
      { metric: "Coverage", value: "Supports multiple products across design and engineering workflows" },
      { metric: "Capability", value: "Design system becomes AI-queryable and self-serve" },
      { metric: "Integration", value: "Embedded directly into design and development environments" },
    ],
    challenge:
      "As the Global Design System scaled across multiple products and teams, documentation struggled to keep pace with implementation. This created friction across the organisation: teams relied on fragmented sources of truth, knowledge was distributed across tools and individuals, and design and engineering decisions were harder to validate and scale. The core issue wasn't documentation quality, but the model itself. The system needed to evolve from static documentation into a living, queryable source of truth that could support teams in real time.",
    process: [
      {
        title: "System Integration",
        description:
          "Connects directly to design source files to extract structured system data.",
      },
      {
        title: "Knowledge Architecture",
        description:
          "Organises design system information into a format optimised for retrieval and reuse.",
      },
      {
        title: "AI Enablement",
        description:
          "Enables AI tools to query, interpret, and apply system rules within real workflows.",
      },
      {
        title: "Adoption Strategy",
        description:
          "Introduced through real workflows, validating value before scaling across teams.",
      },
    ],
    solution:
      "Designed and delivered an AI-native knowledge layer for the design system, enabling teams and tools to access structured, reliable information directly from source. This transformed the design system from a static library into queryable infrastructure, where designers can retrieve guidance instantly within their workflow, engineers can access accurate implementation-ready specifications, and AI tools can generate and validate outputs against system standards. The result is a system that no longer requires manual documentation upkeep, but instead maintains itself as part of the design and delivery process.",
    learnings: [
      "Documentation should function as infrastructure, not a deliverable",
      "Design systems must evolve from static libraries into intelligent platforms",
      "Adoption is driven by real workflow value, not mandated process",
      "The true impact of AI is reducing dependency on coordination and support",
    ],
  },
  {
    slug: "token-migration",
    title: "Token Migration",
    subtitle: "Re-architecting the design system foundation to enable scale, theming, and multi-product delivery - Transforming fragmented design tokens into a structured, scalable system that supports multiple products, brands, and future platform growth",
    category: "Design Systems / Architecture",
    year: "",
    color: "yellow",
    thumbnail: "/images/token-migration/thumb.svg",
    hero: "/images/token-migration/hero.png",
    overview: {
      role: "Associate Director, Product Design",
      timeline: "3 months",
      team: "Cross-functional design and engineering teams",
      tools: ["Token Studio", "Figma", "Jira", "Claude Code"],
    },
    results: [
      { metric: "Scope", value: "Supports multiple products and product verticals from a shared foundation" },
      { metric: "Capability", value: "Enables multi-brand theming and white-label scalability" },
      { metric: "Impact", value: "Removes architectural blockers across design and engineering workflows" },
    ],
    challenge:
      "The design system had evolved organically across multiple products, resulting in fragmentation at its core. Design decisions were inconsistent and difficult to scale, token usage varied across teams and implementations, and there was no shared structure to support theming or expansion. This wasn't simply design debt. It was an architectural limitation that prevented the system from scaling across products, brands, and future use cases. Without a clear token model, teams were blocked from moving forward.",
    process: [
      {
        title: "Architecture Design",
        description:
          "Defined a scalable token model that separates foundation, semantic, and brand layers, enabling consistency and flexibility across all products.",
      },
      {
        title: "Source of Truth",
        description:
          "Established a centralised token system that aligns design and engineering, ensuring consistency across tools and platforms.",
      },
      {
        title: "Migration Strategy",
        description:
          "Delivered a focused migration approach that replaced fragmented tokens with a unified system across products.",
      },
      {
        title: "Scale Enablement",
        description:
          "Extended the system to support multi-brand and white-label use cases without duplication or rework.",
      },
    ],
    solution:
      "Designed and implemented a multi-layer token architecture that established a single, scalable foundation for the entire design system. The system introduced clear separation between foundation tokens for consistency across all products, semantic tokens for flexible context-driven usage, and brand tokens for customisation and white-label support. This structure enabled teams to build independently while remaining aligned to a shared system. Rather than fixing individual inconsistencies, the solution eliminated the conditions that created them. The token system shifted from being a constraint to becoming a core enabler of product delivery.",
    learnings: [
      "Token architecture is product strategy, not just design infrastructure",
      "A well-structured system scales faster than incremental fixes",
      "Layered token models are essential for multi-product and multi-brand environments",
      "The goal isn't fixing token misuse, it's preventing it entirely",
    ],
  },
  {
    slug: "ai-design-workflows",
    title: "AI Design Workflows",
    subtitle: "Building AI-powered design operations that scale a global system with minimal team overhead - Designed and implemented an AI-driven operational model that transforms how design systems are built, maintained, and scaled across multiple products",
    category: "AI / Design Operations",
    year: "",
    color: "red",
    thumbnail: "/images/ai-design-workflows/thumb.svg",
    hero: "/images/ai-design-workflows/hero.png",
    overview: {
      role: "Associate Director, Product Design",
      timeline: "12-month roadmap",
      team: "Cross-functional design, engineering, and platform teams",
      tools: ["Claude Code", "MCP SDK", "Figma", "GitLab", "Token Studio"],
    },
    results: [
      { metric: "Operational Coverage", value: "AI workflows supporting multiple products and design system operations" },
      { metric: "Efficiency Gain", value: "Reduction in manual workload across design and documentation processes" },
      { metric: "Adoption Model", value: "Transition from individual workflows to team-level and organisation-wide rollout" },
    ],
    challenge:
      "Managing a global design system across multiple products with limited resources exposed a fundamental constraint: traditional workflows do not scale. Workloads were fragmented across multiple threads and teams, manual processes created bottlenecks in delivery and quality, and increasing system complexity required more coordination, not less. The problem wasn't tooling. It was the operating model. To scale effectively, design operations needed to shift from manual execution to system-driven workflows.",
    process: [
      {
        title: "Personal System (Proof of Value)",
        description:
          "Built an AI-powered operational system to manage design system workflows, validating AI's ability to handle complexity before scaling.",
      },
      {
        title: "Team Workflows (Scalable Execution)",
        description:
          "Developed repeatable AI workflows that enable designers to create components and outputs aligned with system standards.",
      },
      {
        title: "Platform Integration",
        description:
          "Integrated AI workflows into existing tools and repositories, ensuring outputs align with production systems and engineering processes.",
      },
      {
        title: "Organisation Rollout",
        description:
          "Defined a structured rollout model to scale adoption across teams, transitioning from centralised execution to distributed capability.",
      },
    ],
    solution:
      "Designed and implemented a three-phase AI adoption model that transforms design operations from manual workflows into scalable systems. The approach focused on embedding AI directly into day-to-day work rather than introducing it as a separate toolset. Phase 1 established a personal system proving AI can manage complex design operations. Phase 2 introduced team workflows enabling designers to produce consistent, production-ready outputs. Phase 3 defined organisation-wide rollout to establish self-service and reduce dependency on central teams. This model shifts design systems from resource-constrained teams to scalable operational infrastructure.",
    learnings: [
      "AI adoption must start with real operational problems, not tooling experiments",
      "Repeatable workflows outperform isolated prompts every time",
      "The value of AI is eliminating work, not just accelerating it",
      "Adoption scales when each phase proves value before expanding",
    ],
  },
  {
    slug: "atg",
    title: "ATG Tickets",
    subtitle: "Building a multi-brand design system from the ground up - foundations, tokens, governance, and Git workflows to scale ATG's digital estate",
    category: "Design Systems",
    year: "",
    color: "yellow",
    thumbnail: "/images/atg/hero.png",
    hero: "/images/atg/hero.png",
    gallery: [
      "/images/atg/img_1.png",
      "/images/atg/img_2.png",
      "/images/atg/img_3.png",
      "/images/atg/img_4.png",
      "/images/atg/img_5.png",
      "/images/atg/img_6.png",
      "/images/atg/img_7.png",
    ],
    overview: {
      role: "Head of Design / Principal Product Designer",
      timeline: "8 months",
      team: "Stephen Taylor (Product Director), Nathanael Woodbridge (Lead Software Engineer), Carlos Silva (Software Engineer), Odete Fernandes (Senior Digital Designer), Sebastian Swainsbury (Senior Digital Designer)",
      tools: ["Figma", "Token Studio", "Git", "Visual Studio", "Axure", "Miro", "Notion"],
    },
    results: [
      { metric: "Brand theming", value: "Minutes, not days or weeks" },
      { metric: "Token output", value: "Web (SASS), iOS (Swift), Android (XML)" },
      { metric: "Governance", value: "Git workflows, Figma branching, Slack automation" },
    ],
    challenge:
      "ATG Tickets needed a multi-brand design system to grow and scale their digital offering. A full foundation was needed to move the organisation forward and streamline the design team onto a single, unified system. The initial stages involved looking into fundamentals, component review, file structures in Figma, organisation of workflows, governance, and documentation. From there, a full UI library would be built using the latest Figma features to unify the designers' workflow - keeping file sizes small to ensure the system stayed fast and robust.",
    process: [
      {
        title: "Foundations",
        description:
          "Foundations are the building blocks of a design system, so getting this part right and well thought out pays off down the line. A new, clean Figma structure was established with feedback and input from the entire team to align design language and awareness. Files were kept separate from the start, knowing the system would grow at an exponential rate - file size needed to stay as small as possible.",
      },
      {
        title: "New UI Library",
        description:
          "Following on from the foundations, we set up a new component library following atomic design structure. The library was built off the back of MUI design library so we could hit the ground running. At this stage we introduced design tokens into the library, connecting visual decisions to a structured, maintainable system.",
      },
      {
        title: "Design Tokens",
        description:
          "We utilised design tokens early on in the foundations and components - colour, space, and typography. The implementation of dark mode and the ability to theme from a base template was still to do. Working closely with the team, especially engineering, we streamlined the token set multiple times to get a simple structure while improving the semantics of typography tokens to make design choices clearer and less ambiguous. I managed the tokens through Git, Figma, and Token Studio - giving us a great GUI that was much easier than Visual Studio alone and allowed designers with no code experience to engage with the system.",
      },
      {
        title: "Process & Governance",
        description:
          "Process is a huge part of a design system - being able to track and maintain standards while keeping things consistent. Simple handover documents were established and reviewed every sprint to keep the evolution moving. On the design side, the Token Studio plugin allowed us to push changes to Git branches so the team could work on multiple Jira issues at once and track each journey through the sprint. Working closely with engineering, we established patterns of best practice for handover between design and finished components, with key touchpoints and automation built into the process. This communication trail was achieved using Slack workflows, Figma branching, and Git branching - allowing for accountability and tracking to monitor the system's progression.",
      },
    ],
    solution:
      "Delivered a multi-brand design system that allows simple theming by a sole designer across multiple modes, including light and dark mode for AA compliance. Building a new brand from the white-label base theme now takes minutes rather than days or weeks - an incredible time saving. One central repository for components gives ATG the stability, simplicity, and ability to maintain a large digital estate with less effort. The tokens are scalable across web (SASS), iOS (Swift), and Android (XML) through Style Dictionary transforms. The documentation and governance layers ensure the system maintains its standards as it grows, and the mentoring programme means knowledge is cross-pollinated across the team - once more people are on board, real speed, agility, and the ability to move at pace becomes very apparent.",
    learnings: [
      "Getting foundations right early pays compound interest - every shortcut in the base layer creates exponential debt in the component layer",
      "Token Studio with Git gives designers a code-adjacent workflow without requiring code experience - this is the bridge between design and engineering",
      "A design system's governance and process are as important as its components - without them, consistency erodes as the team scales",
      "Mentoring and cross-pollinating knowledge across the team is what turns a design system from one person's project into the organisation's shared infrastructure",
    ],
  },
  {
    slug: "hargreaves-lansdown",
    title: "Hargreaves Lansdown",
    subtitle: "Migrating a major financial platform to AEM while establishing a design system that brought consistency, confidence, and reduced call centre volumes",
    category: "Design Systems / Product Design",
    year: "",
    color: "blue",
    thumbnail: "/images/hl/hero.png",
    hero: "/images/hl/hero.png",
    gallery: [
      "/images/hl/img_1.jpg",
      "/images/hl/img_2.jpg",
      "/images/hl/img_3.jpg",
      "/images/hl/img_5.jpg",
      "/images/hl/img_6.jpg",
      "/images/hl/img_4.jpg",
      "/images/hl/img_7.jpg",
      "/images/hl/img_9.jpg",
      "/images/hl/img_10.jpg",
      "/images/hl/img_11.jpg",
      "/images/hl/img_12.jpg",
    ],
    overview: {
      role: "Lead UX / UI Designer",
      timeline: "12 months",
      team: "Oli Ray (Design Director), Joe Marriott (Lead Researcher), Craig Hodge (Digital Designer), Dan Grose (Content Designer)",
      tools: ["Sketch", "Figma", "Invision", "DSM", "UXPin", "Miro", "Optimal Sort"],
    },
    results: [
      { metric: "Call centre volume", value: "Reduced across the board" },
      { metric: "Design system", value: "New foundations for all products" },
      { metric: "Research", value: "6 data sources, end-to-end" },
    ],
    challenge:
      "The primary objective was to move the existing Hargreaves Lansdown website over to AEM (Adobe Experience Manager) and improve the customer experience where possible. A substantial research piece was carried out gathering data from call centre agents, call centre transcripts, emails, web analytics, product owners, and end user interviews. The initial stages focused on the help section - migrating components, templates, and patterns over to the new framework. The new UI library formed off the back of this would then feed into a new design system. The key KPI was to reduce call centre volumes caused by the pandemic and allow users to self-serve rather than call.",
    process: [
      {
        title: "Foundations",
        description:
          "At the granular level of the design system, we established a set of building blocks and rules that would give us the consistency and flexibility to build out any scenario HL wanted to design across all of their digital products.",
      },
      {
        title: "Grid & Template",
        description:
          "The existing 12-column grid had no rules on baseline or vertical rhythm, causing layouts to feel random - visual hierarchy got lost across different sections. Through user testing we found this was unsettling, especially when dealing with large sums of money. We moved to a 16-column grid (16, 8, 4, 2, 1 column layouts), golden ratio for typography and spacing, and a 4px baseline - giving us the bed we needed.",
      },
      {
        title: "User Testing",
        description:
          "Before testing, we held ideation sessions to filter designs we had confidence in, refining them for end users. Sketching was my preferred method - quick and effective at getting concepts across before building high-fidelity versions. I transferred pages into UXPin for testing with Joe. Test scripts were written to whittle down the most efficient designs and patterns. Sessions were fully remote, and we invited wider team members so they could see the value of these interviews first-hand.",
      },
      {
        title: "Component Library & Documentation",
        description:
          "We built the initial design files in Sketch, but migrated to Figma mid-project. The new UI library could be consumed by all UX, UI, and wider creative teams - proving a huge success in streamlining the time designers spent remaking buttons, form fields, and other elements. This freed them to focus on the experience and the small touches that bring the brand to life.",
      },
    ],
    solution:
      "Delivered a comprehensive design system and component library that underpins the AEM migration, bringing consistency across all of Hargreaves Lansdown's digital products. The 16-column grid with golden ratio typography and 4px baseline gave every layout a structured, trustworthy feel - critical when users are managing significant financial decisions. The shared UI library eliminated duplicated effort across the design team and became the foundation for all future product work. Most importantly, the redesigned help section achieved its primary KPI: enabling users to self-serve instead of calling, directly reducing pandemic-driven call centre volumes.",
    learnings: [
      "In financial services, visual rhythm and grid discipline aren't aesthetic choices - they directly affect user trust and confidence",
      "Migrating mid-project from Sketch to Figma is disruptive but worthwhile when the team benefits from a shared, living component library",
      "Inviting the wider team into user testing sessions builds advocacy for design decisions far more effectively than presenting findings after the fact",
      "A design system born from a migration project has stronger adoption than one built in isolation - teams already need it",
    ],
  },
];

export const siteConfig = {
  name: "James O'Dwyer",
  title: "Digital Designer",
  subtitle: "& Design Technologist",
  email: "hello@jamesodwyer.com",
  location: "London, UK",
  bio: "I design and build digital products that balance form and function. With a background in both design and engineering, I bridge the gap between vision and implementation.",
  social: {
    linkedin: "https://linkedin.com/in/jamesodwyer",
    github: "https://github.com/jamesodwyer",
    twitter: "https://twitter.com/jamesodwyer",
  },
};
