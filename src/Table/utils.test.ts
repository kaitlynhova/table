import { calculateGridTemplateColumns } from "./utils";

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
