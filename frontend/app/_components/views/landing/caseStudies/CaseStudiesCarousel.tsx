'use client';

import { useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

import { CaseStudiesCarouselCard } from './CaseStudiesCarouselCard';

import { Carousel } from '@/_components/common/mantine';
import { CaseStudiesItem } from '@/_types/pages';

type Props = {
  data: CaseStudiesItem[];
};
export function CaseStudiesCarousel({ data }: Props) {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  const filledData =
    data.length < 3
      ? [
          ...data,
          ...(new Array(4 - data.length).fill(null).map(() => ({
            id: null,
            uuid: crypto.randomUUID(),
            title: '',
            shortDescription: '',
            tools: [],
            mainImg: '',
          })) as unknown as CaseStudiesItem[]),
        ]
      : data;

  const slides = filledData?.map((item) => (
    <Carousel.Slide key={item.uuid}>
      <CaseStudiesCarouselCard item={item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize="40%"
      breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: 2 }]}
      loop
      slideGap="xl"
      align="start"
      slidesToScroll={mobile ? 1 : 2}
      sx={{ width: '100%' }}
    >
      {slides}
    </Carousel>
  );
}
