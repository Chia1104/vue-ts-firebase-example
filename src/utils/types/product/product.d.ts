export type Product = {
  id: string;
  img_src: string;
  name: string;
  excerpt: string;
  description: string;
  createdAt: string;
  price: number;
  category?: string[];
};
