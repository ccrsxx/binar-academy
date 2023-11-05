type AccordionProps = {
  id: number;
  title: string;
};

export function Accordion({ id, title }: AccordionProps): JSX.Element {
  const accordionId = `accordion-${id}`;

  return (
    <div className='accordion-item'>
      <h2 className='accordion-header' id='headingOne'>
        <button
          className='accordion-button collapsed'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target={`#${accordionId}`}
          aria-expanded='false'
          aria-controls={accordionId}
        >
          {title}
        </button>
      </h2>
      <div
        id={accordionId}
        className='accordion-collapse collapse'
        aria-labelledby='headingOne'
        data-bs-parent='#accordionExample'
      >
        <div className='accordion-body'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
          repellendus explicabo, dolores voluptatum blanditiis asperiores quod
          rem reprehenderit id laboriosam a perspiciatis accusamus omnis culpa
          repudiandae necessitatibus velit modi quae.
        </div>
      </div>
    </div>
  );
}
