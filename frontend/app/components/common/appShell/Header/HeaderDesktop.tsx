import {
  IconBrandDiscord,
  IconBrandGithub,
  IconBrandLinkedin,
  IconPhone,
} from '@tabler/icons-react';

import { ActionIcon, Group } from '../../mantine';
import { Button } from '../../mantine/Button';
import { Image } from '../../mantine/Image';
import { Link } from '../../special/Link';

import { headerLinks } from './constants';
import { useHeaderStyles } from './useHeaderStyles';

import { routes } from '@/misc/routes';

import { openContactModal, useModalStyles } from '@/utils/modalsHandler';

export function HeaderDesktop() {
  const { classes: modalClasses } = useModalStyles();
  const { classes, cx } = useHeaderStyles();

  const items = headerLinks.map((link) => (
    <Link key={link.label} href={link.link}>
      {link.label}
    </Link>
  ));

  return (
    <div className={cx(classes.desktopWrapper, classes.showDesktop)}>
      <Link
        href={routes.home}
        className={classes.logoLink}
        aria-label="Moje logo, powrót do strony głównej"
      >
        <Image
          src="/Logo_color.svg"
          alt="Moje logo, litera B o finezyjnych kształtach"
          height={45}
          width={45}
          p={8}
          sx={{ objectFit: 'contain' }}
        />
      </Link>
      <Group spacing={16} noWrap>
        {items}
      </Group>

      <Group spacing={16} position="right" noWrap>
        <ActionIcon
          className={classes.icon}
          component="a"
          href={routes.github}
          target="_blank"
          aria-label="Ikona przenosząca do mojego profilu github"
        >
          <IconBrandGithub size={18} />
        </ActionIcon>
        <ActionIcon
          className={classes.icon}
          component="a"
          href={routes.linkedin}
          target="_blank"
          aria-label="Ikona przenosząca do mojego profilu linkedin"
        >
          <IconBrandLinkedin size={18} />
        </ActionIcon>
        <ActionIcon
          className={classes.icon}
          component="a"
          href={routes.discord}
          target="_blank"
          aria-label="Ikona przenosząca do mojego profilu discord"
        >
          <IconBrandDiscord size={18} />
        </ActionIcon>
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
      </Group>
    </div>
  );
}
