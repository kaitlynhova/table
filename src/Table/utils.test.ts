import {
  calculateGridTemplateColumns,
  convertColumnCountsToPercents,
  sortColumnData,
} from "./utils";
import { TRow } from "./TTable";

describe("calculateGridTemplateColumns", () => {
  test("it calculates equal grid template columns", () => {
    expect(calculateGridTemplateColumns(2)).toEqual(["50%", "50%"]);
    expect(calculateGridTemplateColumns(4)).toEqual([
      "25%",
      "25%",
      "25%",
      "25%",
    ]);
  });
});
describe("convertColumnCountsToPercents", () => {
  test("it calculates percents from column numbers", () => {
    expect(convertColumnCountsToPercents([2, 2])).toEqual(["50%", "50%"]);
    expect(convertColumnCountsToPercents([1, 5, 4])).toEqual([
      "10%",
      "50%",
      "40%",
    ]);
  });
});

describe("sortColumnData", () => {
  const descendingRows: TRow[] = [
    {
      cells: [
        {
          cellTypeName: "string",
          value: "B",
        },
      ],
    },
    {
      cells: [
        {
          cellTypeName: "string",
          value: "A",
        },
      ],
    },
  ];

  const ascendingRows: TRow[] = [
    {
      cells: [
        {
          cellTypeName: "string",
          value: "A",
        },
      ],
    },
    {
      cells: [
        {
          cellTypeName: "string",
          value: "B",
        },
      ],
    },
  ];

  test("it sorts ascending", () => {
    // sorts based on index of 0
    expect(sortColumnData(0, "ASC", descendingRows)).toEqual(ascendingRows);
  });

  test("it sorts descending", () => {
    // sorts based on index of 0
    expect(sortColumnData(0, "DESC", ascendingRows)).toEqual(descendingRows);
  });
});
