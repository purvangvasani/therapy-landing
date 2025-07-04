'use client';

import Link from 'next/link';

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  category: string;
  imageUrl?: string;
  author?: string;
  readTime?: string;
  excerpt?: string;
  content: string;
}

// Import blog posts from the separate data file
import { blogPosts } from './blog-data';

// Blog component
export default function Blog() {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="w-full py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Our Blog
              </h1>
              <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-pink-400 my-4 rounded-full"></div>
              <p className="text-left text-gray-600 dark:text-gray-300 max-w-3xl">
                Your Safe space for healing, powered by AI
              </p>
            </div>
            <a 
              href="mailto:info@mytherapy.co.in" 
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-md hover:shadow-lg whitespace-nowrap inline-flex items-center justify-center"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Let&apos;s Connect
            </a>
          </div>
        </div>
      </div>
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Link 
            key={post.id}
            href={`/blog/posts-tsx/${post.id}`}
            className="block rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-in-out group"
          >
            {post.imageUrl && (
              <div className="h-48 bg-gray-100 dark:bg-gray-700 overflow-hidden">
                <img 
                  src={post.imageUrl} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            )}
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {post.excerpt}
              </p>
              <div className="flex flex-col space-y-2 mt-4">
                <div className="text-purple-600 dark:text-purple-400 group-hover:text-purple-800 dark:group-hover:text-purple-300 text-sm font-medium transition-colors self-start">
                  Read More →
                </div>
                <div className="w-full h-px bg-gradient-to-r from-purple-400 to-pink-400 my-1"></div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {formatDate(post.date)}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      </div>
    </div>
  );
}