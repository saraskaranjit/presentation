
export interface Slide {
  id: number;
  question: string;
  title: string;
  points: string[];
  funLine?: string;
  image: string;
  author: string;
  timestamp: string;
  likes: number;
  comments: number;
  shares: number;
}

export enum AppState {
  LOGIN = 'LOGIN',
  TERMS = 'TERMS',
  FEED = 'FEED',
  GOOGLE_SEARCH = 'GOOGLE_SEARCH',
  GOOGLE_RESULTS = 'GOOGLE_RESULTS',
  GOOGLE_BLOG = 'GOOGLE_BLOG'
}
