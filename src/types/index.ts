//@/types/index.ts: Types for the Client components
export interface NavItem {
  title: string;
  href: string;
  description: string;
  url: string;
}


export interface ServiceData {
  href: string;
  hero: {
    headline: string;
    tagline: string;
    para: string;
    cta: string;
  };
  overview: {
    title: string;
    description: string;
    url: string;
    images: string[];
  };
  keyBenefits: {
    title: string;
    benefits: string[];
  };
  process: {
    title: string;
    steps: string[];
  };
  whyChooseUs: {
    title: string;
    points: string[];
  };
  testimonials: {
    title: string;
    stories: {
      quote: string;
      client: string;
    }[];
  };
  faq: {
    title: string;
    questions: {
      q: string;
      a: string;
    }[];
  };
  related: {
    title: string;
    services: {
      name: string;
      link: string;
    }[];
  };
}