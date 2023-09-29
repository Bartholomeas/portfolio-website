import { StackProps } from '@mantine/core';

import {
  IconBold,
  IconBrush,
  IconColorSwatch,
  IconEraser,
  IconPencil,
  IconRubberStamp,
  IconRuler,
} from '@tabler/icons-react';

import { Stack } from '../../mantine';

export function MacWindowGraphicTools({ ...props }: StackProps) {
  return (
    <Stack
      align="center"
      py={16}
      spacing={16}
      sx={(theme) => ({
        height: '100%',
        borderRadius: '0 0 0 8px',
        width: 40,
        backgroundColor: theme.fn.rgba(theme.other.white, 0.2),
        zIndex: 0,
      })}
      {...props}
    >
      <IconBrush />
      <IconRubberStamp />
      <IconEraser />
      <IconPencil />
      <IconRuler />
      <IconBold />
      <IconColorSwatch />
    </Stack>
  );
}
