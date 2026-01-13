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
    slug: "nordic-banking-platform",
    title: "Nordic Banking Platform",
    subtitle: "Reimagining digital banking for 2 million users",
    category: "Product Design",
    year: "2024",
    color: "blue",
    thumbnail: "/images/case-1-thumb.jpg",
    hero: "/images/case-1-hero.jpg",
    overview: {
      role: "Lead Product Designer",
      timeline: "8 months",
      team: "3 designers, 8 engineers, 2 PMs",
      tools: ["Figma", "Protopie", "Maze", "Amplitude"],
    },
    results: [
      { metric: "Task completion rate", value: "+34%" },
      { metric: "Customer satisfaction", value: "+28%" },
      { metric: "Support tickets", value: "-52%" },
    ],
    challenge:
      "Nordic Bank's legacy mobile application suffered from poor information architecture and inconsistent patterns, resulting in a 23% abandonment rate during common tasks like transfers and bill payments. Users consistently reported frustration with finding features and completing multi-step processes.",
    process: [
      {
        title: "Research & Discovery",
        description:
          "Conducted 24 user interviews, analyzed 6 months of support tickets, and performed competitive analysis of 12 banking applications across Europe. Identified 5 key pain points and 3 opportunity areas.",
      },
      {
        title: "Information Architecture",
        description:
          "Restructured the app navigation using card sorting with 40 participants. Created a new IA that reduced average task depth from 5.2 taps to 2.8 taps.",
      },
      {
        title: "Design System",
        description:
          "Developed a comprehensive design system with 120+ components, ensuring consistency and enabling the engineering team to build 40% faster.",
      },
      {
        title: "Prototyping & Testing",
        description:
          "Created high-fidelity prototypes and conducted 5 rounds of usability testing with 60 participants, iterating based on quantitative and qualitative feedback.",
      },
    ],
    solution:
      "Delivered a completely redesigned mobile banking experience featuring a personalized dashboard, simplified navigation, and smart shortcuts based on user behavior. The new design maintains compliance with banking regulations while feeling modern and intuitive.",
    learnings: [
      "Early stakeholder alignment saves months of revision cycles",
      "Quantitative metrics must be balanced with qualitative insights",
      "Design systems are infrastructure investments, not overhead",
    ],
  },
  {
    slug: "helios-design-system",
    title: "Helios Design System",
    subtitle: "A unified language for 40+ products",
    category: "Design Systems",
    year: "2024",
    color: "red",
    thumbnail: "/images/case-2-thumb.jpg",
    hero: "/images/case-2-hero.jpg",
    overview: {
      role: "Design Systems Lead",
      timeline: "12 months",
      team: "4 designers, 6 engineers",
      tools: ["Figma", "Storybook", "React", "Tokens Studio"],
    },
    results: [
      { metric: "Design-to-dev time", value: "-60%" },
      { metric: "Visual inconsistencies", value: "-89%" },
      { metric: "Component adoption", value: "94%" },
    ],
    challenge:
      "A rapidly growing SaaS company with 40+ products had accumulated significant design debt. Each product team had developed their own patterns, resulting in an inconsistent user experience and duplicated engineering effort. Designers spent 30% of their time recreating existing components.",
    process: [
      {
        title: "Audit & Analysis",
        description:
          "Conducted a comprehensive audit of all 40 products, documenting 847 unique components. Identified patterns and created a consolidation roadmap prioritized by usage frequency and business impact.",
      },
      {
        title: "Foundation",
        description:
          "Established design tokens for color, typography, spacing, and motion. Created a semantic naming system that enabled theming across brands while maintaining consistency.",
      },
      {
        title: "Component Architecture",
        description:
          "Designed and built 86 core components using atomic design principles. Each component was documented with usage guidelines, accessibility requirements, and code examples.",
      },
      {
        title: "Governance & Adoption",
        description:
          "Established contribution guidelines, created a design system council, and ran 12 training sessions. Built metrics dashboards to track adoption and identify friction points.",
      },
    ],
    solution:
      "Launched Helios, a comprehensive design system including Figma libraries, React components, documentation site, and governance processes. The system now serves as the single source of truth for all product development.",
    learnings: [
      "Adoption requires evangelism, not mandates",
      "Documentation is as important as the components themselves",
      "Start with the most painful problems to build momentum",
    ],
  },
  {
    slug: "carbon-footprint-tracker",
    title: "Carbon Footprint Tracker",
    subtitle: "Making sustainability personal and actionable",
    category: "Mobile App",
    year: "2023",
    color: "yellow",
    thumbnail: "/images/case-3-thumb.jpg",
    hero: "/images/case-3-hero.jpg",
    overview: {
      role: "Product Designer",
      timeline: "6 months",
      team: "2 designers, 5 engineers, 1 data scientist",
      tools: ["Figma", "Principle", "Mixpanel", "Python"],
    },
    results: [
      { metric: "Monthly active users", value: "180K" },
      { metric: "Avg. CO2 reduction", value: "12%" },
      { metric: "App Store rating", value: "4.8★" },
    ],
    challenge:
      "Climate change awareness is high, but individuals struggle to understand their personal impact and take meaningful action. Existing carbon calculators were complex, guilt-inducing, and failed to create lasting behavior change.",
    process: [
      {
        title: "Behavioral Research",
        description:
          "Partnered with behavioral scientists to understand what drives sustainable behavior change. Conducted diary studies with 30 participants over 4 weeks to understand daily decision-making.",
      },
      {
        title: "Data Integration",
        description:
          "Worked with data scientists to create accurate carbon estimation models from bank transactions, location data, and manual inputs. Balanced precision with user effort.",
      },
      {
        title: "Gamification Design",
        description:
          "Designed a progression system that rewards consistent small actions over dramatic one-time changes. Created social features that enable friendly competition without shame.",
      },
      {
        title: "Iteration & Launch",
        description:
          "Ran a 3-month beta with 500 users, gathering feedback and iterating weekly. Launched with a PR campaign that reached 2M impressions.",
      },
    ],
    solution:
      "Created an app that automatically tracks carbon footprint from financial transactions, provides personalized recommendations, and gamifies sustainable choices. The app focuses on positive reinforcement and community challenges rather than guilt.",
    learnings: [
      "Behavior change requires reducing friction, not increasing motivation",
      "Privacy concerns must be addressed upfront and transparently",
      "Celebrating small wins creates lasting habits",
    ],
  },
  {
    slug: "architect-portfolio-platform",
    title: "Folio for Architects",
    subtitle: "Where great work speaks for itself",
    category: "Web Platform",
    year: "2023",
    color: "black",
    thumbnail: "/images/case-4-thumb.jpg",
    hero: "/images/case-4-hero.jpg",
    overview: {
      role: "Founder & Designer",
      timeline: "4 months",
      team: "Solo project",
      tools: ["Figma", "Next.js", "Vercel", "Sanity"],
    },
    results: [
      { metric: "Architects onboarded", value: "2,400+" },
      { metric: "Portfolio views", value: "1.2M" },
      { metric: "Avg. session duration", value: "4m 32s" },
    ],
    challenge:
      "Architects spend weeks building portfolio websites that often feel templated and fail to showcase their work effectively. Existing solutions either required coding knowledge or produced generic-looking results that didn't reflect the quality of the architectural work.",
    process: [
      {
        title: "Market Research",
        description:
          "Interviewed 25 architects across different career stages and specializations. Analyzed 100+ existing portfolio sites to identify what made the best ones stand out.",
      },
      {
        title: "Design Philosophy",
        description:
          "Developed design principles inspired by Swiss typography and Bauhaus: let the work be the hero, embrace white space, and remove unnecessary ornamentation.",
      },
      {
        title: "Template System",
        description:
          "Created a flexible template system with 12 layout options that maintain strong typographic hierarchy while allowing customization of colors, fonts, and project presentation.",
      },
      {
        title: "Technical Build",
        description:
          "Built the platform using Next.js for performance, Sanity for content management, and Vercel for hosting. Achieved 95+ Lighthouse scores across all metrics.",
      },
    ],
    solution:
      "Launched a portfolio platform specifically designed for architects that emphasizes visual work, offers sophisticated but accessible customization, and delivers exceptional performance. The platform handles hosting, SSL, and updates automatically.",
    learnings: [
      "Constraints enable creativity—limited options led to better designs",
      "Performance is a feature, not an afterthought",
      "The best tools feel invisible to the user",
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
