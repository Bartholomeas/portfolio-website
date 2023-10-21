import { createStyles, ModalBaseStylesNames } from '@mantine/core';
import { modals } from '@mantine/modals';

export const useModalStyles = createStyles((theme) => ({
  header: {
    backgroundColor: theme.other.bg,
    borderRadius: '8px 8px 0 0',
    paddingBottom: 0,
  },

  inner: {
    height: '100%',
    minHeight: '100vh',
    maxHeight: 'auto',
    overflowY: 'auto',
  },

  body: {
    marginTop: 50,
    position: 'relative',
    overflowY: 'visible',
    backgroundColor: theme.other.bg,
    borderRadius: 8,
    border: `1px solid ${theme.fn.rgba(theme.other.white, 0.2)}`,
    backdropFilter: 'blur(10px)',
  },

  title: {
    color: theme.other.textPrimary,
    fontWeight: 700,
    fontSize: theme.fontSizes.lg,
  },

  overlay: {
    backgroundColor: theme.fn.rgba(theme.other.bg, 0.7),
    backdropFilter: 'blur(10px)',
  },
}));

export const openContactModal = (
  classNames?: Partial<Record<ModalBaseStylesNames, string>> | undefined
) => {
  modals.openContextModal({
    modal: 'contactModal',
    title: 'Użyj formularza kontaktowego!',

    centered: true,

    transitionProps: {
      transition: 'pop',
      duration: 200,
      timingFunction: 'ease-out',
    },
    classNames,
    innerProps: {},
  });
};
