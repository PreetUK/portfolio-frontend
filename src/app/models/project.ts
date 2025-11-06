export interface Project {
  id?: number;
  title: string;
  description: string;
  imageUrl: string;
  projectUrl?: string;
  githubUrl?: string;
  technologies: string;
  startDate: string;
  endDate?: string;
  category: string;
  featured: boolean;
}