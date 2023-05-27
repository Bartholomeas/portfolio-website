'use client';

import React, { FC, PropsWithChildren } from 'react';

import { ContextModalProps, ModalsProvider } from '@mantine/modals';

import { ContactModal } from '../common/modals/ContactModal';

const modalsArr: Record<string, FC<ContextModalProps<any>>> = {
  contactModal: ContactModal,
};

export function AppModalsProvider({ children }: PropsWithChildren) {
  return <ModalsProvider modals={modalsArr}>{children}</ModalsProvider>;
}
