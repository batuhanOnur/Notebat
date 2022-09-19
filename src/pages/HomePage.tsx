import React,{ useState} from 'react'
import { AppShell, Navbar, Header,useMantineTheme,MediaQuery,Burger } from '@mantine/core';
import NavbarList from '../components/layout/NavbarList'

const HomePage = () => {

  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  
  return (
    <AppShell
      navbarOffsetBreakpoint="sm"
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      navbar={
        <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
          <NavbarList userId="63247443350da2989d3c5add"/>
        </Navbar>
      }
      header={
        <Header height={70} p="md">
          <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <p>Application header</p>
          </div>
        </Header>
      }
    >
      deneme
    </AppShell>
  )
}

export default HomePage