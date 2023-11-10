import Link from 'next/link';

type HomepageProps = {
  withButton?: boolean;
};

export function Homepage({ withButton = true }: HomepageProps): JSX.Element {
  return (
    <section id='homepage'>
      <div className='container homepage__container'>
        <div className='homepage__text'>
          <h1 className='fw-bold'>
            Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
          </h1>
          <p className='mt-4'>
            Selamat datang di Rent a Car. Kami menyediakan mobil kualitas
            terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
            untuk sewa mobil selama 24 jam.
          </p>
          {withButton && (
            <Link href='/search' className='btn btn-success fw-bold'>
              Mulai Sewa Mobil
            </Link>
          )}
        </div>
        <div className='homepage__car-wrapper'>
          <div className='homepage__car-container'>
            <img
              className='homepage__car img-fluid'
              src='assets/img/car.svg'
              alt='Car'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
