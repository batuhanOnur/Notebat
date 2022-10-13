import React,{ useState} from 'react'
import { AppShell,Navbar,Header,useMantineTheme,MediaQuery,Burger,ScrollArea,Text,Group,ThemeIcon} from '@mantine/core';
import NavbarList from '../components/layout/NavbarList'
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import IconProvider from '../icons/IconProvider'

const HomePage = () => {

  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  const id = useSelector((state: RootState) => state.persistedReducer.id)

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
          <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">
            <NavbarList userId={id}/>
          </Navbar.Section>
        </Navbar>
      }
      header={
        <Header height={70} p="md">
          <div style={{ display: 'flex', alignItems: 'center', height: '100%'}}>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>
            <Group position="apart">
              <div className="flex">
              <ThemeIcon>
                <IconProvider icon="book"/>
              </ThemeIcon>
              <Text color="white" size="lg" weight={700} className="ml-2">NoteBat</Text>
              </div>
              <ThemeIcon color="gray" size="md" className="cursor-pointer">
                <IconProvider icon="bulb"/>
              </ThemeIcon>
            </Group>
          </div>
        </Header>
      }
    >
      <Outlet />
    </AppShell>
  )
}

export default HomePage