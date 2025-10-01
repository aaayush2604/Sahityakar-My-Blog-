import Link from "next/link";

export default function BlogListCard({ post }) {
  return (
    <div className="relative max-h-[40vh] flex flex-col md:flex-row w-full bg-white shadow-sm border border-slate-200 rounded-lg">
      {/* Image */}
      <div className="relative p-2.5 md:w-2/5 shrink-0 overflow-hidden">
        <img
          src={post.image || "/assets/images/default.jpg"} // fallback image
          alt={post.title}
          className="h-full w-full rounded-md md:rounded-lg object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col justify-between">
        <div>
          {/* Category or Tag */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag, index) => (
                <div
                  key={index}
                  className="rounded-full bg-teal-600 py-0.5 px-2.5 border border-transparent text-xs text-white shadow-sm"
                >
                  {tag}
                </div>
              ))}
            </div>
          )}

          {/* Title */}
          <h4 className="mb-2 text-slate-800 text-xl font-semibold">
            {post.title}
          </h4>

          {/* Excerpt */}
          {post.excerpt && (
            <p className="mb-8 text-slate-600 leading-normal font-light">
              {post.excerpt}
            </p>
          )}
        </div>

        {/* Learn More Link */}
        <div>
          <Link
            href={`/blog/${post.slug}`}
            className="text-slate-800 font-semibold text-sm hover:underline flex items-center"
          >
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
