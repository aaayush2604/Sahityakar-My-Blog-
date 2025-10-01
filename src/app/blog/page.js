import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import BlogListCard from "@/components/BlogListCard";

export default function BlogPage() {
  const allPosts = getAllPosts();
  const postsPerPage = 5;

  // First page
  const page = 1;
  const totalPages = Math.ceil(allPosts.length / postsPerPage);
  const paginatedPosts = allPosts.slice(0, postsPerPage);

  return (
    <section className="max-w-5xl mx-auto mt-7 px-4 pb-10">
      <h1 className="text-3xl font-bold mb-6">All Blog Posts</h1>

      <div className="space-y-6">
        {paginatedPosts.map((post) => (
          <BlogListCard key={post.slug} post={post} />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-end mt-8">
          <Link href="/blog/page/2" className="text-blue-600 hover:underline">
            Next →
          </Link>
        </div>
      )}
    </section>
  );
}
