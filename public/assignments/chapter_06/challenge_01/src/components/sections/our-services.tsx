export function OurServices(): JSX.Element {
  return (
    <section id='our-services' className='container'>
      <img className='img-fluid' src='assets/img/services.svg' alt='Services' />
      <section className='our-services__text'>
        <h2 className='fw-bold'>
          Best Car Rental for any kind of trip in (Lokasimu)!
        </h2>
        <p className='mt-4'>
          Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih
          murah dibandingkan yang lain, kondisi mobil baru, serta kualitas
          pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting,
          dll.
        </p>
        <ul className='our-services__list-container'>
          {servicesData.map((title, index) => (
            <li className='our-services__list-item' key={index}>
              <img src='assets/icon/checkmark.svg' alt={title} />
              <p className='m-0'>{title}</p>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}

const servicesData = [
  'Sewa Mobil Dengan Supir di Bali 12 Jam',
  'Sewa Mobil Lepas Kunci di Bali 24 Jam',
  'Sewa Mobil Jangka Panjang Bulanan',
  'Gratis Antar - Jemput Mobil di Bandara',
  'Layanan Airport Transfer / Drop In Out'
] as const;
