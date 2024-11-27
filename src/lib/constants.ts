import { Users, Briefcase, Award } from "lucide-react";
import { IconType } from "react-icons";
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoInstagram,
} from "react-icons/io5";

export const MetaData = {
  home: {
    page: {
      href: "/",
      title: "AToZ Recruiters LLP",
      description:
        "Your trusted partner in recruitment and talent acquisition, shaping futures and empowering businesses. We don't just fill positions; we shape futures.",
      keywords: [
        "Recruitment",
        "Talent Acquisition",
        "Staffing Solutions",
        "HR Consulting",
      ],
    },
    sitemap: {
      href: "/sitemap.xml",
      title: "Sitemap | AToZ Recruiters LLP",
      description:
        "Your trusted partner in recruitment and talent acquisition, shaping futures and empowering businesses. We don't just fill positions; we shape futures.",
      keywords: [
        "Jobs",
        "Recruitment",
        "Talent Acquisition",
        "Staffing Solutions",
        "HR Consulting",
      ],
    },
  },
  company: {
    about: {
      href: "about",
      title: "About Us | AToZ Recruiters LLP",
      description:
        "Learn about our journey, values, and dedication to connecting talent with opportunity.",
      keywords: ["About A to Z", "Our Story", "HR Solutions"],
    },
    ourteam: {
      href: "team",
      title: "Our Team | AToZ Recruiters LLP",
      description:
        "Meet the minds behind our success, driving innovation in recruitment and staffing.",
      keywords: ["HR Team", "Recruitment Experts", "Staffing Professionals"],
    },
    careers: {
      href: "careers",
      title: "Careers | AToZ Recruiters LLP",
      description:
        "Explore career opportunities with us and grow your professional journey.",
      keywords: ["Careers at A to Z", "Job Opportunities", "Work With Us"],
    },
    contact: {
      href: "contact",
      title: "Contact Us | AToZ Recruiters LLP",
      description:
        "Get in touch with us for personalized HR solutions and expert advice.",
      keywords: ["Contact A to Z", "HR Solutions", "Get in Touch"],
    },
  },
  services: {
    recruitmentServices: {
      href: "recruitment-services",
      title: "Recruitment Services | AToZ Recruiters LLP",
      description:
        "Tailored recruitment services to meet your unique hiring needs.",
      keywords: [
        "Recruitment Services",
        "Permanent Placements",
        "Executive Search",
      ],
    },
    hrConsulting: {
      href: "hr-consulting-services",
      title: "HR Consulting | AToZ Recruiters LLP",
      description:
        "Expert HR consulting to enhance your organization's efficiency.",
      keywords: ["HR Consulting", "Performance Management", "HR Strategy"],
    },
    outsourcing: {
      href: "outsourcing-services",
      title: "Outsourcing Services | AToZ Recruiters LLP",
      description:
        "Seamless outsourcing solutions for all your staffing needs.",
      keywords: ["Staffing Solutions", "Temporary Staffing", "Outsourcing"],
    },
    payrollManagement: {
      href: "payroll-management",
      title: "Payroll Management | AToZ Recruiters LLP",
      description: "Efficient and accurate payroll services for your business.",
      keywords: ["Payroll Services", "Compliance", "Employee Management"],
    },
    trainingDevelopment: {
      href: "training-and-development",
      title: "Training & Development | AToZ Recruiters LLP",
      description:
        "Empowering teams through comprehensive training and development programs.",
      keywords: [
        "Employee Training",
        "Skill Development",
        "Corporate Training",
      ],
    },
    talentAcquisition: {
      href: "talent-acquisition-strategy",
      title: "Talent Acquisition Strategy | AToZ Recruiters LLP",
      description:
        "Strategic solutions for your talent acquisition needs, aligning with your business goals.",
      keywords: [
        "Talent Acquisition",
        "Recruitment Strategy",
        "Workforce Planning",
      ],
    },
    resumeModification: {
      href: "resume-modification-services",
      title: "Resume Modification Services | AToZ Recruiters LLP",
      description:
        "Professional resume services designed to elevate your career prospects.",
      keywords: ["Resume Writing", "Resume Optimization", "Career Growth"],
    },
    interviewTraining: {
      href: "interview-training-services",
      title: "Interview Training | AToZ Recruiters LLP",
      description:
        "Master the art of interviews with expert training and guidance.",
      keywords: ["Interview Skills", "Mock Interviews", "Job Preparation"],
    },
    campusRecruitment: {
      href: "campus-recruitment-services",
      title: "Campus Recruitment Services | AToZ Recruiters LLP",
      description:
        "Connecting top talent with leading organizations through strategic campus recruitment.",
      keywords: ["Campus Drives", "Fresh Talent Hiring", "College Recruitment"],
    },
  },
  industry: {
    fmcg: {
      href: "fmcg",
      title: "FMCG Industry | AToZ Recruiters LLP",
      description:
        "Specialized recruitment services for the FMCG sector, connecting businesses with top-tier talent to drive growth and market leadership.",
      keywords: [
        "FMCG Recruitment",
        "Consumer Goods Talent",
        "FMCG Hiring Solutions",
      ],
    },
    pharmaceuticals: {
      href: "pharmaceuticals",
      title: "Pharmaceuticals Industry | AToZ Recruiters LLP",
      description:
        "Expert HR solutions for the pharmaceutical industry, sourcing exceptional talent to power innovation and compliance.",
      keywords: ["Pharma Recruitment", "R&D Talent", "Pharmaceutical Hiring"],
    },
    oilAndGas: {
      href: "oil-and-gas",
      title: "Oil and Gas Industry | AToZ Recruiters LLP",
      description:
        "Tailored recruitment strategies for the oil and gas sector, meeting the unique demands of a dynamic and technical industry.",
      keywords: [
        "Oil and Gas Staffing",
        "Energy Sector Hiring",
        "Engineering Talent",
      ],
    },
    bfsi: {
      href: "bfsi",
      title: "BFSI Sector | AToZ Recruiters LLP",
      description:
        "Comprehensive hiring solutions for the banking, financial services, and insurance sectors to secure top-performing talent.",
      keywords: [
        "BFSI Recruitment",
        "Finance HR Solutions",
        "Banking Talent Acquisition",
      ],
    },
    salesAndMarketing: {
      href: "sales-and-marketing",
      title: "Sales & Marketing | AToZ Recruiters LLP",
      description:
        "Strategic recruitment services for sales and marketing professionals to drive growth, branding, and customer engagement.",
      keywords: [
        "Sales Recruitment",
        "Marketing Talent",
        "Growth Strategy Hiring",
      ],
    },
    realEstate: {
      href: "real-estate",
      title: "Real Estate Sector | AToZ Recruiters LLP",
      description:
        "Expert staffing solutions for the real estate industry, enabling businesses to build exceptional teams for dynamic projects.",
      keywords: [
        "Real Estate Staffing",
        "Property Sector Hiring",
        "Construction Talent",
      ],
    },
    retail: {
      href: "retail",
      title: "Retail Industry | AToZ Recruiters LLP",
      description:
        "Efficient hiring solutions for the retail sector, connecting businesses with skilled professionals for customer-centric roles.",
      keywords: [
        "Retail Recruitment",
        "Customer Service Talent",
        "Retail HR Solutions",
      ],
    },
    bpoKpo: {
      href: "bpo-kpo",
      title: "BPO & KPO | AToZ Recruiters LLP",
      description:
        "Focused recruitment for the BPO and KPO industries, ensuring high-performing teams for global service excellence.",
      keywords: ["BPO Staffing", "KPO Recruitment", "Call Center Talent"],
    },
    gulfHiring: {
      href: "gulf-hiring",
      title: "Gulf Hiring | AToZ Recruiters LLP",
      description:
        "Specialized recruitment for the Gulf region, connecting employers with skilled professionals for international roles.",
      keywords: [
        "Gulf Recruitment",
        "Middle East Talent",
        "Global Hiring Solutions",
      ],
    },
  },
};
export type MetaDataKey = keyof typeof MetaData;
// export type MetaData = typeof MetaData[keyof typeof MetaData];

