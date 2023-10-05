import { useDisclosure } from '@mantine/hooks';

import {
  IconBrandDiscord,
  IconBrandGithub,
  IconBrandLinkedin,
  IconPhone,
} from '@tabler/icons-react';

import { ActionIcon, Burger, Drawer, Group, Stack } from '../../mantine';
import { Button } from '../../mantine/Button';
import { Image } from '../../mantine/Image';
import { Link } from '../../special/Link';

import { headerLinks } from './constants';
import { useHeaderStyles } from './useHeaderStyles';

import { routes } from '@/misc/routes';
import { openContactModal, useModalStyles } from '@/utils/modalsHandler';

export function HeaderMobile() {
  const [opened, { toggle, close }] = useDisclosure(false);

  const { classes } = useHeaderStyles();
  const { classes: modalClasses } = useModalStyles();

  const items = headerLinks.map((link) => (
    <Link key={link.label} href={link.link}>
      {link.label}
    </Link>
  ));

  return (
    <Group
      align="center"
      position="apart"
      w="100%"
      className={classes.showMobile}
    >
      <Link href={routes.home}>
        <Image
          src="/Logo_color.svg"
          alt="Moje logo, litera B o finezyjnych kształtach"
          height={50}
          width={50}
          py={6}
          sx={{ objectFit: 'contain' }}
        />
      </Link>

      <Burger
        opened={opened}
        onClick={toggle}
        size="sm"
        className={classes.burger}
        aria-label="Przycisk menu otwierający panel nawigacji."
      />

      <Drawer
        opened={opened}
        onClose={close}
        position="top"
        withCloseButton={false}
        zIndex={999}
        transitionProps={{
          transition: 'skew-up',
          duration: 200,
          timingFunction: 'ease-out',
        }}
        classNames={{
          content: classes.drawerContent,
          body: classes.drawerBody,
          header: classes.drawerHeader,
        }}
      >
        <Stack h="100%" justify="space-between">
          <Stack
            onClick={() => close()}
            align="center"
            justify="center"
            spacing={32}
            h="100%"
            w="100%"
          >
            {items}

            <Button
              variant="outline"
              color="primary"
              aria-label="Telefon otwierający modal z możliwością kontaktu."
              leftIcon={<IconPhone size={16} />}
              onClick={() =>
                openContactModal({
                  title: modalClasses.title,
                  content: modalClasses.body,
                  header: modalClasses.header,
                  overlay: modalClasses.overlay,
                })
              }
            >
              Kontakt
            </Button>
          </Stack>
          <HeaderSocialsGroup />
        </Stack>
      </Drawer>
    </Group>
  );
}
function HeaderSocialsGroup() {
  const { classes } = useHeaderStyles();

  return (
    <Group w="100%" position="apart" align="center" px={16}>
      <ActionIcon
        className={classes.icon}
        component="a"
        href={routes.linkedin}
        target="_blank"
        aria-label="Ikona przenosząca do mojego profilu linkedin"
      >
        <IconBrandLinkedin size={32} />
      </ActionIcon>
      <ActionIcon
        className={classes.icon}
        component="a"
        href={routes.github}
        target="_blank"
        aria-label="Ikona przenosząca do mojego profilu github"
      >
        <IconBrandGithub size={32} />
      </ActionIcon>
      <ActionIcon
        className={classes.icon}
        component="a"
        href={routes.discord}
        target="_blank"
        aria-label="Ikona przenosząca do mojego profilu discord"
      >
        <IconBrandDiscord size={32} />
      </ActionIcon>
    </Group>
  );
}
