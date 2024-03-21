import { client } from "@/sanity/lib/client";

async function getPosts() {
  const query = `*[_type == "post"]`;
  const posts = await client.fetch(query);
  return posts;
}

export default async function BlogPostsPage() {
  const posts = await getPosts();
  console.log(posts);
  return (
    <div>
      <h1>Blog Posts</h1>
    </div>
  );
}
