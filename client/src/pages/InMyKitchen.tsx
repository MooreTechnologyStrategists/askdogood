import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { BlogRenderer } from "@/components/BlogRenderer";
import kitchenPost from "@/content/in-my-kitchen.json";
import { Button } from "@/components/ui/button";

type KitchenPost = {
  title: string;
  excerpt: string;
  featuredImage: string;
  sections: Array<
    | {
        type: "text";
        heading: string;
        content: string;
      }
    | {
        type: "image";
        images: string[];
      }
  >;
};

const typedKitchenPost = kitchenPost as KitchenPost;

export default function InMyKitchen() {
  return (
    <main className="min-h-screen bg-background">
      <section className="border-b border-border/60 bg-[linear-gradient(180deg,rgba(250,245,240,1),rgba(255,255,255,1))]">
        <div className="container py-12 md:py-16">
          <Button asChild variant="ghost" className="mb-6 rounded-full px-0 text-primary hover:bg-transparent">
            <Link href="/behind-the-scenes">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to behind the scenes
            </Link>
          </Button>

          <div className="mx-auto max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Kitchen journal</p>
            <h1 className="text-4xl md:text-6xl font-semibold mt-3 mb-4">{typedKitchenPost.title}</h1>
            <p className="text-lg text-muted-foreground leading-8">{typedKitchenPost.excerpt}</p>

            <div className="mt-8 overflow-hidden rounded-[2rem] border border-border/70 shadow-sm">
              <img
                src={typedKitchenPost.featuredImage}
                alt={typedKitchenPost.title}
                className="h-[24rem] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl rounded-[2rem] border border-border/60 bg-white p-8 shadow-sm md:p-10">
            <BlogRenderer post={typedKitchenPost} />
          </div>
        </div>
      </section>
    </main>
  );
}