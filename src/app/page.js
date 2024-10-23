import { HeroSection } from '@/components/heroSection/heroSection';
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
    </>
  );
}
