import React,{ useState} from 'react'
import { AppShell, Navbar, Header,useMantineTheme,MediaQuery,Burger } from '@mantine/core';
import NavbarList from '../components/layout/NavbarList'
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

const HomePage = () => {

  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  const id = useSelector((state: RootState) => state.persistedReducer.id)

  const LogOut = () => {
     
  }
  
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
          <NavbarList userId={id}/>
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

            <button onClick={LogOut}>logut</button>
          </div>
        </Header>
      }
    >
      <Outlet />
    </AppShell>
  )
}

export default HomePage