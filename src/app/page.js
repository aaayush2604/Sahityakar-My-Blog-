import { getAllPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";
import Link from "next/link";

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 4);

  return (
    <>
      <header className="text-center py-16 bg-black text-white">
        <h1 className="text-4xl font-bold">Welcome to My Blog</h1>
        <p className="mt-4 text-lg">
          A place where I share tutorials, thoughts, and stories.
        </p>
      </header>

      <main className="max-w-4xl mx-auto py-16 px-4">
        {/* Latest Posts Section */}
        <section aria-labelledby="latest-posts">
          <h2 id="latest-posts" className="text-2xl font-semibold mb-6">
            Latest Posts
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {recentPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </section>

        {/* About Me Section */}
        <section
          aria-labelledby="about-me"
          className="py-10 bg-black text-white px-8 rounded mt-12"
        >
          <h2 id="about-me" className="text-2xl font-semibold mb-4">
            About Me
          </h2>
          <p className="text-lg">
            I’m a passionate web developer building modern applications.
            <Link href="/about" className="underline ml-2">
              Read More
            </Link>
          </p>
        </section>

        {/* Call-to-Action Section */}
        <section
          aria-labelledby="contact-me"
          className="py-12 text-center mt-12"
        >
          <h2 id="contact-me" className="text-2xl font-semibold mb-4">
            Let’s Collaborate
          </h2>
          <p className="text-lg mb-4">Got a question or want to collaborate?</p>
          <Link
            href="/contact"
            className="text-blue-600 hover:underline text-lg"
          >
            Contact Me
          </Link>
        </section>
      </main>
    </>
  );
}