export const navItems = {
  // company: [
  //   {
  //     title: "About Us",
  //     href: "/about",
  //     description: "Learn about our mission, vision, and values",
  //     url: "about.jpg", // Example image URL
  //   },
  //   {
  //     title: "Our Team",
  //     href: "/team",
  //     description: "Meet our experienced recruitment professionals",
  //     url: "team.jpg", // Example image URL
  //   },
  //   {
  //     title: "Careers",
  //     href: "/careers",
  //     description: "Join our growing team of recruiters",
  //     url: "career.jpg", // Example image URL
  //   },
  // ],
  services: [
    {
      title: "Recruitment Services",
      href: "/services/recruitment-services",
      description:
        "Expert recruitment solutions for senior and executive positions",
      url: "recruitment.jpg", // Example image URL
    },
    {
      title: "HR Consulting Services",
      href: "/services/hr-consulting-services",
      description:
        "Providing strategic HR consulting to optimize your workforce",
      url: "hr.jpg", // Example image URL
    },
    {
      title: "Outsourcing Services",
      href: "/services/outsourcing-services",
      description:
        "Efficient and cost-effective outsourcing solutions for your business",
      url: "outsourcing.jpg", // Example image URL
    },
    {
      title: "Payroll Management",
      href: "/services/payroll-management",
      description:
        "End-to-end payroll solutions for seamless payroll processing",
      url: "paycheck.jpg", // Example image URL
    },
    {
      title: "Training and Development",
      href: "/services/training-and-development",
      description:
        "Tailored training programs to upskill your workforce and drive performance",
      url: "training.jpg", // Example image URL
    },
    {
      title: "Talent Acquisition Strategy",
      href: "/services/talent-acquisition-strategy",
      description:
        "Strategic planning for attracting top talent and improving recruitment processes.",
      url: "talent.jpg", // Example image URL
    },
    {
      title: "Resume Modification",
      href: "/services/resume-modification-services",
      description:
        "Enhance your resume with professional writing and ATS optimization to stand out in competitive job markets.",
      url: "resume.jpg", // Example image URL
    },
    {
      title: "Interview Training",
      href: "/services/interview-training-services",
      description:
        "Develop critical interview skills and gain confidence with expert-led mock interviews and personalized coaching.",
      url: "interview.jpg", // Example image URL
    },
    {
      title: "Campus Recruitment",
      href: "/services/campus-recruitment-services",
      description:
        "Comprehensive campus hiring solutions to connect your organization with top talent from premier institutions.",
      url: "campus.jpg", // Example image URL
    },
  ],
  industries: [
    {
      title: "FMCG",
      href: "/industry/fmcg",
      description:
        "Specialized recruitment for the Fast-Moving Consumer Goods sector, connecting businesses with skilled talent to drive growth.",
      url: "fmcg.jpg", // Example image URL
    },
    {
      title: "Pharmaceuticals",
      href: "/industry/pharmaceuticals",
      description:
        "Comprehensive staffing solutions for the pharmaceutical industry, ensuring access to top-tier professionals for innovation and compliance.",
      url: "pharmaceuticals.jpg", // Example image URL
    },
    {
      title: "Oil and Gas",
      href: "/industry/oil-and-gas",
      description:
        "Tailored recruitment services for the oil and gas industry, meeting the unique demands of this dynamic and technical sector.",
      url: "oil-gas.jpg", // Example image URL
    },
    {
      title: "BFSI",
      href: "/industry/bfsi",
      description:
        "Expert hiring solutions for banking, financial services, and insurance industries to secure exceptional talent for critical roles.",
      url: "bfsi.jpg", // Example image URL
    },
    {
      title: "Sales & Marketing",
      href: "/industry/sales-and-marketing",
      description:
        "Strategic recruitment for sales and marketing professionals, driving growth, branding, and customer engagement.",
      url: "sales-marketing.jpg", // Example image URL
    },
    {
      title: "Real Estate",
      href: "/industry/real-estate",
      description:
        "Efficient staffing solutions for the real estate sector, building exceptional teams for diverse and dynamic projects.",
      url: "real-estate.jpg", // Example image URL
    },
    {
      title: "Retail",
      href: "/industry/retail",
      description:
        "Recruitment services for the retail sector, connecting businesses with skilled professionals for customer-centric roles.",
      url: "retail.jpg", // Example image URL
    },
    {
      title: "BPO & KPO",
      href: "/industry/bpo-kpo",
      description:
        "Focused recruitment for the BPO and KPO industries, ensuring high-performing teams for global service excellence.",
      url: "bpo-kpo.jpg", // Example image URL
    },
    {
      title: "Gulf Hiring",
      href: "/industry/gulf-hiring",
      description:
        "Specialized recruitment services for the Gulf region, connecting employers with skilled professionals for international roles.",
      url: "gulf-hiring.jpg", // Example image URL
    },
  ],
};

