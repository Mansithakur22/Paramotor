import {
  ContactUs,
  Faq,
  Footer,
  Header,
  HeroSection,
  ManageMoney,
  OurGoal,
  OurPriority,
  OurProduct,
  Partners,
  Services,
  WhyChooseParamotor,
} from '~/components';

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <Partners />
      <Services />
      <OurPriority />
      <OurProduct />
      <WhyChooseParamotor />
      <OurGoal />
      <ManageMoney />
      <OurPriority />
      <Faq />
      <ContactUs />
      <Footer />
    </>
  );
}
