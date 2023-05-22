import React from 'react';

import { SimpleGrid, Stack } from '@mantine/core';

import {
  IconAward,
  IconCpu,
  IconHeart,
  IconMaximize,
  IconNavigation,
  IconTrendingUp,
} from '@tabler/icons-react';

import { SectionHeading } from '../../common/core/SectionHeading';
import { BenefitsBox } from './BenefitsBox';

export function BenefitsSection() {
  return (
    <section>
      <Stack mih="50vh" spacing={64}>
        <SectionHeading
          title="Zyskujesz szereg korzyści"
          subtext="Co do czego masz pewność?"
          centered
        />

        <SimpleGrid
          cols={1}
          breakpoints={[
            { minWidth: 'sm', cols: 2 },
            { minWidth: 'md', cols: 3 },
          ]}
          spacing={64}
          verticalSpacing={64}
        >
          <BenefitsBox
            title="Wydajność"
            content="Wszystkie moje projekty są wydajne i super szybkie, masz moje zapewnienie co do jej bezbłędnego szybkiego działania."
            icon={IconCpu}
          />
          <BenefitsBox
            title="SEO"
            content="Podczas procesu tworzenia dbam o to, aby kod był jak najbardziej nastawiony na SEO. Struktura strony oraz frazy budowane są tak, aby przeglądarki jak najchętniej pokazywały stronę w pierwszych wynikach."
            icon={IconTrendingUp}
          />
          <BenefitsBox
            title="Responsywność"
            content="Każdy mój projekt bezbłędnie bedzie się wyświetlał na każdym rozmiarze ekranu, od małych telefonów po duże monitory."
            icon={IconMaximize}
          />
          <BenefitsBox
            title="Dostępność"
            content="Projekty tworzę tak, aby każdy użytkownik mógł z nich w pełni korzystać, niezależnie od przeszkód."
            icon={IconNavigation}
          />
          <BenefitsBox
            title="Niepowtarzalność"
            content="Do każdego projektu podchodzę z nowymi pomysłami. Dzięki temu masz pewność, że Twoja strona będzie unikalna."
            icon={IconAward}
          />
          <BenefitsBox
            title="User Experience"
            content="Dobre wrażenia z korzystania ze strony bądź aplikacji to klucz do tego, aby użytkownicy do niej wracali. Takie też są strony tworzone przeze mnie!"
            icon={IconHeart}
          />
        </SimpleGrid>
      </Stack>
    </section>
  );
}
