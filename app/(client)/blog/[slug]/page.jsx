import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";

import { PortableText } from "@portabletext/react";

import Image from "next/image";

export const revalidate = 30;

async function getPost(slug) {
  const query = `*[_type == "post" && slug.current == "${slug}"][0] {
    title,
    body,
    author->{name},
    publishedAt,
  }`;
  const post = await client.fetch(query);
  return post;
}

const myPortableTextComponents = {
  types: {
    image: ({ value }) => (
      <Image
        src={urlForImage(value)}
        alt="Post Image"
        width={900}
        height={400}
        className="mx-auto h-auto w-3/5 rounded"
      />
    ),
  },
};

export default async function BlogPostPage({ params: { slug } }) {
  const post = await getPost(slug);

  console.log(post);

  return (
    <main>
      <div className="mx-auto mt-20 w-[calc(90%_-_16px)] max-w-screen-xl space-y-10">
        <div className="space-y-5">
          <h1 className="text-center text-2xl font-bold xs:text-3xl sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <span className="block h-0.5 w-full rounded bg-muted-foreground"></span>
          <div className="flex items-center justify-between">
            <p className="font-light xs:text-lg lg:text-xl">
              {post.author.name}
            </p>
            <p className="font-light xs:text-lg lg:text-xl">
              {new Date(post.publishedAt).toDateString()}
            </p>
          </div>
        </div>
        <div className="prose-headings:my-5 prose-headings:text-2xl prose-p:mb-5 prose-p:leading-7 prose-li:list-disc prose-li:leading-7 prose-li:ml-4 m-auto text-justify">
          <PortableText
            clas
            value={post.body}
            components={myPortableTextComponents}
          />
        </div>
      </div>
    </main>
  );
}
