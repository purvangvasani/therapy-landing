import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CalendarIcon } from '@radix-ui/react-icons';
import { ContactForm } from '@/components/ContactForm';

interface BlogPost {
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

interface BlogLayoutProps {
  children: React.ReactNode;
  post: BlogPost;
}

const BlogLayout: React.FC<BlogLayoutProps> = ({ children, post }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-12">
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
          <CalendarIcon className="h-4 w-4 mr-2 flex-shrink-0" />
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </div>
        
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
          {post.title}
        </h1>
        
        <div className="mb-6">
          <Link 
            href={`/blog?category=${post.category.toLowerCase()}`}
            className="inline-block px-3 py-1 text-sm text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/30 rounded-full hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors"
          >
            {post.category}
          </Link>
        </div>

        {post.imageUrl && (
          <div className="relative h-64 md:h-96 w-full mb-8 rounded-lg overflow-hidden">
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              className="object-cover"
              priority
              unoptimized={post.imageUrl.startsWith('/')}
            />
          </div>
        )}
      </header>
      
      <div className="flex flex-col lg:flex-row gap-12">
        <article className="prose dark:prose-invert max-w-3xl flex-1">
          {children}
        </article>
        
        <aside className="lg:w-96 flex-shrink-0">
          <div className="sticky top-12">
            <ContactForm />
          </div>
        </aside>
      </div>
      
      <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
        <Link 
          href="/blog" 
          className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:underline mb-8"
        >
          ← Back to Blog
        </Link>
        
        <div className="text-center">
          <h2 className="text-4xl font-normal mb-6">Have Questions?</h2>
          <Link 
            href="/faq" 
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-colors shadow-md hover:shadow-lg"
          >
            Visit Our FAQ Section
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default BlogLayout;
