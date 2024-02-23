import PostCard from "@/components/PostCard";
async function loadPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
}

async function PostPage() {
  const posts = await loadPosts();

  return (
    <div>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
       
      ))}
    </div>
  );
}

export default PostPage;
