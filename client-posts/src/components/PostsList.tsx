import { useEffect, useState } from "react";
import { getAllPosts } from "../api/posts.api";
import { PostCard } from "./PostCard";

export function PostsList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function loadPosts() {
      const resp = await getAllPosts();

      setPosts(resp.data);
    }
    loadPosts();
  }, []);

  return (
    <section class="bg-white dark:bg-gray-700">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            POSTS
          </h2>
        </div>
        <div class="grid gap-8 lg:grid-cols-2">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
