import React, { useState } from "react";
import {
  Paper,
  TextInput,
  PasswordInput,
  Button,
  Text,
  Image,
  Card,
  useMantineTheme,
  Grid,
  Progress,
  Group,
  Center,
} from "@mantine/core";
import { useInputState } from "@mantine/hooks";
import { IconCheck, IconX } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import RegistrationPage from "./components/Regestration";

const Login = () => {
  const theme = useMantineTheme();
  return (
    <div>
      <Grid p="80px">
        <Grid.Col md={6} lg={3}></Grid.Col>
        <Grid.Col md={6} lg={5}>
          <Card hadow="sm" padding="lg" radius="md" withBorder>
            <Paper
              padding="lg"
              style={{
                backgroundColor:
                  theme.colorScheme === "dark"
                    ? theme.colors.dark[5]
                    : theme.colors.gray[0],
              }}
            >
              <Text fz="lg" fw={800} align="center" mb="md">
                LMAS : Login
              </Text>
              <TextInput
                label="Name"
                placeholder="Enter Your name"
                style={{ marginBottom: "1rem" }}
                //onChange={handleNameChange}
                required
              />
              <PasswordInput
                label="Password"
                placeholder="Enter Your Password"
                style={{ marginBottom: "1rem" }}
                required
              />
            </Paper>
            <Button type="submit" radius="xl" ml="xl">
              Login!
            </Button>
            <p>
              {" "}
              Dont have an account? <Link to="/registration">Register</Link>
            </p>
            <p>
              {" "}
              Forgot Password? <Link to="/passwordreset">Click Here!</Link>
            </p>
          </Card>
        </Grid.Col>
        <Grid.Col md={6} lg={2}></Grid.Col>
        <Grid.Col md={6} lg={2}></Grid.Col>
      </Grid>
    </div>
  );
};

export default Login;
