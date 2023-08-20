import type { Assignment } from '@/lib/types/common';

export function Card({
  url,
  slug,
  title,
  description
}: Assignment): JSX.Element {
  return (
    <article className='grid' key={slug}>
      <a className='clickable p-2' href={url} target='_blank'>
        <section>
          <h4 className='text-lg text-gray-100'>{title}</h4>
          <p className='text-sm text-gray-300'>{description}</p>
        </section>
      </a>
    </article>
  );
}
