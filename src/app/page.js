import { ContactUs } from '@/components/contactUs/contactUs';
import { FAQ } from '@/components/faq/faq';
import { Footer } from '@/components/footer/footer';
import { HeroSection } from '@/components/heroSection/heroSection';
import { ManageMoney } from '@/components/manageMoney/manageMoney';
import { OurGoal } from '@/components/ourGoal/ourGoal';
import { OurPriority } from '@/components/ourPriority/ourPriority';
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
      <OurPriority/>
      <ManageMoney/>
      <FAQ/>
      <ContactUs/>
      <Footer/>
    </>
  );
}
