import { clsx } from 'clsx';

type CarouselItemProps = {
  active?: boolean;
};

export function CarouselItem({ active }: CarouselItemProps): JSX.Element {
  return (
    <div className={clsx(active && 'active', 'carousel-item')}>
      <div className='carousel-item__container'>
        <img src='assets/img/avatar.svg' alt='Avatar' />
        <div className='carousel-item__text'>
          <img
            className='carousel-item__rating'
            src='/assets/icon/five-stars.svg'
            alt='Five stars'
          />
          <p className='mb-0'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
            unde laudantium veritatis quae, debitis cupiditate ipsam quibusdam
            sequi minus, id nulla in aut accusamus beatae maiores deleniti
            quisquam est blanditiis?
          </p>
          <h3 className='fw-medium mb-0 h5'>John Doe 32, Bromo</h3>
        </div>
      </div>
    </div>
  );
}
