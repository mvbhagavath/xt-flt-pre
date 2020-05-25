import { sortByID, updateSetFilters } from "../userActions";

describe("userActions", () => {
  it("should return correct type for sortByID", () => {
    const retValue = sortByID(1);
    expect(retValue.type).toEqual("SORT_BY_ID");
  });

  it("should return correct type for updateSetFilters", () => {
    const retValue = updateSetFilters({});
    expect(retValue.type).toEqual("UPDATE_SET_FILTERS");
  });
});
