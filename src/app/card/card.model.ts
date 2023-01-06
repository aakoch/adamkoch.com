export interface Card {
  id?: number;
  title: string;
  url: string;
  new?: boolean;
  icon: string;
  excerpt?: string;
  description: string;
  buttons: any[];
  tagline?:string;
}