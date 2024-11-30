//@/types/index.ts: Types for the Client components
export interface NavItem {
  title: string;
  href: string;
  description: string;
  url: string;
}


export interface JobListing {
  jobTitle: string;
  location: string;
  salary: string;
  experience: string;
  qualification: string;
  keyResponsibilities: string;
  contactEmail: string;
  phone: string;
}

export interface CompanyData {
  slug: string;
  title: string;
  hero: {
    headline: string;
    tagline: string;
    cta: string;
  };
  story: {
    title: string;
    content: string;
    milestones: {
      year: number;
      title: string;
      description: string;
      image: string;
    }[];
  };
  mission: {
    title: string;
    mission: string;
    vision: string;
  };
  values: {
    title: string;
    list: {
      title: string;
      description: string;
    }[];
  };
  uniqueStrengths: {
    title: string;
    points: string[];
  };
  team: {
    title: string;
    members: {
      name: string;
      role: string;
      image: string;
    }[];
  };
  impact: {
    title: string;
    stats: {
      value: string;
      label: string;
    }[];
    testimonial: {
      quote: string;
      author: string;
      company: string;
    };
  };
  cta: {
    title: string;
    description: string;
    primaryButton: {
      text: string;
      link: string;
    };
    secondaryButton: {
      text: string;
      link: string;
    };
  };
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