export const homepage = {
  hero: {
    headline: "Connecting Talent with Opportunity, A to Z",
    para: "At AToZ Recruiters LLP, we specialize in bridging the gap between exceptional talent and thriving businesses. Our tailored recruitment solutions ensure that every hire drives growth and success.",
    cta: "Start Your Journey with Us Today",
    // public/homepage/...images.jpg
    url: "/homepage/hero/",
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
      "At AToZ Recruiters LLP, we don't just fill positions; we shape futures. With a proven track record in providing top-tier recruitment and talent acquisition services, we cater to businesses across industries, ensuring that every hire aligns with your company's vision and goals.",
      "And actually we don't just stop there. As our commitment goes beyond matching skills to job descriptions. We aim to build long-term partnerships, offering strategic guidance and workforce solutions that evolve with the market. Whether enhancing your leadership team or streamlining recruitment, we bring a personalized, innovative approach to help you stay ahead in the talent game.",
    ],
    image: "inter.png",
    alt: "AToZ Recruiters LLP",
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
        href: "/services/recruitment-services",
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
        href: "/services/hr-consulting-services",
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
        href: "/services/outsourcing-services",
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
        href: "/services/payroll-management",
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
        href: "/services/training-and-development",
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
        href: "/services/talent-acquisition-strategy",
      },
      {
        title: "Resume Modification",
        image: "resume",
        desc: "Professional resume enhancement with ATS optimization and targeted content to elevate your job application.",
        tags: [
          "ATS Optimization",
          "Professional Writing",
          "Job-Specific Resumes",
          "Career Growth",
        ],
        href: "/services/resume-modification-services",
      },
      {
        title: "Interview Training",
        image: "interview",
        desc: "Comprehensive training sessions to boost confidence, refine communication, and excel in interviews.",
        tags: [
          "Mock Interviews",
          "Feedback Sessions",
          "Body Language Training",
          "Job Readiness",
        ],
        href: "/services/interview-training-services",
      },
      {
        title: "Campus Recruitment",
        image: "campus",
        desc: "Tailored campus hiring solutions to source, assess, and onboard the best talent from leading institutions.",
        tags: [
          "Campus Drives",
          "Pre-Placement Talks",
          "Talent Identification",
          "Onboarding Assistance",
        ],
        href: "/services/campus-recruitment-services",
      },
    ],
  },
  faqSection: {
    subtitle: "Our Dream is to",
    title: "Empower Potential",
    default: "bg.jpg",
    path: "/homepage/faq/",
    introParagraph:
      "At AToZ Recruiters LLP, our dream goes beyond connecting businesses with top talent. We envision a world where every professional finds purpose, and every organization thrives on the strength of its people. Let's build that future together.",
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
          "What makes AToZ Recruiters LLP different from other staffing agencies?",
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
        "Working with AToZ Recruiters LLP has transformed our hiring process. Their expertise and commitment to excellence are unmatched.",
    },
  ],
  closingCTA: {
    message:
      "Whether you're looking to build a strong team or seeking your next career move, AToZ Recruiters LLP is your trusted partner.",
    cta: "Let's Get Started Today!",
  },
};

