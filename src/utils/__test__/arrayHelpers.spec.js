import { sortArray } from "../arrayHelpers";

describe("Array Helpers", () => {
  const inputArray = [{ id: 2 }, { id: 1 }, { id: 3 }, { id: 4 }];
  it("should sort array in ascending order", () => {
    const resultArray = sortArray(inputArray, "id", 1);
    expect(resultArray[0].id).toEqual(1);
  });

  it("should sort array in descending order", () => {
    const resultArray = sortArray(inputArray, "id", -1);
    expect(resultArray[0].id).toEqual(4);
  });
});
