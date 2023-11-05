export function WhyUs(): JSX.Element {
  return (
    <section id='why-us' className='container'>
      <h2 className='fw-bold'>Why Us?</h2>
      <p>Mengapa harus pilih Binar Car Rental?</p>
      <section className='why-us__card-container'>
        {whyUsData.map(({ icon, title, description }, index) => (
          <article className='why-us__card' key={index}>
            <img src={icon} alt={title} />
            <h3 className='fw-semibold'>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </section>
    </section>
  );
}

const whyUsData = [
  {
    title: 'Mobil Lengkap',
    description:
      'Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat',
    icon: 'assets/icon/like.svg'
  },
  {
    title: 'Harga Murah',
    description:
      'Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain',
    icon: 'assets/icon/bookmark.svg'
  },
  {
    title: 'Layanan 24 Jam',
    description:
      'Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu',
    icon: 'assets/icon/like.svg'
  },
  {
    title: 'Sopir Professional',
    description:
      'Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu',
    icon: 'assets/icon/like.svg'
  }
] as const;
