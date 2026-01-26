export interface Artwork {
  id: string;
  title: string;
  year: string;
  imageUrl: string;
  description?: string;
}

export interface Exhibition {
  year: string;
  title: string;
  location: string;
  type: 'Solo' | 'Group';
  imageUrl?: string;
}

export interface Article {
  id: string;
  title: string;
  publication: string;
  date: string;
  excerpt: string;
  imageUrl?: string;
}