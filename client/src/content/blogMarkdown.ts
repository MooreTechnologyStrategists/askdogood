import type { BlogPost } from "@/content/blogTypes";

type FrontmatterValue = string | string[] | boolean;

const rawMarkdownPosts = import.meta.glob("./blog/flagship/**/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

function parseValue(rawValue: string): FrontmatterValue {
  const value = rawValue.trim();

  if (value === "true" || value === "false") {
    return value === "true";
  }

  if (value.startsWith("[") && value.endsWith("]")) {
    return value
      .slice(1, -1)
      .split(",")
      .map((item) => item.trim().replace(/^['\"]|['\"]$/g, ""))
      .filter(Boolean);
  }

  return value.replace(/^['\"]|['\"]$/g, "");
}

function parseMarkdownFile(rawFile: string): BlogPost | null {
  const match = rawFile.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);

  if (!match) {
    return null;
  }

  const [, frontmatterBlock, body] = match;
  const frontmatter: Record<string, FrontmatterValue> = {};

  for (const line of frontmatterBlock.split(/\r?\n/)) {
    if (!line.trim()) {
      continue;
    }

    const separatorIndex = line.indexOf(":");

    if (separatorIndex === -1) {
      continue;
    }

    const key = line.slice(0, separatorIndex).trim();
    const value = line.slice(separatorIndex + 1);
    frontmatter[key] = parseValue(value);
  }

  const tags = Array.isArray(frontmatter.tags) ? frontmatter.tags : [];

  return {
    id:
      typeof frontmatter.slug === "string" && frontmatter.slug.trim()
        ? frontmatter.slug
        : "",
    title: typeof frontmatter.title === "string" ? frontmatter.title : "Untitled Post",
    excerpt:
      typeof frontmatter.excerpt === "string"
        ? frontmatter.excerpt
        : body.trim().slice(0, 180),
    content: body.trim(),
    date: typeof frontmatter.date === "string" ? frontmatter.date : "",
    readTime:
      typeof frontmatter.readTime === "string" ? frontmatter.readTime : "5 min read",
    image: typeof frontmatter.image === "string" ? frontmatter.image : "",
    imageAlt:
      typeof frontmatter.imageAlt === "string" ? frontmatter.imageAlt : undefined,
    tags,
    featured: frontmatter.featured === true,
    author: typeof frontmatter.author === "string" ? frontmatter.author : undefined,
    category:
      typeof frontmatter.category === "string" ? frontmatter.category : undefined,
  };
}

export const markdownBlogPosts: BlogPost[] = Object.values(rawMarkdownPosts)
  .map((rawFile) => parseMarkdownFile(rawFile))
  .filter((post): post is BlogPost => Boolean(post?.id));