export const achievements = [
  { icon: Users, count: 1200, label: "Successful Placements" },
  { icon: Briefcase, count: 70, label: "Partner Companies" },
  { icon: Award, count: 58, label: "Industry Awards" },
];

export const contactData = () => {
  return {
    context: {
      Heading: "Connect With Us",
      subHeading: "Tailored Solutions for Candidates & Clients",
      paragraph: `Whether you're a professional seeking your next big opportunity or an organization looking for the right talent, you've come to the right place. Select the appropriate form below to help us tailor our services to your needs and build lasting connections.`,
    },
    tabs: [
      { label: "Candidate Form", formKey: "candidate" },
      { label: "Business Proposal Form", formKey: "client" },
    ],
    forms: {
      candidate: {
        innerHeading: "Candidate Job Application",
        purpose: `This form is designed for job seekers eager to take the next step in their career journey. 
        Share your details to help us match you with the ideal opportunities.`,
        fields: [
          {
            name: "fullName",
            label: "Full Name",
            type: "text",
            required: true,
          },
          {
            name: "fathersName",
            label: "Father's Name",
            type: "text",
            required: true,
          },
          {
            name: "experience",
            label: "Total Experience (in years)",
            type: "number",
            required: true,
          },
          {
            name: "currentRole",
            label: "Current Job Role",
            type: "text",
            required: true,
          },
          { name: "contact", label: "Contact No", type: "tel", required: true },
          { name: "email", label: "Email ID", type: "email", required: true },
          { name: "location", label: "Location", type: "text", required: true },
          {
            name: "resume",
            label: "(Google Drive link of resume)",
            type: "url",
            required: true,
          },
        ],
        imageUrl: "/contact/candidate.jpg", // Example image URL
        imgCaption: "Let's Build Your Future Together!",
        imagePosition: "right",
      },
      client: {
        innerHeading: "Business Proposal Application",
        purpose: `This form is tailored for businesses seeking top-tier talent. 
        Share your requirements, and we'll connect you with exceptional candidates.`,
        fields: [
          {
            name: "fullName",
            label: "Full Name",
            type: "text",
            required: true,
          },
          {
            name: "designation",
            label: "Designation",
            type: "text",
            required: true,
          },
          {
            name: "organization",
            label: "Organization Name",
            type: "text",
            required: true,
          },
          {
            name: "employeeStrength",
            label: "Employee Strength",
            type: "number",
            required: true,
          },
          { name: "contact", label: "Contact No", type: "tel", required: true },
          { name: "email", label: "Email ID", type: "email", required: true },
          { name: "location", label: "Location", type: "text", required: true },
          { name: "website", label: "Website", type: "url", required: false },
          {
            name: "requirements",
            label: "Requirements",
            type: "textarea",
            required: true,
          },
        ],
        imageUrl: "/contact/client.jpg",
        imgCaption: "Let us Find the Perfect Talent for You!",
        imagePosition: "left",
      },
    },
    contactInfo: {
      company: "AToZ Recruiters LLP",
      heading: "Contact Information",
      desc: "Get in touch with us directly.",
      details: [
        {
          label: "Proposal Email",
          value: "proposal@company.com",
        },
        {
          label: "Resume Email",
          value: "resume@company.com",
        },
        {
          label: "Phone Number",
          value: "+1-234-567-8900",
        },
        {
          label: "Address",
          value: "123 Corporate Blvd, Business City, Country",
        },
      ],
      heading2: "Let's Connect",
      para: "We believe in building strong partnerships with both candidates and businesses. Whether you're aiming to elevate your career or find the perfect talent, our team is here to deliver personalized solutions that drive success.",
      actionBtn: "Apply Now!",
    },
    mapEmbed: {
      heading: "Our Location",
      embedUrl: "https://www.google.com/maps/embed?pb=...", // Replace with your actual embed URL
    },
  };
};

