'use client';

import { useCar } from '@/lib/context/car-context';
import { CarFilters } from '../common/car-filters';
import { CarCard } from '../common/car-card';

export function SearchCar(): JSX.Element {
  const { cars } = useCar();

  return (
    <section id='search-car'>
      <div className='container search-car__container'>
        <div className='search-car__form-container'>
          <CarFilters />
        </div>
        <section id='cars-container' className='search-car__card-container'>
          {cars.map((car) => (
            <CarCard {...car} key={car.id} />
          ))}
        </section>
      </div>
    </section>
  );
}
