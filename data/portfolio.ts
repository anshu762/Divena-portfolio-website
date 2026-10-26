export interface Project {
  id: string;
  title: string;
  role: string;
  category: "Venture" | "Research" | "Essay" | "Business Plan" | "Social Impact" | "Business Model";
  tagline: string;
  description: string;
  extendedDescription: string;
  impactMetrics?: string[];
  tags: string[];
  liveUrl?: string;
  featured?: boolean;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  program: string;
  date: string;
  scoreOrAward?: string;
  image: string;
  summary: string;
  verificationNote?: string;
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  year: string;
  metric?: string;
  description: string;
  category: "Academics" | "Athletics" | "Entrepreneurship" | "Philanthropy" | "Marketing";
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  industry: string;
  period: string;
  description: string;
  takeaways: string[];
}

export interface LeadershipItem {
  id: string;
  title: string;
  organization: string;
  badge?: string;
  description: string;
  iconName: string;
  highlights?: string[];
}

export interface PortfolioData {
  name: string;
  tagline: string;
  role: string;
  school: string;
  education: string;
  bio: string;
  extendedBio: string;
  profileImage: string; // Empty string triggers luxury SVG monogram. Drop 'profile.jpg' into public/images/ and set to '/images/profile.jpg' anytime.
  contact: {
    email: string;
    phone: string;
    phoneFormatted: string;
    instagram: string;
    instagramHandle: string;
    linkedin: string; // Left empty as not provided, cleanly auto-hidden
  };
  keyStats: {
    value: number;
    prefix?: string;
    suffix?: string;
    label: string;
    context: string;
  }[];
  skills: {
    hard: { name: string; focus: string }[];
    soft: { name: string; focus: string }[];
  };
  currentlyExploring: string[];
  volleyballSpotlight: {
    title: string;
    role: string;
    tenure: string;
    accolades: { event: string; rank: string; year: string }[];
    narrative: string;
  };
  projects: Project[];
  certificates: Certificate[];
  achievements: Achievement[];
  experience: ExperienceItem[];
  leadership: LeadershipItem[];
  marqueeKeywords: string[];
}

