import { formatCurrency } from '@/lib/format';
import type { Car } from '@/lib/types/car';

export function CarCard({
  id,
  year,
  model,
  image,
  capacity,
  rentPerDay,
  manufacture,
  description,
  transmission
}: Car): JSX.Element {
  return (
    <article className='search-car__car-card' key={id}>
      <div className='search-car__card-inner-container'>
        <img className='search-car__card-img' src={image} alt={manufacture} />
        <div className='search-car__card-info-container'>
          <h2 className='h6'>
            {manufacture} {model}
          </h2>
          <p className='h5 fw-bold'>{formatCurrency(rentPerDay)} / Hari</p>
          <p>{description}</p>
          <div className='search-car__card-info'>
            <img src='assets/icon/users.svg' alt='Users' />
            <p>{capacity}</p>
          </div>
          <div className='search-car__card-info'>
            <img src='assets/icon/settings.svg' alt='Settings' />
            <p>{transmission}</p>
          </div>
          <div className='search-car__card-info'>
            <img src='assets/icon/calendar.svg' alt='Calendar' />
            <p>{year}</p>
          </div>
        </div>
      </div>
      <button className='btn btn-success'>Pilih Mobil</button>
    </article>
  );
}
