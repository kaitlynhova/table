import {
  calculateGridTemplateColumns,
  convertColumnCountsToPercents,
} from "./utils";

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
