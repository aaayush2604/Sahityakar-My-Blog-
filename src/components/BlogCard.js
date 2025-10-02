import Link from "next/link";

export default function BlogCard({
  title,
  author,
  role,
  excerpt,
  image,
  slug,
}) {
  return (
    <div className="flex flex-col shadow-sm border border-slate-200 rounded-lg my-6 w-full sm:w-96 bg-white">
      <div className="m-1.5 sm:m-2.5 overflow-hidden rounded-md h-64 sm:h-80 flex justify-center items-center">
        <img className="w-full h-full object-cover" src={image} alt={title} />
      </div>

      <div className="p-3 sm:p-6 text-center">
        <h4 className="mb-1 text-sm sm:text-xl font-semibold text-slate-800">
          {title}
        </h4>
        <p className="text-xs sm:text-sm font-semibold text-slate-500 uppercase">
          {author || role}
        </p>
        <p className="text-xs text-slate-600 mt-4 font-light">{excerpt}</p>
      </div>

      <div className="flex justify-center p-3 sm:p-6 pt-2 gap-7">
        <Link
          href={`/blog/${slug}`}
          className="text-xl font-semibold text-blue-600 hover:underline"
        >
          <button
            className="min-w-32 rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
}
