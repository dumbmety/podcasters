export interface Post {
  createdBy: string;
  createdAt: string;
  category: string;
  thumbnail: string;
  title: string;
  description: string;
  slug: string;
}

export interface User {
  name: string;
  image: string;
  username: string;
  biography: string;
}

export interface Podcast {
  slug: string;
  title: string;
  tags: string[];
  author: User;
  cover: string;
  source: string;
  thumbnail: string;
  transcript: string;
  duration: number;
  description: string;
}
