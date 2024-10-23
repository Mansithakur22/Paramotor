import { HeroSection } from '@/components/heroSection/heroSection';
import { OurGoal } from '@/components/ourGoal/ourGoal';
import Priority from '@/components/priority';
import { Services } from '@/components/services';
import { OurProduct, Partners } from '~/components';

export default function Home() {
  return (
    <>
      <HeroSection />
      <Partners />
      <Services />
      <Priority />
      <OurProduct />
      <OurGoal/>
    </>
  );
}
