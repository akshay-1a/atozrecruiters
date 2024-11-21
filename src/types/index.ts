//@/types/index.ts: Types for the Client components
export interface NavItem {
  title: string;
  href: string;
  description: string;
  url: string;
}

export interface CompanyData {
  slug: string;
  title: string;
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
    src: string;
    steps: {
      url: string;
      title: string;
      step: string;
    }[];
  };
  whyChooseUs: {
    title: string;
    points: {
      title: string;
      para: string;
    }[];
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
}


export interface Related {
    title: string;
    url: string;
    services: {
        name: string;
        image: string;
        href: string;
    }[];
}
