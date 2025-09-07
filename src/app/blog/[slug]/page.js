import { getPostBySlug, getAllPosts } from "@/lib/posts";
import Link from "next/link";

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
    </section>
  );
}
