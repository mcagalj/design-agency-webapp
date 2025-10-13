interface BlogPostProps {
  params: { id: string };
}

// Using type alias is also fine
//
// type BlogPostProps = {
//   params: { id: string };
// };

export default async function BlogPost({ params }: BlogPostProps) {
  const { id } = await params;

  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <h1 className="text-6xl font-extrabold tracking-tight">
        Blog post: {id}
      </h1>
    </main>
  );
}
