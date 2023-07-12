import React, { useState } from "react";
import {
  Paper,
  Card,
  useMantineTheme,
  Grid,
  Group,
  Center,
  Button,
} from "@mantine/core";

import Battery_status from "./Battery_status";

const Progress_card = ({ data }) => {
  const theme = useMantineTheme();
  console.log("progress_card", data);
  const blockedStyle = {
    position: "relative",
    width: "100%",
    height: "100%",
    filter: "blur(8px)",
    borderRadius: "10px",
  };
  return (
    <div>
      <Grid p="50px" ml="20px">
        <Grid.Col md={5} lg={4}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <p>Rferm-Earth Fault </p>
            <div style={blockedStyle}>
              <Center>
                <Battery_status data={data} />
              </Center>
            </div>
            <Center>
              <Button>Purchase</Button>
            </Center>
          </Card>
        </Grid.Col>
        <Grid.Col md={5} lg={4}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <p>Total Predictions</p>
            <Center>
              <Battery_status data={data} />
            </Center>
          </Card>
        </Grid.Col>
        <Grid.Col md={5} lg={4}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <p>Battery status</p>
            <Center>
              <Battery_status data={data} />
            </Center>
          </Card>
        </Grid.Col>
      </Grid>
    </div>
  );
};

export default Progress_card;
