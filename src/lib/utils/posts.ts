import type { Post, PostMetadata } from './types';

// Get all posts from the posts directory
export async function getAllPosts(): Promise<Post[]> {
  const postFiles = import.meta.glob('/src/posts/*.md', { eager: true });
  
  const posts: Post[] = [];
  
  for (const [path, file] of Object.entries(postFiles)) {
    const slug = path.split('/').pop()?.replace('.md', '') || '';
    const metadata = (file as { metadata: PostMetadata }).metadata;
    
    if (metadata.published !== false) {
      posts.push({
        slug,
        ...metadata
      });
    }
  }
  
  // Sort by date, newest first
  return posts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

// Calculate reading time
export function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

// Format date
export function formatDate(date: string, options?: Intl.DateTimeFormatOptions): string {
  return new Date(date).toLocaleDateString('en-US', options || {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}
