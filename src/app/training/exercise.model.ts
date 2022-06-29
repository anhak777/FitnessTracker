export interface Exercise {
  id: string;
  name: string;
  duration: number;
  calories: number;
  date?: number | Date;
  state?: 'completed' | 'cancelled' | null;
}
