export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  image: string;
  imageAlt?: string;
  tags: string[];
  featured?: boolean;
  author?: string;
  authorImage?: string;
  category?: string;
}
