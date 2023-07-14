'use client';

import { ContextModalProps, ModalsProvider } from '@mantine/modals';
import React, { FC, PropsWithChildren } from 'react';

import { ContactModal } from '../common/modals/ContactModal';

const modalsArr: Record<string, FC<ContextModalProps<any>>> = {
  contactModal: ContactModal,
};

export function AppModalsProvider({ children }: PropsWithChildren) {
  return <ModalsProvider modals={modalsArr}>{children}</ModalsProvider>;
}
