import Link from "next/link";

export default function PostCard({ post }) {
  return (
    <div className="p-4 border rounded hover:shadow transition">
      <Link
        href={`/blog/${post.slug}`}
        className="text-xl font-semibold text-blue-600 hover:underline"
      >
        {post.title}
      </Link>
      <p className="text-gray-500 text-sm">
        {post.date} • {post.author}
      </p>
      {post.excerpt && <p className="mt-2 text-gray-700">{post.excerpt}</p>}
    </div>
  );
}
