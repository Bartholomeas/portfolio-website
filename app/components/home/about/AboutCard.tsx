import React from 'react';
import { Stack } from '@mantine/core';

import Card from '../../common/mantine/Card';
import Text from '../../common/mantine/Text';
import { Title } from '../../common/mantine/Title';

type AboutCardProps = React.PropsWithChildren<{ title: string }>;

function AboutCard({ title, children }: AboutCardProps) {
  return (
    <Card>
      <Stack align="center">
        <Title mx="auto" order={3} textColor="primary">
          {title}
        </Title>
        <Text size={14} ta="center" textColor="textSecondary">
          {children}
        </Text>
      </Stack>
    </Card>
  );
}

export default AboutCard;
