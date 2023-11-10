'use client';

import { createContext, useContext, useState } from 'react';
import type { PropsWithChildren } from 'react';
import type { Car } from '../types/car';

type FilterCar = {
  date: string;
  driverType: string;
  pickUpTime: string;
  totalPassengers: number | null;
};

type CarContextType = {
  cars: Car[];
  resetCars: () => void;
  filterCars: (filters: FilterCar) => void;
};

const CarContext = createContext<CarContextType | null>(null);

export function CarContextProvider({
  cars,
  children
}: PropsWithChildren<{ cars: Car[] }>): JSX.Element {
  const [filteredCars, setFilteredCars] = useState<Car[]>(cars);

  const filterCars = ({
    date,
    pickUpTime,
    totalPassengers
  }: FilterCar): void => {
    const targetDate = new Date(`${date} ${pickUpTime}`);

    const filteredCars = cars.filter(({ available, availableAt, capacity }) => {
      if (!available) return false;

      const carAvailabilityDate = new Date(availableAt);

      const isStillAvailableByPickUpTime =
        carAvailabilityDate.getTime() >= targetDate.getTime();

      if (!isStillAvailableByPickUpTime) return false;

      const isWithinTheCarCapacity = totalPassengers
        ? capacity >= totalPassengers
        : true;

      if (!isWithinTheCarCapacity) return false;

      return true;
    });

    setFilteredCars(filteredCars);
  };

  const resetCars = (): void => setFilteredCars(cars);

  const value: CarContextType = {
    cars: filteredCars,
    resetCars: resetCars,
    filterCars: filterCars
  };

  return <CarContext.Provider value={value}>{children}</CarContext.Provider>;
}

export function useCar(): CarContextType {
  const context = useContext(CarContext);

  if (!context)
    throw new Error('useCar must be used within CarContextProvider');

  return context;
}
