import { fetchDataSuccess, fetchDataFail } from "../fetchData";

describe("fetchData", () => {
  it("should return correct type for fetchDataSuccess", () => {
    const retValue = fetchDataSuccess({});
    expect(retValue.type).toEqual("FETCH_DATA_SUCCESS");
  });

  it("should return correct type for fetchDataFail", () => {
    const retValue = fetchDataFail({});
    expect(retValue.type).toEqual("FETCH_DATA_FAIL");
  });
});
