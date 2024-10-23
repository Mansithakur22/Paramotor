import { ContactUs } from '@/components/contactUs/contactUs';
import { FAQ } from '@/components/faq/faq';
import { Footer } from '@/components/footer/footer';
import Header from '@/components/header/header';
import { HeroSection } from '@/components/heroSection/heroSection';
import { ManageMoney } from '@/components/manageMoney/manageMoney';
import { OurGoal } from '@/components/ourGoal/ourGoal';
import { OurPriority } from '@/components/ourPriority/ourPriority';
import Priority from '@/components/priority';
import { Services } from '@/components/services';
import { WhyChooseParamotor } from '@/components/whyChooseParamotor/whyChooseParamotor';
import { OurProduct, Partners } from '~/components';

export default function Home() {
  return (
    <>
    <Header/>
      <HeroSection />
      <Partners />
      <Services />
      <Priority />
      <OurProduct />
      <WhyChooseParamotor/>
      <OurGoal/>
      <ManageMoney/>
      <OurPriority/>
      <FAQ/>
      <ContactUs/>
      <Footer/>
    </>
  );
}
