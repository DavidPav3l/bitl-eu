import { client } from "@/sanity/lib/client";

import Link from "next/link";

import { User } from "lucide-react";
import { CalendarDays } from "lucide-react";

async function getPosts() {
  const query = `*[_type == "post"] {
    title,
    slug,
    author->{name},
    publishedAt,
    body
  }`;
  const posts = await client.fetch(query);
  return posts;
}

export const revalidate = 30;

function BlogPostPreview({ post }) {
  return (
    <Link
      href={`/blog/${post.slug.current}`}
      className="space-y-8 rounded-lg border px-6 py-4 lg:px-10 lg:py-6"
    >
      <h2 className="text-lg font-bold xs:text-xl lg:text-2xl">{post.title}</h2>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <User className="h-8 w-8" />
          <span>{post.author.name}</span>{" "}
        </div>
        <div className="flex items-center gap-3">
          <CalendarDays className="h-8 w-8" />
          <p>{new Date(post.publishedAt).toDateString()}</p>
        </div>
      </div>
    </Link>
  );
}

export default async function BlogPostsPage() {
  const posts = await getPosts();

  return (
    <main className="mx-auto w-[calc(90%_-_16px)] max-w-screen-xl">
      <div className="mt-20 space-y-20">
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
