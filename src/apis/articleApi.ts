export interface Article {
  title: string;
  content: string;
  author: string;
  views?: number;
  favor?: number;
  share?: number;
  comment?: string[];
}