export const portfolio: PortfolioData = {
  name: "Divena Rajesh Chugani",
  tagline: "Business mind. Behavioural lens. Built to launch.",
  role: "Aspiring Entrepreneur & Business Economics Scholar",
  school: "Chirec International School, Hyderabad",
  education: "12th Grade · Business Management & Economics",
  profileImage: "", // Replace with "/images/profile.jpg" when photo is uploaded
  bio: "I'm a Business Management and Economics student with a strong interest in behavioural economics and how people actually make decisions. I enjoy connecting theory to real-world business problems. My goal is to build and run my own business.",
  extendedBio: "Rooted in empirical economics and driven by entrepreneurial curiosity, I examine consumer friction, incentive structures, and behavioral nudges. Whether leading athletic squads as volleyball captain, launching initiatives for grassroots artisans, or analyzing venture capital theses, my approach combines analytical rigor with empathy-driven strategy.",
  contact: {
    email: "divenachugani@gmail.com",
    phone: "9154126880",
    phoneFormatted: "+91 91541 26880",
    instagram: "https://instagram.com/divenachugani",
    instagramHandle: "divenachugani",
    linkedin: "", // Optional, auto-hidden when empty
  },
  keyStats: [
    {
      value: 8,
      prefix: "",
      suffix: "",
      label: "Ventures & Research Papers",
      context: "From rural e-commerce to published economic theses",
    },
    {
      value: 70,
      prefix: "",
      suffix: "+",
      label: "Athletes Mobilized",
      context: "Organized competitive charity volleyball tournament",
    },
    {
      value: 20000,
      prefix: "₹",
      suffix: "+",
      label: "Philanthropic Capital Raised",
      context: "Directly funded Diwali celebration for 70 children at Thara Homes",
    },
    {
      value: 500,
      prefix: "",
      suffix: "+",
      label: "Social Readership Growth",
      context: "Scaled engagement for Erudite Newspaper as Head of Marketing",
    },
    {
      value: 17.5,
      prefix: "Top ",
      suffix: "%",
      label: "John Locke Global Honors",
      context: "Commended essayist among 100,227 entrants across 183 countries",
    },
  ],
  currentlyExploring: [
    "Behavioral Economics & Choice Architecture",
    "Grassroots Micro-Entrepreneurship",
    "Venture Capital & Unit Economics",
    "Digital Payment Penetration in Emerging Markets",
    "Incentive Design & Algorithmic Trust",
  ],
  skills: {
    hard: [
      { name: "Market Analysis", focus: "TAM/SAM estimation, competitive landscape mapping" },
      { name: "Business Strategy", focus: "Value proposition design & unit economics" },
      { name: "Accounting", focus: "Balance sheets, cash flow modeling & financial health" },
      { name: "Statistics", focus: "Empirical data interpretation & hypothesis testing" },
    ],
    soft: [
      { name: "Communication", focus: "High-stakes pitching, executive discourse, storytelling" },
      { name: "Leadership", focus: "Team captaincy, cross-functional student body alignment" },
      { name: "Problem-Solving", focus: "Root-cause diagnostics under uncertain conditions" },
      { name: "Critical Thinking", focus: "Challenging orthodoxies via behavioural frameworks" },
      { name: "Teamwork", focus: "Decisive athletic coordination & collaborative consensus" },
    ],
  },
  volleyballSpotlight: {
    title: "Varsity Volleyball Leadership",
    role: "Team Captain (Consecutively since Grade 8)",
    tenure: "5+ Years of Competitive Athletic Stewardship",
    narrative:
      "Competitive athletics is the highest-fidelity incubator for executive discipline. As captain, I guide on-court tactical adjustments, manage team morale during high-pressure tie-breaks, and foster a culture of resilient accountability that translates directly to boardroom leadership.",
    accolades: [
      { event: "ISSO U-19 Championship", rank: "1st Place · Champions", year: "2026" },
      { event: "ISSO National Games U-19", rank: "2nd Place · Silver Medalist", year: "2025" },
      { event: "Don Bosco Inter-School U-14 Tournament", rank: "1st Place · Gold Medalist", year: "Foundational" },
    ],
  },
  projects: [
    {
      id: "rural-bazaar",
      title: "Rural Bazaar",
      role: "Founder & Product Lead",
      category: "Venture",
      tagline: "E-commerce bridge empowering rural craftswomen to access urban markets.",
      description:
        "A live digital marketplace created to dismantle distribution bottlenecks for rural women artisans, enabling direct-to-consumer sales and economic self-determination.",
      extendedDescription:
        "Rural Bazaar addresses the fundamental market access asymmetry faced by female micro-entrepreneurs in peri-urban and rural clusters. Traditional middlemen capture upwards of 70% of artisan value; Rural Bazaar establishes a simplified e-commerce bridge with zero-friction onboarding, visual product displays, and transparent direct pricing. Built with sustainable social enterprise principles.",
      impactMetrics: [
        "Live functional web platform deployed at scale",
        "Direct-to-artisan revenue model eliminating intermediary capture",
        "Curated catalog of authentic handcrafted regional inventory",
      ],
      tags: ["Social Enterprise", "Next.js / Netlify", "E-Commerce", "Women In Business"],
      liveUrl: "https://ruralbazaar.netlify.app/",
      featured: true,
    },
    {
      id: "gramin-growth-lab",
      title: "The Gramin Growth Lab",
      role: "Founder & Lead Educator",
      category: "Social Impact",
      tagline: "Micro-learning video curriculum delivering digital commerce skills over WhatsApp.",
      description:
        "Vernacular mobile educational infrastructure training rural female entrepreneurs in UPI transactions, digital product showcase, and bookkeeping.",
      extendedDescription:
        "Recognizing that high-barrier LMS software fails in low-bandwidth rural contexts, The Gramin Growth Lab meets entrepreneurs where they already communicate: WhatsApp. We script, record, and distribute 3-minute bite-sized video lessons covering digital inventory tracking, UPI fraud awareness, and basic social media marketing in regional dialects.",
      impactMetrics: [
        "100% mobile-first asynchronous delivery model",
        "Empowers women with independent financial tools",
        "Practical exercises tested with local merchant groups",
      ],
      tags: ["Digital Literacy", "Mobile Pedagogy", "Financial Inclusion", "Grassroots"],
      featured: true,
    },
    {
      id: "theoria-research",
      title: "Research Paper: Theoria",
      role: "Independent Student Researcher",
      category: "Research",
      tagline: "An empirical socio-economic study on female entrepreneurship dynamics.",
      description:
        "Rigorous academic research analyzing behavioral friction, collateral asymmetry, and informal credit networks that shape women-led ventures.",
      extendedDescription:
        "This research explores how socio-cultural conditioning and systemic capital allocation barriers dictate female enterprise longevity. Synthesizing primary surveys with macro-economic data, the paper evaluates how micro-credit programs can be optimized through behavioral nudges and community accountability structures rather than predatory collateral demands.",
      impactMetrics: [
        "Structured empirical methodology combining qualitative & quantitative data",
        "Published insights on behavioural finance applied to emerging economies",
      ],
      tags: ["Behavioral Economics", "Academic Thesis", "Microfinance", "Data Analysis"],
      featured: false,
    },
    {
      id: "skillkeep",
      title: "SkillKeep",
      role: "Concept Lead & Pitcher",
      category: "Business Model",
      tagline: "Enterprise skill-decay tracking platform pitched at the Blue Ocean Competition.",
      description:
        "A SaaS concept designed to quantify knowledge depreciation in rapid technological cycles and administer personalized cognitive micro-refreshers.",
      extendedDescription:
        "Pitched at the globally recognized Blue Ocean High School Entrepreneurship Competition, SkillKeep addresses the hidden corporate cost of skill half-life decay. By mapping continuous learning curves against workplace demands, the platform gamifies knowledge retention through spaced repetition algorithms.",
      impactMetrics: [
        "Pitched to international venture judges at Blue Ocean Competition",
        "Developed comprehensive Blue Ocean Strategy Canvas and ERRC grid",
      ],
      tags: ["SaaS Concept", "Blue Ocean Strategy", "Corporate EdTech", "HR Tech"],
      featured: false,
    },
    {
      id: "reacycle",
      title: "Reacycle",
      role: "Finalist & Web / Financial Architect",
      category: "Venture",
      tagline: "Young Entrepreneur Challenge Finalist (Top 6 of 20 teams) circular venture.",
      description:
        "A circular economy venture transforming municipal recyclables into commercial utility goods, backed by full unit-economics modeling and interactive portal.",
      extendedDescription:
        "Competed against 20 top youth enterprises to reach the final 6. Led the financial planning, developing projected balance sheets, cost of goods sold (COGS) breakdowns, and capital expenditure timelines, alongside building the responsive web interface for customer scheduling.",
      impactMetrics: [
        "Top 6 Finalist ranking out of 20 competitive venture pitches",
        "Built end-to-end financial viability model and web platform",
      ],
      tags: ["Circular Economy", "Financial Modeling", "Competition Finalist", "Sustainability"],
      featured: true,
    },
    {
      id: "wealth-management-plan",
      title: "Wealth Management Platform",
      role: "Financial Strategy Intern",
      category: "Business Plan",
      tagline: "Next-generation student financial literacy and micro-investing model.",
      description:
        "Developed during engagement with AND Business Consulting to introduce adolescent demographics to equity compounding and risk budgeting.",
      extendedDescription:
        "Engineered a strategic business case outlining customer acquisition channels, gamified UX flowcharts, and regulatory compliance considerations for an adolescent wealth management vehicle. Focused heavily on behavioral defaults and habit formation.",
      impactMetrics: [
        "Detailed financial projections and TAM validation",
        "Designed behavioral incentives to curb impulsive teen spending",
      ],
      tags: ["FinTech Strategy", "AND Consulting", "Financial Literacy", "Behavioral Design"],
      featured: false,
    },
    {
      id: "cashless-society-essay",
      title: "Should We Fear a Cashless Society?",
      role: "Author",
      category: "Essay",
      tagline: "Commended by the John Locke Institute Global Essay Prize in Economics.",
      description:
        "A critical macroeconomic thesis dissecting civil liberty, state monetary monopoly, and unbanked vulnerability in fully digitized economies.",
      extendedDescription:
        "Shortlisted and Commended in the top 17.5% of 100,227 candidates worldwide. The essay rigorously critiques the uncritical adoption of digital-only payment networks, balancing transactions-cost efficiency against surveillance vulnerability and structural marginalization of informal laborers.",
      impactMetrics: [
        "Commendation certificate awarded by John Locke Institute",
        "Top 17.5% ranking among 100,227 global participants",
      ],
      tags: ["Macroeconomics", "John Locke Prize", "Monetary Policy", "Philosophy"],
      featured: false,
    },
    {
      id: "crimson-narrative-essay",
      title: "Creative Narrative Essay",
      role: "Author",
      category: "Essay",
      tagline: "Harvard Crimson Global Essay Competition Entry.",
      description:
        "An introspective literary essay interrogating cross-cultural identity, psychological resilience, and ambition in youth.",
      extendedDescription:
        "Selected as a formal submission for the Harvard Crimson Global Essay Competition. The piece examines personal inflection points, articulating how vulnerability and athletic discipline intersect to form an enduring entrepreneurial ethos.",
      impactMetrics: [
        "Recognized by prestigious Harvard Crimson student-led international jury",
        "Mastery of narrative rhythm, rhetoric, and human-centric reflection",
      ],
      tags: ["Creative Non-Fiction", "Harvard Crimson", "Narrative Prose", "Ethics"],
      featured: false,
    },
  ],
  certificates: [
    {
      id: "cert-northwestern",
      title: "High Performance Collaboration: Leadership, Teamwork & Negotiation",
      issuer: "Northwestern University (via Coursera)",
      program: "Executive Leadership & Negotiation Specialization",
      date: "March 2025",
      scoreOrAward: "Scored 93% · Verified Honor Distinction",
      image: "/images/img1.png",
      summary:
        "Advanced course covering interest-based conflict resolution, integrative bargaining frameworks, and cross-cultural team management under Northwestern's Kellogg School of Management curriculum.",
      verificationNote: "Official Certificate ID: Northwestern University Coursera Partnered",
    },
    {
      id: "cert-kelley",
      title: "Kelley Women's Leadership Institute",
      issuer: "Kelley School of Business, Indiana University",
      program: "Selective Summer Leadership Intensive",
      date: "April 2025",
      scoreOrAward: "Competitive Acceptance · Class of 2025",
      image: "/images/img2.png",
      summary:
        "Highly selective program focused on developing women business leaders in global finance, corporate entrepreneurship, and organizational leadership.",
      verificationNote: "Official Acceptance Document from Kelley School of Business Admissions",
    },
    {
      id: "cert-ashoka",
      title: "Young Scholars Programme (YSP)",
      issuer: "Ashoka University",
      program: "Entrepreneurship, Leadership & Impact Track",
      date: "May 2024",
      scoreOrAward: "Certificate of Completion · Distinction",
      image: "/images/img3.png",
      summary:
        "Intensive residential academic program exploring multidisciplinary venture creation, social enterprise frameworks, design thinking, and ethical governance.",
      verificationNote: "Official Certificate awarded by Ashoka University Center for Social Impact",
    },
    {
      id: "cert-john-locke",
      title: "John Locke Global Essay Prize in Economics",
      issuer: "John Locke Institute, Oxford & Princeton",
      program: "Global Economics Essay Competition",
      date: "Commended Awardee",
      scoreOrAward: "Shortlisted & Commended · Top 17.5% Globally",
      image: "/images/img4.png",
      summary:
        "Recognized for outstanding clarity of argument, historical reasoning, and economic depth among 100,227 entrants from 183 countries evaluated by Oxford University scholars.",
      verificationNote: "Commendation Award Certificate signed by Institute Faculty",
    },
  ],
  achievements: [
    {
      id: "ach-john-locke",
      title: "John Locke Global Essay Commendation",
      organization: "John Locke Institute (Oxford & Princeton)",
      year: "2024",
      metric: "Top 17.5%",
      description:
        "Shortlisted and Commended out of 100,227 submissions spanning 183 countries for original macroeconomic analysis in 'Should We Fear a Cashless Society?'.",
      category: "Academics",
    },
    {
      id: "ach-volleyball-1",
      title: "1st Place Champions · ISSO U-19 Championship",
      organization: "International Schools Sports Organization",
      year: "2026",
      metric: "Gold Medal",
      description:
        "Captained the varsity squad to first-place triumph against premier international high school teams across the country.",
      category: "Athletics",
    },
    {
      id: "ach-volleyball-2",
      title: "2nd Place Silver · ISSO National Games U-19",
      organization: "ISSO National Board",
      year: "2025",
      metric: "National Silver",
      description:
        "Led team through grueling multi-day national tournament brackets, orchestrating tactical rotations and high-intensity defense.",
      category: "Athletics",
    },
    {
      id: "ach-charity-fundraiser",
      title: "₹20,000+ Charity Tournament Fundraiser",
      organization: "Independent Social Initiative for Thara Homes",
      year: "2024",
      metric: "₹20,000+ Raised",
      description:
        "Conceived, branded, and executed a 70+ player volleyball tournament. All ticket proceeds funded an unforgettable festive Diwali celebration and essential hampers for 70 children at Thara Homes orphanage.",
      category: "Philanthropy",
    },
    {
      id: "ach-erudite-marketing",
      title: "500+ Organic Followers Scaled as Head of Marketing",
      organization: "The Erudite Newspaper (Chirec International)",
      year: "2024",
      metric: "500+ Growth",
      description:
        "Revamped editorial social identity, introduced high-retention reel formats, and spearheaded student engagement campaigns on Instagram (@theeruditenewspaper).",
      category: "Marketing",
    },
    {
      id: "ach-reacycle-finalist",
      title: "Finalist (Top 6 of 20 Teams) · Young Entrepreneur Challenge",
      organization: "Young Entrepreneur Challenge",
      year: "2024",
      metric: "Top 6 Finish",
      description:
        "Pitched sustainable venture 'Reacycle' before prominent regional founders, delivering both technical web architecture and verified financial forecasts.",
      category: "Entrepreneurship",
    },
  ],
  experience: [
    {
      id: "exp-sathguru",
      role: "Venture Capital & Advisory Intern",
      organization: "Sathguru Management Consultants",
      industry: "Venture Capital / Strategic Advisory",
      period: "Internship",
      description:
        "Immersed in early-stage investment assessment, synthesizing market landscapes and competitive moats for high-growth agri-tech and life-sciences startups.",
      takeaways: [
        "Conducted thorough secondary research for investment memos",
        "Evaluated unit economics and venture viability indices",
        "Shadowed partner consultations on cross-border business structuring",
      ],
    },
    {
      id: "exp-and-consulting",
      role: "Business Consulting Intern",
      organization: "AND Business Consulting",
      industry: "Management Consulting",
      period: "Internship",
      description:
        "Collaborated on strategic client case studies, operational re-engineering plans, and co-developed the foundational business model for a youth wealth management initiative.",
      takeaways: [
        "Built financial sensitivity models for client pitch presentations",
        "Formulated go-to-market strategies for emerging consumer products",
        "Refined qualitative interview synthesis into executive slides",
      ],
    },
    {
      id: "exp-cache",
      role: "Operations & Supply Chain Intern",
      organization: "Cache Peripherals",
      industry: "Technology & Hardware Supply Chain",
      period: "Internship",
      description:
        "Analyzed supply chain telemetry, distributor relationships, and hardware deployment workflows across enterprise IT client pipelines.",
      takeaways: [
        "Mapped supplier fulfillment lifecycles and inventory buffers",
        "Audited B2B client satisfaction metrics and order fulfillment lag",
      ],
    },
    {
      id: "exp-one-wedding",
      role: "Luxury Event Management Associate",
      organization: "One Wedding",
      industry: "High-End Event Management",
      period: "Internship",
      description:
        "Assisted in end-to-end luxury wedding orchestration, managing time-critical logistics, VIP stakeholder relations, and multi-vendor coordination.",
      takeaways: [
        "Managed on-site emergency contingencies with composed calm",
        "Handled luxury vendor negotiations and precision staging schedules",
      ],
    },
  ],
  leadership: [
    {
      id: "lead-nilgiri",
      title: "Nilgiri House Captain",
      organization: "Chirec International School",
      badge: "Student Government",
      description:
        "Elected to steer Nilgiri House representing hundreds of students across inter-house sporting tournaments, academic derbies, and cultural showcases.",
      iconName: "Compass",
      highlights: [
        "Mentored junior student cohorts in public debate and athletic trials",
        "Orchestrated inter-house athletic strategies leading to podium results",
      ],
    },
    {
      id: "lead-aerio",
      title: "Executive Director",
      organization: "Aerio (Non-Profit Organization)",
      badge: "NGO Executive",
      description:
        "Spearheading non-profit operations, grassroots student awareness initiatives, and collaborative volunteer drives targeting underserved youth.",
      iconName: "HeartHandshake",
      highlights: [
        "Coordinated volunteer mobilization across multiple educational institutions",
        "Structured transparent donor reporting and program milestone trackers",
      ],
    },
    {
      id: "lead-varsity-marketing",
      title: "Head of Marketing",
      organization: "Varsity Sports",
      badge: "Brand Sponsorships",
      description:
        "Directed commercial branding and secured landmark corporate partnership sponsorships with international giants including Prime, Puma, and Decathlon.",
      iconName: "Megaphone",
      highlights: [
        "Negotiated official equipment and apparel deals with Puma and Decathlon",
        "Secured high-visibility event sponsorships with Prime",
      ],
    },
    {
      id: "lead-pawga",
      title: "Event Coordinator",
      organization: "Pawga",
      badge: "Animal Welfare",
      description:
        "Curated and managed monthly adoption drives and therapeutic community pet interactions, hosting 25+ participants every session.",
      iconName: "Sparkles",
      highlights: [
        "Maintained high animal placement safety and screening standards",
        "Cultivated partnerships with regional rescue shelters",
      ],
    },
    {
      id: "lead-interact",
      title: "Active Volunteer & Organizer",
      organization: "Interact Club",
      badge: "Community Outreach",
      description:
        "Dedicated hundreds of hours to humanitarian initiatives: volunteered at an HIV orphanage, planted 70+ saplings, and ran fundraising charity bake sales.",
      iconName: "Trees",
      highlights: [
        "Led environmental greening drive planting 70+ native trees",
        "Mobilized student volunteers for weekly hospice and orphanage visits",
      ],
    },
    {
      id: "lead-band-drummer",
      title: "Drummer in Band 'Eclipse'",
      organization: "Eclipse Band",
      badge: "Creative Arts",
      description:
        "Rhythmic anchor and percussionist for student music group 'Eclipse', performing at inter-school festivals, assemblies, and live showcase nights.",
      iconName: "Music",
      highlights: ["Extensive live stage performances and tempo orchestration"],
    },
    {
      id: "lead-photographer",
      title: "Lead Photographer",
      organization: "Theatre Club & Model United Nations (MUN)",
      badge: "Visual Storytelling",
      description:
        "Official photojournalist and visual documentarian for theatrical productions and high-stakes diplomatic Model United Nations sessions.",
      iconName: "Camera",
      highlights: ["Published photo archives preserving major institutional milestones"],
    },
    {
      id: "lead-kedarkantha",
      title: "High-Altitude Himalayan Trekker",
      organization: "Kedarkantha Expedition (12,500 ft)",
      badge: "Endurance & Grit",
      description:
        "Conquered the snowbound summit of Kedarkantha in the Garhwal Himalayas, navigating sub-zero conditions and arduous vertical ascent.",
      iconName: "Mountain",
      highlights: ["Test of mental fortitude, alpine endurance, and perseverance"],
    },
  ],
  marqueeKeywords: [
    "Entrepreneurship",
    "Behavioural Economics",
    "Choice Architecture",
    "Venture Strategy",
    "Volleyball Captain",
    "John Locke Commended",
    "Social Innovation",
    "Unit Economics",
    "Empirical Research",
    "Team Leadership",
    "Financial Modeling",
  ],
};
