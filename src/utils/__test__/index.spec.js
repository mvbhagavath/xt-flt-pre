import { addRemoveFilter, generateQueryParams } from "..";

describe("Utils", () => {
  const currFilters = {
    species: ["human"],
    gender: ["male", "female"],
    origin: [],
  };
  it("should update the filters by adding new value", () => {
    const updatedFilters = addRemoveFilter(currFilters, "species", "animal");
    expect(updatedFilters.species.indexOf("animal")).toBeGreaterThanOrEqual(0);
  });

  it("should update the filters by removing the value", () => {
    const currFilters = {
      species: ["human"],
      gender: ["male", "female"],
    };
    const updatedFilters = addRemoveFilter(currFilters, "gender", "female");
    expect(updatedFilters.gender.indexOf("female")).toEqual(-1);
  });

  it("should generate Query Params", () => {
    const generatedQuery = generateQueryParams(currFilters);
    console.log(generatedQuery);
    expect(generatedQuery).toEqual("species=human|animal&gender=male|female&");
  });
});
