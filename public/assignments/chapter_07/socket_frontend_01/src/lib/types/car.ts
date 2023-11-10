export type Car = {
  id: string;
  year: number;
  model: string;
  image: string;
  capacity: number;
  available: boolean;
  rentPerDay: number;
  description: string;
  availableAt: Date;
  manufacture: string;
  transmission: 'Automatic' | 'Manual' | 'CVT';
};
