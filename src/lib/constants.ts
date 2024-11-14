import { Users, Briefcase, Award } from "lucide-react";

export const navItems = {
  company: [
    {
      title: "About Us",
      href: "/about",
      description: "Learn about our mission, vision, and values",
    },
    {
      title: "Our Team",
      href: "/team",
      description: "Meet our experienced recruitment professionals",
    },
    {
      title: "Careers",
      href: "/careers",
      description: "Join our growing team of recruiters",
    },
  ],
  services: [
    {
      title: "Executive Search",
      href: "/services/executive-search",
      description: "Premium recruitment for senior positions",
    },
    {
      title: "Permanent Staffing",
      href: "/services/permanent-staffing",
      description: "Full-time placement solutions",
    },
    {
      title: "Contract Staffing",
      href: "/services/contract-staffing",
      description: "Flexible workforce solutions",
    },
    {
      title: "RPO Services",
      href: "/services/rpo",
      description: "Recruitment Process Outsourcing",
    },
  ],
  industries: [
    {
      title: "Information Technology",
      href: "/industries/it",
      description: "Software, Hardware, and IT Services",
    },
    {
      title: "Banking & Finance",
      href: "/industries/banking",
      description: "Financial Services and Banking",
    },
    {
      title: "Healthcare",
      href: "/industries/healthcare",
      description: "Medical and Healthcare Professionals",
    },
    {
      title: "Manufacturing",
      href: "/industries/manufacturing",
      description: "Production and Manufacturing",
    },
  ],
};

