import React from "react";
import "./App.css";
import Table from "./Table/Table";
import { TTableData } from "./Table/TTable";
const tableData: TTableData = {
  caption: "types of rows and columns",
  columns: [
    { title: "column1", tooltipText: "tooltip Text 1" },
    { title: "column2", tooltipText: "tooltip Text 2" },
    { title: "column3", tooltipText: "tooltip Text 3" },
  ],
  rows: [
    {
      isSelected: false,
      cells: [
        {
          cellTypeName: "string",
          value: "row 1 column 1",
        },
        {
          cellTypeName: "string",
          value: "row 1 column 2",
        },
        {
          cellTypeName: "string",
          value: "row 1 column 3",
        },
      ],
    },
    {
      isSelected: false,
      cells: [
        {
          cellTypeName: "string",
          value: "row 2 column 1",
        },
        {
          cellTypeName: "string",
          value: "row 2 column 2",
        },
        {
          cellTypeName: "string",
          value: "row 2 column 3",
        },
      ],
    },
    {
      isSelected: false,
      cells: [
        {
          cellTypeName: "string",
          value: "row 3 column 1",
        },
        {
          cellTypeName: "string",
          value: "row 3 column 2",
        },
        {
          cellTypeName: "string",
          value: "row 3 column 3",
        },
      ],
    },
  ],
};
function App() {
  return (
    <div className="App">
      <Table tableData={tableData} gridColumns={["15%", "20%", "65%"]} />
    </div>
  );
}

export default App;
