import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function BlogPage({ params }) {
  const allPosts = getAllPosts();
  const postsPerPage = 5;

  // Get page number from URL
  const page = parseInt(params.pageNumber) || 1;
  const totalPages = Math.ceil(allPosts.length / postsPerPage);

  const paginatedPosts = allPosts.slice(
    (page - 1) * postsPerPage,
    page * postsPerPage
  );

  return (
    <section className="max-w-3xl mx-auto mt-16">
      <h1 className="text-3xl font-bold mb-6">All Blog Posts</h1>

      <ul className="space-y-4">
        {paginatedPosts.map((post) => (
          <li key={post.slug} className="p-4 border rounded hover:shadow">
            <Link
              href={`/blog/${post.slug}`}
              className="text-blue-600 font-semibold hover:underline"
            >
              {post.title}
            </Link>
            <p className="text-gray-500 text-sm">
              {post.date} • {post.author}
            </p>
            {post.excerpt && (
              <p className="mt-1 text-gray-700">{post.excerpt}</p>
            )}
          </li>
        ))}
      </ul>

      <div className="flex justify-between mt-8">
        {page > 1 && (
          <Link
            href={page === 2 ? "/blog" : `/blog/page/${page - 1}`}
            className="text-blue-600 hover:underline"
          >
            Previous
          </Link>
        )}
        {page < totalPages && (
          <Link
            href={`/blog/page/${page + 1}`}
            className="text-blue-600 hover:underline"
          >
            Next
          </Link>
        )}
      </div>
    </section>
  );
}
