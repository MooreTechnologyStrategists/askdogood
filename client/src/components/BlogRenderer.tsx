type BlogSection =
  | {
      type: "text";
      heading: string;
      content: string;
    }
  | {
      type: "image";
      images: string[];
    };

type StructuredPost = {
  sections: BlogSection[];
};

export function BlogRenderer({ post }: { post: StructuredPost }) {
  return (
    <article className="space-y-8">
      {post.sections.map((section, index) => {
        if (section.type === "text") {
          return (
            <div key={index}>
              <h2 className="text-2xl font-semibold mb-2">
                {section.heading}
              </h2>
              <p className="text-gray-700 leading-8">
                {section.content}
              </p>
            </div>
          );
        }

        if (section.type === "image") {
          return (
            <div key={index} className={`grid gap-4 ${section.images.length > 1 ? 'md:grid-cols-2' : ''}`}>
              {section.images.map((img, imageIndex) => (
                <img
                  key={imageIndex}
                  src={img}
                  alt="AskDoGood kitchen"
                  className="rounded-xl w-full object-cover"
                />
              ))}
            </div>
          );
        }

        return null;
      })}
    </article>
  );
}