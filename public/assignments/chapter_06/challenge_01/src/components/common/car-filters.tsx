import { useRef } from 'react';
import { useCar } from '@/lib/context/car-context';
import type { FormEvent } from 'react';

export function CarFilters(): JSX.Element {
  const { filterCars, resetCars } = useCar();

  const filterFormRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const formObject = Object.fromEntries(formData.entries());

    const parsedFormObject = Object.entries(formObject).reduce(
      (acc, [key, value]) => {
        let parsedValue: unknown = value;

        if (key === 'totalPassengers')
          parsedValue = parsedValue ? +parsedValue : null;

        return {
          ...acc,
          [key]: parsedValue
        };
      },
      {} as Parameters<typeof filterCars>[0]
    );

    filterCars(parsedFormObject);
  };

  const handleReset = (): void => {
    resetCars();
    filterFormRef.current?.reset();
  };

  return (
    <form
      id='form'
      ref={filterFormRef}
      className='search-car__options'
      onSubmit={handleSubmit}
    >
      <div className='search-car__filter'>
        <label htmlFor='driverType' className='form-label'>
          Tipe Driver
        </label>
        <select
          required
          id='driverType'
          name='driverType'
          className='form-select'
        >
          <option value='' disabled selected hidden>
            Pilih Tipe Driver
          </option>
          <option value='1'>Dengan Sopir</option>
          <option value='2'>Tanpa Sopir (Lepas Kunci)</option>
        </select>
      </div>
      <div className='search-car__filter'>
        <label htmlFor='date' className='form-label'>
          Pilih Tanggal
        </label>
        <div className='form-control position-relative'>
          <input
            required
            id='date'
            type='date'
            name='date'
            placeholder='Pilih Tanggal'
          />
          <img src='assets/icon/date.svg' alt='Date' />
        </div>
      </div>
      <div className='search-car__filter'>
        <label htmlFor='pickUpTime' className='form-label'>
          Pilih Waktu Jemput
        </label>
        <div className='form-control position-relative'>
          <select
            required
            id='pickUpTime'
            name='pickUpTime'
            className='form-select'
          >
            <option value='' disabled selected hidden>
              Pilih Waktu
            </option>
            <option value='08:00'>08:00 WIB</option>
            <option value='09:00'>09:00 WIB</option>
            <option value='10:00'>10:00 WIB</option>
            <option value='11:00'>11:00 WIB</option>
            <option value='12:00'>12:00 WIB</option>
          </select>
          <img src='assets/icon/clock.svg' alt='Clock' />
        </div>
      </div>
      <div className='search-car__filter'>
        <label htmlFor='totalPassengers' className='form-label'>
          Jumlah Penumpang (optional)
        </label>
        <div className='form-control position-relative'>
          <input
            id='totalPassengers'
            type='number'
            className='form-control'
            name='totalPassengers'
            placeholder='Jumlah Penumpang'
          />
          <img src='assets/icon/group.svg' alt='Group' />
        </div>
      </div>
      <button type='submit' className='btn btn-success'>
        Cari Mobil
      </button>
      <button
        type='button'
        id='clear-btn'
        className='btn btn-danger'
        onClick={handleReset}
      >
        Clear
      </button>
    </form>
  );
}
