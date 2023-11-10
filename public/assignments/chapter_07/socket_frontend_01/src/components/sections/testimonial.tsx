import { CarouselItem } from '../common/carousel-item';

export function Testimonial(): JSX.Element {
  return (
    <section id='testimonial' className='container'>
      <h2 className='fw-bold'>Testimonial</h2>
      <p>Berbagai review positif dari pelanggan kami</p>
      <div id='carouselExample' className='carousel slide mx-auto'>
        <div className='carousel-inner'>
          <CarouselItem active />
          <CarouselItem />
          <CarouselItem />
        </div>
        <button
          className='carousel-control-prev'
          type='button'
          data-bs-target='#carouselExample'
          data-bs-slide='prev'
        >
          <img src='assets/icon/chevron-left.svg' alt='Previous' />
          <span className='visually-hidden'>Previous</span>
        </button>
        <button
          className='carousel-control-next'
          type='button'
          data-bs-target='#carouselExample'
          data-bs-slide='next'
        >
          <img src='assets/icon/chevron-right.svg' alt='Next' />
          <span className='visually-hidden'>Next</span>
        </button>
      </div>
    </section>
  );
}
