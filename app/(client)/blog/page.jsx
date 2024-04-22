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
      className="space-y-4 rounded-lg border px-4 py-8 xs:px-6 xs:py-12 sm:space-y-8 sm:px-8 sm:py-16 lg:px-16 lg:py-20"
    >
      <div className="space-y-4 sm:space-y-8">
        <h2 className="text-center text-xl font-bold xs:text-2xl lg:text-2xl">
          {post.title}
        </h2>

        <p className="text-sm xs:text-base lg:text-lg">{post.excerpt}</p>
      </div>

      <div className="flex w-full justify-center sm:justify-between">
        <div className="flex shrink grow basis-0 flex-col items-center gap-4 border p-3 sm:flex-row sm:border-0">
          <User className="h-6 w-6 sm:h-7 sm:w-7" />
          <span className="text-center text-xs xs:text-sm sm:text-base">
            {post.author.name}
          </span>{" "}
        </div>
        <div className="flex shrink grow basis-0 flex-col items-center gap-4 border p-3 sm:flex-row sm:justify-end sm:border-0">
          <CalendarDays className="h-6 w-6 sm:h-7 sm:w-7" />
          <p className="text-center text-xs xs:text-sm sm:text-base">
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
    <main className="mx-auto w-[calc(90%_-_16px)] max-w-screen-xl space-y-10 sm:space-y-14 lg:space-y-20">
      <div className="mt-[20vh] min-h-[calc(70vh_-_100px)] animate-show-up space-y-6 sm:mt-[25vh] lg:mt-[calc(25vh_+_30px)]">
        <h1 className="text-center text-3xl font-bold tracking-wider xs:text-4xl sm:text-5xl lg:text-6xl">
          Blog Posts
        </h1>
        <p className="mx-auto max-w-screen-md text-center sm:text-lg lg:max-w-screen-lg xl:text-xl">
          <span className="">The place</span> where voices from{" "}
          <span className="font-semibold">
            Romania, Türkiye, Poland, Croatia, and Ireland
          </span>{" "}
          converge{" "}
          <span className="font-semibold text-emerald-500">
            to confront climate change
          </span>
          . Explore our collection of insightful blog posts crafted by
          participants of the{" "}
          <span className="font-semibold">Erasmus+ Project</span> , offering
          diverse perspectives and practical solutions to{" "}
          <span className="font-semibold text-primary">
            combat global warming
          </span>
          .
        </p>
      </div>
      <div className="grid grid-cols-1 gap-10 pb-10">
        {posts.map((post) => (
          <BlogPostPreview key={post.slug.current} post={post} />
        ))}
      </div>
    </main>
  );
}
