import { notFound } from 'next/navigation';
import { blogPosts } from '../../blog-data';
import type { BlogPost } from '../../BLOG';
import BlogLayout from '../../BlogLayout';

// Import the blog post components
import MentalHealthAccess from '../mental-health-access';
import EmotionalBurnout from '../emotional-burnout';

// Map of post IDs to their corresponding components
const postComponents: Record<string, React.ComponentType> = {
  'mental-health-access': MentalHealthAccess,
  'emotional-burnout': EmotionalBurnout,
};

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = blogPosts.find((post: BlogPost) => post.id === params.id);
  
  if (!post) {
    notFound();
  }

  const BlogPost = postComponents[params.id];
  
  if (!BlogPost) {
    notFound();
  }
  
  return <BlogPost />;
}

export async function generateStaticParams() {
  return blogPosts.map((post: BlogPost) => ({
    id: post.id,
  }));
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const post = blogPosts.find((post: BlogPost) => post.id === params.id);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}
