import { getAllPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";
import Link from "next/link";
import BlogCard from "@/components/BlogCard";

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 5);

  return (
    <>
      <header className="relative h-[80vh] flex items-center justify-center bg-black">
        <div className="absolute inset-0">
          <img
            src="/assets/images/HeroImage.jpg"
            alt="Blog background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 bg-white shadow-lg p-10 w-[80%] max-w-3xl text-center">
          <h1 className="text-2xl sm:text-4xl font-bold text-black">
            Welcome to My Blog
          </h1>
          <p className="mt-4 text-sm sm:text-lg text-gray-700">
            A place where I share tutorials, thoughts, and stories.
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto py-16 px-4">
        <section aria-labelledby="latest-posts">
          <h2
            id="latest-posts"
            className="text-2xl font-semibold mb-6 text-white"
          >
            Latest Posts
          </h2>

          <div className="columns-1 sm:columns-2 gap-6">
            {recentPosts.map((post) => (
              <div key={post.slug} className="sm:mt-20 mb-6 break-inside-avoid">
                <BlogCard
                  title={post.title}
                  author={post.author}
                  excerpt={post.excerpt}
                  image={post.image}
                  slug={post.slug}
                />
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
