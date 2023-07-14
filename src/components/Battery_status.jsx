import { useState, useEffect } from "react";

import { CircularProgressbar } from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";
import { useMantineTheme } from "@mantine/core";

const Radial_bar = ({ data }) => {
  const theme = useMantineTheme();
  console.log("Data:", data);

  const [currentMonth, setCurrentMonth] = useState("");
  const [totalCount, setTotalCount] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const calculateProgress = () => {
      const currentDate = new Date();
      const currentMonthStr = `${currentDate.getFullYear()}-${(
        currentDate.getMonth() + 1
      )
        .toString()
        .padStart(2, "0")}`;

      if (currentMonth !== currentMonthStr) {
        setCurrentMonth(currentMonthStr);
        setTotalCount(0);
        setProgress(0);
      }

      let count = 0;
      data.forEach((row) => {
        const month = parseInt(row.x.split("-")[1], 10);
        if (row.y >= 40 && currentMonthStr === row.x.substring(0, 7)) {
          count++;
        }
      });

      setTotalCount(count);
      setProgress((count / data.length) * 100);
    };

    calculateProgress();
  }, [data]);

  const progressData = [{ id: "progress", value: progress }];
  console.log(progressData);
  console.log("hi", totalCount);

  return (
    <div style={{ width: "50%", height: "50%", position: "relative" }}>
      <CircularProgressbar
        value={totalCount}
        text={totalCount}
        maxValue={2000}
        circleRatio={1}
        styles={{
          trail: {
            strokeLinecap: "initial",
            transform: "rotate(-126deg)",
            transformOrigin: "center center",
            stroke: theme.colorScheme === "dark" ? "#f4fce3" : "#a5d8ff",
          },
          path: {
            strokeLinecap: "butt",
            transform: "rotate(-126deg)",
            transformOrigin: "center center",
            stroke: theme.colorScheme === "dark" ? "#66a80f" : "#339af0",
          },
          text: {
            fill: theme.colorScheme === "dark" ? "white" : "#339af0",
          },
        }}
        strokeWidth={10}
      />
    </div>
  );
};

export default Radial_bar;
