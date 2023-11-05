import { Accordion } from '../common/accordion';

export function FAQ(): JSX.Element {
  return (
    <section id='faq' className='container'>
      <div className='faq__text'>
        <h2>Frequently Asked Question</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </div>
      <div className='accordion' id='accordionExample'>
        {accordionData.map((data, index) => (
          <Accordion id={index} title={data} key={index} />
        ))}
      </div>
    </section>
  );
}

const accordionData = [
  'Berapa hari minimal sewa mobil lepas kunci?',
  'Berapa hari sebelumnya sebaiknya booking sewa mobil?',
  'Apakah ada biaya antar-jemput?',
  'Bagaimana jika terjadi kecelakaan?'
] as const;
