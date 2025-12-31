import Link from "next/link";

export default function BlogListCard({ post }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div className="relative flex flex-col md:flex-row w-full bg-white shadow-sm border border-slate-200 rounded-lg overflow-hidden">
        {/* Image block (only for md+) */}
        <div className="hidden md:block relative p-2.5 md:h-60 md:w-2/5 shrink-0 overflow-hidden">
          <img
            src={post.image || "/assets/images/default.jpg"} // fallback image
            alt={post.title}
            className="h-full w-full rounded-md md:rounded-lg object-cover"
          />
        </div>

        {/* Content */}
        <div
          className={`
      relative p-6 flex flex-col justify-between 
      md:bg-white md:text-slate-800 text-white
    `}
        >
          {/* Small screen background image + overlay */}
          <div
            className="absolute inset-0 md:hidden"
            style={{
              backgroundImage: `url(${
                post.image || "/assets/images/default.jpg"
              })`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-black/40 md:hidden"></div>

          {/* Actual content (z-10 so it’s above overlays) */}
          <div className="relative z-10">
            {/* Tags */}
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
            <h4 className="mb-2 text-xl font-semibold">{post.title}</h4>

            {/* Excerpt */}
            {post.excerpt && (
              <p className="mb-8 leading-normal font-light">{post.excerpt}</p>
            )}
          </div>

          {/* Learn More link */}
          <div className="relative z-10">
            <div className="font-semibold text-sm flex items-center">
              Read More
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
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
