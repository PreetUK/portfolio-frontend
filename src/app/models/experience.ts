export interface Experience {
  id?: number;
  company: string;
  position: string;
  description: string;
  location: string;
  startDate: string;
  endDate?: string;
  currentlyWorking: boolean;
  responsibilities: string;
}