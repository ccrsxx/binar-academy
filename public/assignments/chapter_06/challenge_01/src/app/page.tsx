import { Homepage } from '@/components/sections/homepage';
import { OurServices } from '@/components/sections/our-services';
import { WhyUs } from '@/components/sections/why-us';
import { Testimonial } from '@/components/sections/testimonial';
import { FAQ } from '@/components/sections/faq';
import { CTA } from '@/components/sections/cta';

export default function Home(): JSX.Element {
  return (
    <main>
      <Homepage />
      <OurServices />
      <WhyUs />
      <Testimonial />
      <CTA />
      <FAQ />
    </main>
  );
}