type Contact = {
  name: string;
  number: string;
};

export const contacts: Contact[] = [
  // { name: "HR Department", number: "+91 87085 67919" },
  // { name: "Business Colaboration", number: "+91 91515 15209" },
  { name: "Contact Support", number: "+91 91515 15209" },
];

type QuickLink = {
  label: string;
  url: string;
};

type SocialLink = {
  icon: IconType;
  url: string;
  color: string;
};

export const Footer = {
  company: "AToZ Recruiters LLP",
  tagline:
    "Connecting talent with opportunity as we Bridge Talent and Opportunity, One Connection at a Time.",
  quick: [
    { label: "Home", url: "/" },
    { label: "About", url: "/about" },
    { label: "Services", url: "/#services" },
    { label: "Contact", url: "/contact" },
  ] as QuickLink[],
  address: "3rd floor, KB Complex, Pocket F, Block F, Sector Alpha II,",
  address1: "Greater Noida, Brahmpur Rajraula Urf Nawada, Uttar Pradesh 201308",
  phone: "(+91) 91 5151 5209",
  job: "resume@atozrecruiters.com",
  proposal: "proposal@atozrecruiters.com",
  rights: "AToZ Recruiters LLP. All rights reserved.",
  developer: "Website Designed and Developed by Akshay Arora",
  link: {
    url: "https://akshay.imperfectors.com",
    label: "[akshay.imperfectors.com]",
  },
  links: [
    {
      icon: IoLogoFacebook,
      url: "https://facebook.com/atozrecruiters",
      color: "blue",
    },
    {
      icon: IoLogoTwitter,
      url: "https://twitter.com/atozrecruiters",
      color: "blue",
    },
    {
      icon: IoLogoLinkedin,
      url: "https://www.linkedin.com/company/atoz-recruiters-trainers/",
      color: "blue",
    },
    {
      icon: IoLogoInstagram,
      url: "https://instagram.com/atozrecruiters",
      color: "pink",
    },
  ] as SocialLink[],
};
