
import { notFound } from "next/navigation";

export const dynamicParams =true;

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export async function generateStaticParams() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();
    return posts.map((post: Post) => ({
        id: post.id.toString()
    }));
}

export default async function Blogs({ params }: { params: Promise<{ id: string }> }) {

  const actualParams =  await params;
  const { id } = actualParams;

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) {
    notFound();
  }
  const post = await res.json();

  return (
    <div>
      <div>{post.id}</div>
      <div>{post.title}</div>
    </div>
  );
}