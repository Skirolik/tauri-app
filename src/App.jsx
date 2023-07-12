import { useState } from "react";
import {
  AppShell,
  Burger,
  Group,
  MantineProvider,
  Navbar,
  Text,
  ActionIcon,
  Header,
  MediaQuery,
} from "@mantine/core";
import { CiDark, CiLight } from "react-icons/ci";

import { createStyles, useMantineTheme } from "@mantine/core";
import { MemoryRouter, NavLink, Route, Routes } from "react-router-dom";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";

import Home from "./Home";
import Login from "./Login";
import RegistrationPage from "./components/Regestration";
import Forgot_password from "./components/Forgot_password";
import confirmation from "./components/confirmation";
import Calender from "./components/Calender";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Perform login logic here...
    setLoggedIn(true);
  };

  const handleLogout = () => {
    // Perform logout logic here...
    setLoggedIn(false);
  };

  const views = [
    { path: "/", name: "Home", component: Home },
    {
      path: "/registration",
      name: "Registration Page",
      component: RegistrationPage,
      exact: true,
    },
    {
      path: "/login",
      name: "Login Page",
      component: Login,
      exact: true,
    },
    {
      path: "/passwordreset",
      name: "password Reset",
      component: Forgot_password,
      exact: true,
    },
    {
      path: "/passwordreset",
      name: "password Reset",
      component: Forgot_password,
      exact: true,
    },
  ];

  // mobile nav
  const [opened, setOpened] = useState(false);
  const defaultColorScheme = "dark";
  console.log(defaultColorScheme);
  const [colorScheme, setColorScheme] = useState(defaultColorScheme);

  const toggleColorScheme = (value) => {
    const newValue = value || (colorScheme === "dark" ? "light" : "dark");
    setColorScheme(newValue);
  };

  // custom styles
  const useStyles = createStyles((theme) => ({
    NavLink: {
      display: "block",
      width: "100%",
      padding: theme.spacing.md,
      marginTop: "5px",
      borderRadius: theme.radius.md,
      color: colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
      textDecoration: "none",
      "&:hover": {
        backgroundColor:
          colorScheme === "dark"
            ? theme.colors.violet[4]
            : theme.colors.blue[2],
        color: colorScheme === "dark" ? "white" : "white",
      },
    },
    NavLinkActive: {
      backgroundColor:
        colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2],
    },
  }));

  const { classes } = useStyles();

  return (
    <MantineProvider
      theme={{ colorScheme: colorScheme, fontFamily: "Open Sans, sans-serif" }}
      withGlobalStyles
    >
      <MemoryRouter>
        <AppShell
          padding="md"
          navbarOffsetBreakpoint="sm fixed"
          navbar={
            <Navbar
              width={{ sm: 200 }}
              padding="xs"
              hidden={!opened}
              hiddenBreakpoint="sm"
            >
              {views.map((view, index) => (
                <NavLink
                  align="left"
                  to={view.path}
                  key={index}
                  onClick={() => setOpened(false)}
                  className={`${classes.NavLink} ${classes.NavLinkActive}`}
                >
                  <Group>
                    <Text>{view.name}</Text>
                  </Group>
                </NavLink>
              ))}
            </Navbar>
          }
          header={
            <Header height={70} padding="md">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                  <Burger
                    opened={opened}
                    onClick={() => setOpened((o) => !o)}
                    size="sm"
                    color={useMantineTheme().colors.gray[6]}
                    mr="xl"
                  />
                </MediaQuery>
                <div style={{ marginLeft: "auto" }}>
                  <Text
                    style={{
                      fontSize: "xl",
                      fontWeight: "bold",
                      textAlign: "center",
                      color: colorScheme === "dark" ? "white" : "Black",
                    }}
                  >
                    MANAV ENERGY: LMAS
                  </Text>
                </div>

                <div style={{ marginLeft: "auto" }}>
                  <ActionIcon
                    variant="outline"
                    onClick={() => toggleColorScheme()}
                    size={30}
                    color={"dark" ? "yellow" : "blue"}
                  >
                    {colorScheme === "dark" ? <CiLight /> : <CiDark />}
                  </ActionIcon>
                </div>
              </div>
            </Header>
          }
          styles={(theme) => ({
            main: {
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[8]
                  : theme.colors.gray[0],
            },
          })}
        >
          <Routes>
            {/* <Route path="/registration" element={<RegistrationPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/passwordreset" element={<Forgot_password />} /> */}
            {/* {!loggedIn && (
              <Route exact path="/" element={<Login onLogin={handleLogin} />} />
            )} */}
            {views.map((view, index) => (
              <Route
                key={index}
                exact={view.exact}
                path={view.path}
                element={<view.component />}
              />
            ))}
          </Routes>
          {/* {!loggedIn && <Login onLogin={handleLogin} />}
          {loggedIn && <Button onClick={handleLogout}>Logout</Button>} */}
        </AppShell>
      </MemoryRouter>
    </MantineProvider>
  );
}

export default App;
