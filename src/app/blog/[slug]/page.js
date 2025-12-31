import { getPostBySlug, getAllPosts } from "@/lib/posts";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const resolvedParams = await params; // <-- await params
  const slug = resolvedParams.slug;
  const post = await getPostBySlug(slug);

  return {
    title: post.title,
    description: post.excerpt || `Read ${post.title} on my blog`,
    openGraph: {
      title: post.title,
      image: post.image,
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
  const resolvedParams = await params; // <-- await params
  const slug = resolvedParams.slug;

  // Fetch the current post
  const post = await getPostBySlug(slug);

  // Fetch all posts
  const allPosts = await getAllPosts();
  const otherPosts = allPosts.filter((p) => p.slug !== slug).slice(0, 3);

  if (!post) return <p>Post not found</p>;

  return (
    <section className="max-w-3xl mx-auto  text-white">
      {/* Hero Image */}
      {post.image && (
        <div className="w-full h-64 sm:h-60 mb-8 overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Post Content */}
      <h1 className="text-3xl font-bold mb-4 p-1.5">{post.title}</h1>
      <p className="text-gray-500 text-sm mb-6 p-1.5">
        {post.date} • {post.author}
      </p>
      <div
        className="blog-content text-white p-1.5"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />

      {/* Other Posts */}
      {otherPosts.length > 0 && (
        <div className="mt-12">
          <h2 className="text-xl font-semibold mb-4">Other Posts</h2>
          <ul className="space-y-2 mb-7">
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

      {/* Structured Data */}
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
