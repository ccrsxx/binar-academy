import Link from 'next/link';

export function CTA(): JSX.Element {
  return (
    <section id='cta' className='container'>
      <div className='cta__banner'>
        <h2 className='fw-bold'>Sewa Mobil di (Lokasimu) Sekarang</h2>
        <p className='cta__description'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Link href='/search' className='btn btn-success'>
          Mulai Sewa Mobil
        </Link>
      </div>
    </section>
  );
}
