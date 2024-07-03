import { ComponentType } from 'react';
import * as TablerIcons from '@tabler/icons-react';

type Props = {
  icon: string;
} & TablerIcons.TablerIconsProps;

type TablerIcon = keyof typeof TablerIcons;

export function IconComponent({ icon, ...props }: Props) {
  const iconMutated = (
    icon.startsWith('Tb') ? (icon.replace('Tb', 'Icon') as TablerIcon) : icon
  ) as TablerIcon;

  const DynamicIcon = TablerIcons[
    iconMutated
  ] as ComponentType<TablerIcons.TablerIconsProps>;
  if (DynamicIcon === undefined) return <TablerIcons.IconQuestionMark />;
  return <DynamicIcon {...props} />;
}
