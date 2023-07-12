import React, { useState } from "react";
import axios from "axios";
import { Table, Pagination, Text, useMantineTheme } from "@mantine/core";

const Data_table = ({ data }) => {
  const theme = useMantineTheme();
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  //Table Code
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const getTotalPages = () => {
    return Math.ceil(data.length / rowsPerPage);
  };

  const getPaginatedData = () => {
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    const sortedData = data.slice().sort((a, b) => b[0] - a[0]); // Sort data in descending order based on row[0]

    return sortedData.slice(startIndex, endIndex);
  };

  const totalPages = getTotalPages();

  const activePageStyle = {
    backgroundImage:
      theme.colorScheme === "dark"
        ? "linear-gradient(45deg, #FFC0CB, violet)"
        : theme.colors.blue[6],
    border: 0,
  };
  return (
    <div>
      <h1>Lightning Prediction : Data</h1>
      <Table
        striped
        highlightOnHover
        withBorder
        withColumnBorders
        verticalSpacing="xs"
        data={getPaginatedData()}
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>mac_id</th>

            <th>Date and Time</th>
            <th>Static Measurement</th>
            <th>Radio Frequency</th>
            <th>Lightning Prediction</th>
            <th>Weather Status</th>
            <th>Alert</th>

            {/* Add more column headers as needed */}
          </tr>
        </thead>
        <tbody>
          {getPaginatedData().map((row) => (
            <tr key={row[0]}>
              <td>{row[0]}</td>
              <td>{row[1]}</td>
              <td>{row[3]}</td>
              <td>{row[4]}</td>
              <td>{row[5]}</td>
              <td>{row[6]}</td>
              <td>{row[8]}</td>
              <td>{row[7]}</td>
              {/* Render additional row data as needed */}
            </tr>
          ))}
        </tbody>
      </Table>
      {totalPages > 1 && (
        <Pagination
          total={totalPages}
          value={currentPage}
          onChange={handlePageChange}
          size="sm"
          siblings={2}
          limit={1}
          boundaries={1}
          position="right"
          style={{ marginTop: "20px" }}
          styles={(currentTheme) => ({
            control: {
              "&[data-active]": activePageStyle,
            },
          })}
        />
      )}
      {data.length === 0 && <Text>No data available.</Text>}
    </div>
  );
};

export default Data_table;
