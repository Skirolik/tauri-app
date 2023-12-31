import React, { useEffect, useState } from "react";
import axios from "axios";
import { useMantineTheme } from "@mantine/core";

import Data_table from "./components/Data_table";
import Progress_card from "./components/Progress_card";
import Lmap from "./components/Lmap";

function Home() {
  const theme = useMantineTheme();
  const [chartData, setChartData] = useState([]);

  const [data, setData] = useState([]);

  useEffect(() => {
    const socket = new WebSocket("ws://127.0.0.1:5000");

    socket.onopen = () => {
      // console.log("WebSocket connection established.");
    };

    socket.onmessage = (event) => {
      const newData = JSON.parse(event.data);
      setData(newData);
      // console.log("Received data:", newData);
      const lastTenData = newData.slice(-10);
      setChartData(lastTenData);
    };

    console.log("chartdata:", chartData);

    socket.onclose = () => {
      // console.log("WebSocket connection closed.");
    };

    return () => {
      socket.close();
    };
  }, []);

  // console.log("Data:", data);

  const transformedData = chartData
    .map((row) => ({
      x: row[3],
      y: Number(row[7]),
    }))
    .reverse();

  const transformerData = data.map((row) => ({
    x: row[4],
    y: Number(row[13]),
  }));

  return (
    <>
      <Data_table data={data} />
      <Progress_card data={transformerData} />

      {/* <Calender data={transformerData} /> */}
      <Lmap />

      {/* <Pie_chart data={transformerData} /> */}
    </>

    // </div>
  );
}

export default Home;
