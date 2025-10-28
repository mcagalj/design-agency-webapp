import { blogPosts } from '../data/blogPosts';

export default function BlogPage() {
  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Blog</h1>
        <p className="text-gray-600 mb-8">Design insights and industry trends</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-gradient-to-br from-purple-500 to-blue-500"></div>
              <div className="p-6">
                <div className="text-sm text-purple-600 font-semibold mb-2">
                  {post.category}
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{post.author}</span>
                  <span>{new Date(post.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'short', 
                    day: 'numeric' 
                  })}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        <div className="mt-8 text-center text-gray-600">
          <p>Total blog posts: {blogPosts.length}</p>
        </div>
      </div>
    </main>
  );
}
