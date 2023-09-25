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
        // position: 'absolute',
        top: 16, // 28 is height of mac window top bar any -8 because of paddings
        left: 8,
        height: 'calc(100% - 12px)',
        borderRadius: '0 0 0 8px',
        width: 40,
        backgroundColor: theme.fn.rgba(theme.other.white, 0.2),
        transform: 'translate(-8px,-8px)',
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
