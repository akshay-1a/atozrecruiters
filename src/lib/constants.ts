import {
  Users,
  Briefcase,
  Award,
  Mail,
  MapPin,
  Phone,
  LucideIcon,
} from "lucide-react";
import { IconType } from "react-icons";
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoInstagram,
} from "react-icons/io5";

export const navItems = {
  company: [
    {
      title: "About Us",
      href: "/about",
      description: "Learn about our mission, vision, and values",
      url: "about.jpg", // Example image URL
    },
    {
      title: "Our Team",
      href: "/team",
      description: "Meet our experienced recruitment professionals",
      url: "team.jpg", // Example image URL
    },
    {
      title: "Careers",
      href: "/careers",
      description: "Join our growing team of recruiters",
      url: "career.jpg", // Example image URL
    },
  ],
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
        "Strategic planning for attracting top talent and improving recruitment processes",
      url: "talent.jpg", // Example image URL
    },
  ],

  industries: [
    {
      title: "Information Technology",
      href: "/industries/information-technology",
      description: "Software, Hardware, and IT Services",
      url: "infotech.jpg", // Example image URL
    },
    {
      title: "Banking & Finance",
      href: "/industries/banking",
      description: "Financial Services and Banking",
      url: "banking.jpg", // Example image URL
    },
    {
      title: "Healthcare",
      href: "/industries/healthcare",
      description: "Medical and Healthcare Professionals",
      url: "healthcare.jpg", // Example image URL
    },
    {
      title: "Manufacturing",
      href: "/industries/manufacturing",
      description: "Production and Manufacturing",
      url: "manufacturing.jpg", // Example image URL
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
      "And actually we don't jsut stop there. As our commitment goes beyond matching skills to job descriptions. We aim to build long-term partnerships, offering strategic guidance and workforce solutions that evolve with the market. Whether enhancing your leadership team or streamlining recruitment, we bring a personalized, innovative approach to help you stay ahead in the talent game.",
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

export const contactData = () => {
  return {
    context: {
      Heading: "Connect With Us",
      subHeading: "Tailored Solutions for Candidates & Clients",
      paragraph: `Whether you're a professional seeking your next big opportunity or an organization looking for the right talent, you've come to the right place. Select the appropriate form below to help us tailor our services to your needs and build lasting connections.`,
    },
    tabs: [
      { label: "Candidate Form", formKey: "candidate" },
      { label: "Client Form", formKey: "client" },
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
      para: "We believe in building strong partnerships with both candidates and businesses. Whether you’re aiming to elevate your career or find the perfect talent, our team is here to deliver personalized solutions that drive success.",
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

export const footer = {
  company: "A To Z Recruiters",
  tagline: "Connecting talent with opportunity",
  quick: [
    { label: "Home", url: "/" },
    { label: "About", url: "/#about" },
    { label: "Services", url: "/#services" },
    { label: "Contact", url: "/contact" },
  ] as QuickLink[],
  address: "Migsun Twiinz, SUN-3,",
  address1: "602, ETA-2, Greater Noida",
  phone: "(+91) 91 5151 5209",
  job: "resume@atozrecruiters.com",
  proposal: "proposal@atozrecruiters.com",
  rights: "A To Z Recruiters. All rights reserved.",
  developer: "Website Designed by and Developed by Akshay Arora",
  link: {
    url: "https://akshay.imperfectors.com",
    label: "[akshay.imperfectors.com]",
  },
  links: [
    {
      icon: IoLogoFacebook,
      url: "https://facebook.com/atozrecruiters",
      color: "text-blue-600",
    },
    {
      icon: IoLogoTwitter,
      url: "https://twitter.com/atozrecruiters",
      color: "text-blue-600",
    },
    {
      icon: IoLogoLinkedin,
      url: "https://linkedin.com/atozrecruiters",
      color: "text-blue-600",
    },
    {
      icon: IoLogoInstagram,
      url: "https://instagram.com/atozrecruiters",
      color: "text-pink-500",
    },
  ] as SocialLink[],
};
