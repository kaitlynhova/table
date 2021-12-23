import {
  calculateGridTemplateColumns,
  convertTableColumnCountsToPercents,
  sortTableColumnData,
} from "./utils";
import { TTableRow } from "./TTable";

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
describe("convertTableColumnCountsToPercents", () => {
  test("it calculates percents from column numbers", () => {
    expect(convertTableColumnCountsToPercents([2, 2])).toEqual(["50%", "50%"]);
    expect(convertTableColumnCountsToPercents([1, 5, 4])).toEqual([
      "10%",
      "50%",
      "40%",
    ]);
  });
});

describe("sortTableColumnData", () => {
  const descendingRows: TTableRow[] = [
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

  const ascendingRows: TTableRow[] = [
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
    expect(sortTableColumnData(0, "ASC", descendingRows)).toEqual(
      ascendingRows
    );
  });

  test("it sorts descending", () => {
    expect(sortTableColumnData(0, "DESC", ascendingRows)).toEqual(
      descendingRows
    );
  });
});
