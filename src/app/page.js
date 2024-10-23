import { ContactUs } from '@/components/contactUs/contactUs';
import { ManageMoney } from '@/components/manageMoney/manageMoney';
import Priority from '@/components/priority';
import { Services } from '@/components/services';
import { Partners } from '~/components';

export default function Home() {
  return (
    <>
      <ContactUs />
      <Partners />
      <Services />
      <Priority />
      <ManageMoney/>
    </>
  );
}
