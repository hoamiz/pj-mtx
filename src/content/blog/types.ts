export type BlogCategory = "drain" | "septic" | "pricing";

export type BlogSection = {
  id: string;
  heading: string;
  level: 2 | 3;
  paragraphs: string[];
  bullets?: string[];
};

export type BlogFaq = {
  question: string;
  answer: string;
};

export type BlogLink = {
  href: string;
  label: string;
};

export type BlogPost = {
  slug: string;
  category: BlogCategory;
  categoryLabel: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  description: string;
  datePublished: string;
  intro: string[];
  sections: BlogSection[];
  faqs: BlogFaq[];
  relatedSlugs: string[];
  serviceLinks: BlogLink[];
  closing: {
    title: string;
    body: string;
  };
};
