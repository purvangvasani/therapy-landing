export interface BlogPost {
  id: string;
  title: string;
  content: string;
  date: string;
  category: string;
  imageUrl?: string;
  author?: string;
  readTime?: string;
  excerpt?: string;
}
