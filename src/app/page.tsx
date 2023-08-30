import { getChapters } from '@/lib/helper';
import { Card } from '@/components/card';

export default async function Home(): Promise<JSX.Element> {
  const chapters = await getChapters();

  return (
    <main className='grid gap-4 content-start'>
      <section>
        <h2 className='font-bold text-xl'>List of the Assignments</h2>
        <p className='text-gray-300'>
          This is a list of the assignments that I have done during the Binar
          Academy.
        </p>
      </section>
      {chapters.map((assignments, index) => (
        <section className='grid gap-2' key={index}>
          <h3 className='text-lg font-bold'>Chapter {index + 1}</h3>
          <section className='layout'>
            {assignments.map((assignment) => (
              <Card {...assignment} key={assignment.slug} />
            ))}
          </section>
        </section>
      ))}
    </main>
  );
}
