import { generateCloseDate } from './utils';
import type { Car } from './types/car';

export async function getCars(): Promise<Car[]> {
  const response = await fetch(
    'https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json'
  );

  const data = (await response.json()) as Car[];

  const parsedData = data.map((car) => ({
    ...car,
    availableAt: generateCloseDate(),
    image: car.image.replace('./images', 'assets/cars')
  }));

  return parsedData;
}
