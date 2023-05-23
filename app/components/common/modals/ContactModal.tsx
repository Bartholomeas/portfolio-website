import { Modal, ModalProps } from '@mantine/core';
import React from 'react';

export function ContactModal({ opened, onClose }: ModalProps) {
  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title="Skontaktuj się ze mną!"
      centered
      transitionProps={{
        transition: 'skew-up',
        duration: 200,
        timingFunction: 'ease-out',
      }}
    >
      ContactModal
    </Modal>
  );
}
