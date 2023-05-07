import React from 'react';
import { Stack } from '@mantine/core';

import Card from '../../common/mantine/Card';
import Text from '../../common/mantine/Text';
import { Title } from '../../common/mantine/Title';

type ProfitsCardProps = React.PropsWithChildren<{ title: string }>;

const ProfitsCard = ({ title, children }: ProfitsCardProps) => {
  return (
    <Card>
      <Stack align="center">
        <Title mx={'auto'} order={3} textColor="primary">
          {title}
        </Title>
        <Text size={14} ta="center" textColor="textSecondary">
          {children}
        </Text>
      </Stack>
    </Card>
  );
};

export default ProfitsCard;
