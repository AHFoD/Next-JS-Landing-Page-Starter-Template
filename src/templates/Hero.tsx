import Link from 'next/link';

import { Background } from '../background/Background';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
            <a>GitHub</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Sign in</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {/* {'The modern landing page for\n'} */}
            {'Selamat datang kepada ahli baru\n'}
            <span className="text-primary-500">gigamax</span>
          </>
        }
        description={`Nama saya hanif\n saya boleh dhubungi di talian 019-xxxxx`}
        // button={
        //   <Link href="https://creativedesignsguru.com/category/nextjs/">
        //     <a>
        //       <Button xl>Download Your Free Theme</Button>
        //     </a>
        //   </Link>
        // }
      />
    </Section>
  </Background>
);

export { Hero };
