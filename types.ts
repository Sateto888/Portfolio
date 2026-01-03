
export interface Project {
  id: string;
  number: string;
  title: string;
  description: string;
  // Fix: Added 'Full Archive', 'Videography', and 'Editorial' to the category union type to resolve type mismatch errors in constants.ts
  category: 'Color Grading' | 'Photography' | 'Editing' | 'Full Archive' | 'Videography' | 'Look Development';
  image: string;
  videoUrl?: string;
  isGalleryLink?: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  tools?: string[];
}
