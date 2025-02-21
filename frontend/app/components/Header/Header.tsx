import { Container, Group } from "@mantine/core"

import styles from './Header.module.scss'

const links = [
  { link: '/recipes', label: 'Recipes' },
];

const Header = ({ }) => {
  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={styles.link}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={styles.header}>
      <Container size="md" className={styles.inner}>
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>
      </Container>
    </header>
  )
}

export default Header
