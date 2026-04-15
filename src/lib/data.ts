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
    subtitle: "Redesigning Ticketmaster's entire token architecture to unlock multi-brand theming, Sports onboarding, and GDS v2",
    category: "Design Systems / Architecture",
    year: "",
    color: "yellow",
    thumbnail: "/images/token-migration/thumb.svg",
    hero: "/images/token-migration/hero.png",
    overview: {
      role: "Associate Director, Product Design",
      timeline: "3 months",
      team: "4 designers, Sports engineering, GDS core team",
      tools: ["Token Studio", "Figma", "Jira", "Claude Code"],
    },
    results: [
      { metric: "Products unblocked", value: "All 8, simultaneously" },
      { metric: "White-label reach", value: "300+ potential club clients" },
      { metric: "Debt resolved", value: "33+ token misuses mapped and fixed" },
    ],
    challenge:
      "Ticketmaster's design tokens had grown organically: 33+ border tokens misused as backgrounds, 10+ hardcoded colours scattered across products, and no standardised naming convention. This wasn't cosmetic debt - it was blocking everything. EDP couldn't finalise components without confirmed naming. Sports couldn't onboard without a white-label theming system. Tournaments needed custom branding for 300+ potential club clients but had no token infrastructure to support it. Every product team was waiting on the same thing: a token architecture that actually scales.",
    process: [
      {
        title: "Audit & Architecture",
        description:
          "Mapped every token misuse across the system - 33+ border tokens functioning as backgrounds, hardcoded values, broken connections from previous work. Designed a three-layer architecture: Foundation (core colours, typography, spacing), Semantic (component-specific tokens for product libraries), and Brand (client-specific theming above the core system). This single structure serves corporate Ticketmaster, Sports variants, and white-label tournament clients.",
      },
      {
        title: "Token Studio as Source of Truth",
        description:
          "Made the architectural decision to use Token Studio over Figma variables as the single source of truth. This gave us version control, multi-theme support, and the ability to generate tokens for both design and engineering from one place. Established a naming convention - [tier].[category].[variant].[state] - that every team could adopt without ambiguity.",
      },
      {
        title: "Designer Sprint",
        description:
          "Assembled a dedicated team of 4 designers for a focused two-week sprint to execute the migration. Rather than a slow, rolling changeover, we concentrated effort: mapping the architecture, migrating values, reconnecting broken token references, and validating across all product libraries simultaneously.",
      },
      {
        title: "Sports & White-Label Extension",
        description:
          "Extended the architecture to create a vanilla white-label foundation - the GDS stripped of Ticketmaster branding, with a clean Brand layer that any Sports product (or tournament client) can retheme in minutes. Three fonts, multiple colour palettes, all flowing from the same token structure. One system serving both Marketplace and Sports without duplication.",
      },
    ],
    solution:
      "Delivered a multi-layer token architecture that unblocks all 8 products simultaneously. Foundation tokens give every team a consistent base. Semantic tokens let product teams customise without breaking the system. The Brand layer enables Tournaments to retheme for individual clubs - turning what would have been bespoke design work for 300+ clients into a configuration change. The migration fixes years of accumulated token debt and becomes the foundation for GDS v2. Sports teams are now actively onboarding. EDP has a confirmed naming convention. The token system went from the biggest blocker in the organisation to the biggest enabler.",
    learnings: [
      "Token architecture is product strategy disguised as design infrastructure - get it right and you unblock entire business lines",
      "Concentrated sprints with dedicated people outperform slow migrations every time - two weeks of focus beats three months of part-time effort",
      "Multi-brand token systems need three layers minimum: foundation for consistency, semantic for flexibility, brand for customisation",
      "Fixing 33 misused tokens is less interesting than the architectural decision that prevents the 34th",
    ],
  },
  {
    slug: "ai-design-workflows",
    title: "AI Design Workflows",
    subtitle: "Pioneering AI-assisted design operations at Ticketmaster - from personal productivity system to organisation-wide design automation",
    category: "AI / Design Operations",
    year: "",
    color: "red",
    thumbnail: "/images/ai-design-workflows/thumb.svg",
    hero: "/images/ai-design-workflows/hero.png",
    overview: {
      role: "Associate Director, Product Design",
      timeline: "12-month roadmap",
      team: "GDS core + Discovery pilot group + Encore partnership",
      tools: ["Claude Code", "MCP SDK", "Figma", "GitLab", "Token Studio"],
    },
    results: [
      { metric: "Skills shipped", value: "10 operational workflows live" },
      { metric: "Cycle time", value: "Targeting 22% reduction" },
      { metric: "Adoption", value: "3 teams piloting, org rollout planned" },
    ],
    challenge:
      "I manage a Global Design System serving 8 products with one dedicated designer. The maths is brutal: 18+ concurrent threads, 16 pipeline items, bi-weekly leadership updates, cross-team coordination, and component quality review - all funnelling through one person. Traditional approaches don't scale. I didn't want AI as a novelty; I needed it as operational infrastructure that genuinely multiplies what a small team can deliver. The question wasn't whether to use AI, but how to embed it so deeply into design operations that it becomes invisible - the way electricity powers a building without anyone thinking about the wiring.",
    process: [
      {
        title: "Personal System (Phase 1)",
        description:
          "Built a comprehensive AI-powered second brain: session continuity across conversations, persistent state files that survive context resets, 8 operational skills (morning routine, meeting prep, daily focus, weekly planning, end-of-day reviews, sprint updates). The system tracks 18+ threads across 8 products, logs every decision with reasoning, and never loses context. I used myself as the test case - if AI couldn't transform my own productivity first, it had no business being rolled out to the team.",
      },
      {
        title: "Team Skills (Phase 2)",
        description:
          "Built and published two executable AI skills for designers: a component creation workflow (end-to-end from research to GDS publication) and a token attachment workflow. Tested both with my direct report, who now uses Claude Code daily for GDS work. Piloted a code-ready design workflow with two Discovery designers, proving that designers can work directly in GitLab without an engineering intermediary. Each skill is a packaged, repeatable workflow - not a prompt, but a process.",
      },
      {
        title: "Encore Partnership",
        description:
          "Architected a two-repo integration with Ticketmaster's Encore platform: a general design intelligence repository and an Encore-approved branch for validated skills. Scoped a research agent that takes Figma URLs and competitive sites as input and produces heuristic evaluations and 20,000-word competitor analyses in under two minutes. Built a confidence scoring framework with a colleague to ensure AI research outputs are trustworthy before they influence design decisions.",
      },
      {
        title: "Organisation Rollout (Phase 3)",
        description:
          "Designed a 12-month roadmap from personal adoption to organisation-wide self-service. Phase one: foundation (MCP coverage, first skills, direct report as daily user). Phase two: scale (GDS v2 launch, accuracy checks, documentation automation). Phase three: self-service (product designer rollout, cross-product consistency checks, shared skills repo). Phase four: maturity (full self-service, AI embedded in operations). Measurable targets: pipeline cycle time from 77 to 60 days, same-week documentation updates, self-serve component guidance eliminating support tickets.",
      },
    ],
    solution:
      "Created a three-phase AI adoption model that's already transforming how design operations work at Ticketmaster. Phase 1 proved the concept: my own productivity system manages the complexity of 8 products without dropping threads. Phase 2 is scaling it: designers are independently creating components with AI assistance, and a pilot group is shipping code-ready designs directly. Phase 3 has a clear roadmap to make every designer self-sufficient. The AI strategy isn't a side project - it's been presented to leadership as the mechanism by which one designer and an Associate Director can credibly serve an entire organisation. My manager called me a 'key partner as we transition to AI.' This is what that looks like in practice.",
    learnings: [
      "Start with yourself - if AI can't demonstrably transform your own work, you have no credibility asking a team to adopt it",
      "Skills beat prompts. A packaged, repeatable workflow that anyone can run is worth a hundred clever one-off prompts",
      "The real value of AI in design ops isn't speed - it's eliminating entire categories of work that shouldn't require human attention",
      "Progressive rollout (personal → team → org) builds genuine adoption because each phase has proof from the last",
    ],
  },
  {
    slug: "atg",
    title: "ATG Tickets",
    subtitle: "Building a multi-brand design system from the ground up - foundations, tokens, governance, and Git workflows to scale ATG's digital estate",
    category: "Design Systems",
    year: "",
    color: "yellow",
    thumbnail: "/images/atg/thumb.png",
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
    thumbnail: "/images/hl/thumb.png",
    hero: "/images/hl/hero.jpg",
    gallery: [
      "/images/hl/img_1.jpg",
      "/images/hl/img_2.jpg",
      "/images/hl/img_3.jpg",
      "/images/hl/img_4.jpg",
      "/images/hl/img_5.jpg",
      "/images/hl/img_6.jpg",
      "/images/hl/img_7.jpg",
      "/images/hl/img_8.jpg",
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
  {
    slug: "yell",
    title: "Yell for Business",
    subtitle: "Designing and testing a new feature for Yell's platform - using lean research, systematic UI assets, and a reusable component approach",
    category: "Product Design / Design Systems",
    year: "",
    color: "red",
    thumbnail: "/images/yell/thumb.png",
    hero: "/images/yell/img_3.jpg",
    gallery: [
      "/images/yell/hero.jpg",
      "/images/yell/img_5.jpg",
      "/images/yell/img_6.jpg",
      "/images/yell/img_4.jpg",
      "/images/yell/img_7.jpg",
      "/images/yell/img_8.jpg",
      "/images/yell/img_1.jpg",
      "/images/yell/img_2.jpg",
    ],
    overview: {
      role: "Lead UX / UI Designer",
      timeline: "4 months",
      team: "James Loar (Product Director), Kevin Duncan (Product Owner), Gareth Cooney (Scrum Master), Josh Roberts (Lead iOS Developer), Gavin Haines (Lead Android Developer)",
      tools: ["Figma", "Miro", "Usability Hub", "Optimal Sort"],
    },
    results: [
      { metric: "Platforms", value: "iOS, Android & responsive web" },
      { metric: "Component library", value: "Shared across all 3 platforms" },
      { metric: "Validation", value: "Concept tested in days, not weeks" },
    ],
    challenge:
      "Yell wanted to release a series of new features to enhance their offering and make finding a professional as frictionless as possible. We explored various options for the 'Find a Quote' idea, producing a prototype to gauge where users were at and how we could serve this business need. The work needed to be delivered consistently across iOS, Android, and responsive web - making a systematic, reusable approach to UI assets essential from the start.",
    process: [
      {
        title: "Mock Up Ideas & Test",
        description:
          "Simple, lean user testing with first-click testing in Usability Hub. This enabled us to ascertain the correct place to inject the latest feature into the user journey - validating placement before committing to full design and build.",
      },
      {
        title: "Produce New UI Assets",
        description:
          "With the user journey validated, we produced a systematic set of UI assets in Figma - designed to be reusable across iOS, Android, and web. Components were built with consistency in mind, ensuring the same design language translated cleanly across all three platforms.",
      },
      {
        title: "Final Page Designs",
        description:
          "Brought everything together into polished, high-fidelity page designs for each platform. The component-based approach meant final designs were assembled quickly from the asset library, with platform-specific adjustments handled through variants rather than one-off designs.",
      },
      {
        title: "Cross-Platform Handoff",
        description:
          "Worked closely with the iOS and Android leads to ensure the designs translated faithfully into native implementations. The structured Figma library and consistent naming conventions made handoff straightforward and reduced back-and-forth during development.",
      },
    ],
    solution:
      "Delivered a fully tested, cross-platform feature across iOS, Android, and responsive web - all built from a shared set of UI assets and components. The lean testing approach validated the 'Find a Quote' concept early, avoiding wasted effort on untested ideas. The systematic component library created during this project laid groundwork for Yell's broader design consistency, giving the team reusable assets that extended well beyond this single feature.",
    learnings: [
      "Lean testing with tools like Usability Hub can validate feature placement in days, not weeks - test the journey before designing the screens",
      "Building UI assets as a reusable system from day one pays off immediately when delivering across three platforms simultaneously",
      "Cross-platform consistency comes from shared design language and naming conventions, not from pixel-matching each platform",
      "Working embedded with iOS and Android leads from the start eliminates the handoff gap that typically causes platform drift",
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