export const homepage = {
  hero: {
    headline: "Connecting Talent with Opportunity, A to Z",
    para: "At A to Z Recruitment and Staffing, we specialize in bridging the gap between exceptional talent and thriving businesses. Our tailored recruitment solutions ensure that every hire drives growth and success.",
    cta: "Start Your Journey with Us Today",
    // public/homepage/...images.jpg
    links: [
      "consulting",
      "resume",
      "hiring",
      "handshake",
      "outsourcing",
      "forhire",
    ],
  },

  introduction: {
    title: "Your Partner in Shaping Tomorrow's Workforce!",
    desc: [
      "At A to Z Recruitment and Staffing, we don't just fill positions; we shape futures. With a proven track record in providing top-tier recruitment and talent acquisition services, we cater to businesses across industries, ensuring that every hire aligns with your company's vision and goals.",
      "But we don't stop there. Our commitment goes beyond matching skills to job descriptions. We aim to build long-term partnerships, offering strategic guidance and workforce solutions that evolve with the market. Whether enhancing your leadership team or streamlining recruitment, we bring a personalized, innovative approach to help you stay ahead in the talent game.",
    ],
    image: "inter.png",
    alt: "A To Z Recruitment And Staffing Firm",
  },
  whyChooseUs: [
    {
      title: "End-to-End Recruitment",
      description: "From sourcing to onboarding, we handle it all.",
    },
    {
      title: "Industry Expertise",
      description:
        "We specialize in diverse sectors, delivering talent solutions that match your unique requirements.",
    },
    {
      title: "Innovative Approach",
      description:
        "Leveraging the latest technology and industry insights to streamline hiring.",
    },
  ],
  services: {
    title: "From Recruitment to Retention: We've Got You Covered!",
    desc: "Discover a suite of tailored services designed to optimize your workforce and drive business success, from recruitment to payroll management.",
    cards: [
      {
        title: "Recruitment Services",
        image: "recruitment",
        desc: "Comprehensive solutions for sourcing and placing top talent to meet your organizational needs.",
        tags: [
          "Recruitment Process Outsourcing (RPO)",
          "Retained Services",
          "Permanent Placements",
          "Executive Recruitments",
        ],
        href: "/recruitment-services",
      },
      {
        title: "HR Consulting Services",
        image: "hr-consultancy",
        desc: "Expert advice and support for optimizing your human resources processes and strategies.",
        tags: [
          "HR Consulting",
          "HR Documentation",
          "Project-Based Assignments",
          "Performance Management",
        ],
        href: "/hr-consulting-services",
      },
      {
        title: "Outsourcing Services",
        image: "outsourcing",
        desc: "Efficient management of temporary staffing and compliance to meet business objectives.",
        tags: [
          "Temporary Staffing",
          "Statutory Compliance",
          "Manpower Outsourcing",
          "Employee Management",
        ],
        href: "/outsourcing-services",
      },
      {
        title: "Payroll Management",
        image: "payroll",
        desc: "Streamlined payroll solutions ensuring compliance and timely salary disbursements.",
        tags: [
          "Payroll Processing",
          "Tax Compliance",
          "Salary Disbursement",
          "Employee Benefits Administration",
        ],
        href: "/payroll-management",
      },
      {
        title: "Training and Development",
        image: "training",
        desc: "Empower your workforce with tailored training programs and leadership development.",
        tags: [
          "Employee Training",
          "Leadership Development",
          "Skill Enhancement",
          "Onboarding Programs",
        ],
        href: "/training-and-development",
      },
      {
        title: "Talent Acquisition Strategy",
        image: "talent",
        desc: "Data-driven approaches to attract and retain top talent while building a strong employer brand.",
        tags: [
          "Workforce Planning",
          "Employer Branding",
          "Talent Analytics",
          "Diversity Hiring",
        ],
        href: "/talent-acquisition-strategy",
      },
    ],
  },
  faqSection: {
    subtitle: "Our Dream is to",
    title: "Empower Potential",
    default: "bg.jpg",
    path: "/homepage/faq/",
    introParagraph:
      "At A to Z Recruitment and Staffing, our dream goes beyond connecting businesses with top talent. We envision a world where every professional finds purpose, and every organization thrives on the strength of its people. Let's build that future together.",
    faq: [
      {
        question: "What industries do you specialize in?",
        image: "industry.jpg",
        answer:
          "We cater to a wide range of industries, including IT, healthcare, manufacturing, finance, and more. Whatever your sector, we have the expertise to deliver tailored recruitment solutions.",
      },
      {
        question: "How do you ensure quality in your recruitment process?",
        image: "business.jpg",
        answer:
          "Our process combines in-depth market research, advanced screening techniques, and personalized consultations to ensure we match the right talent with the right roles every time.",
      },
      {
        question: "Do you offer services for startups or small businesses?",
        image: "startup.jpg",
        answer:
          "Absolutely! We provide flexible, scalable solutions designed to meet the unique needs of businesses at any stage of growth.",
      },
      {
        question:
          "What makes A to Z Recruitment different from other staffing agencies?",
        image: "staffing.jpg",
        answer:
          "Our commitment to building long-term partnerships and delivering customized, innovative solutions sets us apart. We're not just a service provider; we're your strategic growth partner.",
      },
    ],
  },
  testimonials: [
    {
      client: "John Doe, CEO of XYZ Corp",
      feedback:
        "Working with A to Z has transformed our hiring process. Their expertise and commitment to excellence are unmatched.",
    },
  ],
  closingCTA: {
    message:
      "Whether you're looking to build a strong team or seeking your next career move, A to Z Recruitment and Staffing is your trusted partner.",
    cta: "Let's Get Started Today!",
  },
};

export const achievements = [
  { icon: Users, count: 1200, label: "Successful Placements" },
  { icon: Briefcase, count: 70, label: "Partner Companies" },
  { icon: Award, count: 58, label: "Industry Awards" },
];

export const gridItems = [
  { type: "color", color: "bg-blue-600" },
  {
    type: "image",
    content: "/placeholder.svg?height=200&width=200",
    alt: "Team collaboration",
  },
  { type: "color", color: "bg-yellow-400" },
  { type: "color", color: "bg-cyan-400" },
  {
    type: "image",
    content: "/placeholder.svg?height=200&width=200",
    alt: "Business growth",
  },
  {
    type: "image",
    content: "/placeholder.svg?height=200&width=200",
    alt: "Leadership",
  },
];
