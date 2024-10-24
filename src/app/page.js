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
  ReviewSection,
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
      <OurProduct />
      <OurGoal />
      <ManageMoney />
      <WhyChooseParamotor />
      <ReviewSection />
      <OurPriority />
      <Faq />
      <ContactUs />
      <Footer />
    </>
  );
}
