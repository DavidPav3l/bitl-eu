import { client } from "@/sanity/lib/client";

import Link from "next/link";

import { User } from "lucide-react";
import { CalendarDays } from "lucide-react";

export const metadata = {
  title: "Blog Posts | BITL Blog",
};

async function getPosts() {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    title,
    slug,
    author->{name},
    publishedAt,
    body,
    excerpt
  }`;
  const posts = await client.fetch(query);
  return posts;
}

export const revalidate = 30;

function BlogPostPreview({ post }) {
  return (
    <Link
      href={`/blog/${post.slug.current}`}
      className="rounded-lg border px-2 py-4 sm:space-y-8 sm:px-6 lg:px-10 lg:py-6"
    >
      <div className="space-y-4">
        <h2 className="text-center text-xl font-bold xs:text-2xl lg:text-2xl">
          {post.title}
        </h2>

        <p className="text-sm xs:text-base lg:text-lg">{post.excerpt}</p>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex flex-col items-center gap-3 border border-dashed p-2 sm:flex-row">
          <User className="h-6 w-6 sm:h-8 sm:w-8" />
          <span className="text-center">{post.author.name}</span>{" "}
        </div>
        <div className="flex flex-col items-center gap-3 border border-dashed p-2 sm:flex-row">
          <CalendarDays className="h-6 w-6 sm:h-8 sm:w-8" />
          <p className="text-center">
            {new Date(post.publishedAt).toDateString()}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default async function BlogPostsPage() {
  const posts = await getPosts();

  return (
    <main className="mx-auto w-[calc(95%_-_8px)] max-w-screen-xl">
      <div className="mt-20 space-y-10 sm:space-y-14 lg:space-y-20">
        <h1 className="text-center text-2xl font-bold xs:text-3xl sm:text-4xl lg:text-5xl">
          Blog Posts
        </h1>
        <div className="grid grid-cols-1 gap-10">
          {posts.map((post) => (
            <BlogPostPreview key={post.slug.current} post={post} />
          ))}
        </div>
      </div>
    </main>
  );
}
