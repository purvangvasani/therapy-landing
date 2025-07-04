import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { CalendarIcon } from '@radix-ui/react-icons';
import { blogPosts } from '../blog-data';
import type { BlogPost } from '../types';
import { BlogContactForm } from '@/components/BlogContactForm';

export default function BlogPostPage({
  params,
}: {
  params: { id: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const post: BlogPost | undefined = blogPosts.find((post: BlogPost) => post.id === params.id);

  if (!post) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2">
      <article className="prose dark:prose-invert max-w-none">
        <header className="mb-8">
          <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm space-x-2 mb-2">
            <div className="flex items-center">
              <CalendarIcon className="h-4 w-4" />
              <time dateTime={post.date} className="ml-1">{formatDate(post.date)}</time>
            </div>
          </div>
          <h1 className="text-4xl font-bold mt-2 mb-3">
            {post.title}
          </h1>
          <div className="mb-4">
            <span className="text-purple-600 dark:text-purple-400 font-medium text-sm">
              {post.category}
            </span>
          </div>
          {post.author && (
            <div className="text-gray-500 dark:text-gray-400 text-sm">
              {post.author} {post.readTime && `• ${post.readTime}`}
            </div>
          )}
        </header>

        {post.imageUrl && (
          <div className="mb-8 rounded-xl overflow-hidden relative w-full h-96">
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
        )}

            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg text-gray-700 dark:text-gray-300">
                {post.content}
              </p>
            </div>
          </article>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link 
              href="/blog" 
              className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to all posts
            </Link>
          </div>
        </div>
        
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="lg:sticky lg:top-24">
            <BlogContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }));
}

// Set the page title and description for better SEO
export async function generateMetadata({ params }: { params: { id: string } }): Promise<{
  title: string;
  description: string;
}> {
  const post = blogPosts.find((post) => post.id === params.id);
  
  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: `${post.title} | Therapy Blog`,
    description: post.excerpt || 'Read more about mental health and wellness on our blog.',
  };
}
