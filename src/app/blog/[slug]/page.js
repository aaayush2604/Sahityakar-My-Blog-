import { getPostBySlug, getAllPosts } from "@/lib/posts";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const slug = params.slug;
  const post = await getPostBySlug(slug);

  return {
    title: post.title,
    description: post.excerpt || `Read ${post.title} on my blog`,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `https://yourdomain.com/blog/${slug}`,
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags || [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = params;

  // Fetch the current post
  const post = await getPostBySlug(slug);

  // Use Promise.resolve() to make the synchronous call asynchronous.
  const allPosts = await Promise.resolve(getAllPosts());
  const otherPosts = allPosts.filter((p) => p.slug !== slug).slice(0, 3);

  if (!post) return <p>Post not found</p>;

  return (
    <section className="max-w-3xl mx-auto mt-16">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-500 text-sm mb-6">
        {post.date} • {post.author}
      </p>
      <div
        className="prose max-w-none mb-8"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
      {otherPosts.length > 0 && (
        <div className="mt-12">
          <h2 className="text-xl font-semibold mb-4">Other Posts</h2>
          <ul className="space-y-2">
            {otherPosts.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="text-blue-600 hover:underline"
                >
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            datePublished: post.date,
            author: {
              "@type": "Person",
              name: post.author,
            },
            description: post.excerpt,
          }),
        }}
      />
    </section>
  );
}
