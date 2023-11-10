import { getCars } from '@/lib/server';
import { CarContextProvider } from '@/lib/context/car-context';
import { Homepage } from '@/components/sections/homepage';
import { SearchCar } from '@/components/sections/search-car';

export default async function Search(): Promise<JSX.Element> {
  const cars = await getCars();

  return (
    <main>
      <Homepage withButton={false} />
      <CarContextProvider cars={cars}>
        <SearchCar />
      </CarContextProvider>
    </main>
  );
}
