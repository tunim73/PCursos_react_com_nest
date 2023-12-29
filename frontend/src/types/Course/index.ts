export interface Categories {
  id: string | undefined;
  category: string;
}

export interface Course {
  id: number;
  title: string;
  description: string;
  image: string;
  categories: Categories[];
}
