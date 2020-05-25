import fetchData from "../fetchData";

describe("fetchData Reducer", () => {
  it("should reduce FETCH_DATA_SUCCESS", () => {
    const action = {
      type: "FETCH_DATA_SUCCESS",
      payload: { character: "test" },
    };
    const state = fetchData({}, action);
    expect(state.data).toEqual(action.payload);
  });

  it("should reduce FETCH_DATA_FAIL", () => {
    const action = { type: "FETCH_DATA_FAIL", payload: { error: "true" } };
    const state = fetchData({}, action);
    expect(state.apiError).toBeTruthy();
  });

  it("should reduce SORT_BY_ID", () => {
    const initialState = {
      data: {
        results: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
      },
    };
    const action = { type: "SORT_BY_ID", payload: -1 };
    const state = fetchData(initialState, action);
    expect(state.data.results[0].id).toEqual(4);
  });

  it("should reduce UPDATE_SET_FILTERS", () => {
    const initialState = {
      setFilters: {
        species: [],
      },
    };
    const action = {
      type: "UPDATE_SET_FILTERS",
      payload: { id: "species", item: "human" },
    };
    const state = fetchData(initialState, action);
    expect(state.setFilters.species.length).toEqual(1);
  });

  it("should return default state if type does not match", () => {
    const initialState = {
      setFilters: {
        species: [],
      },
    };
    const action = { type: "TEST", payload: { id: "species", item: "human" } };
    const state = fetchData(initialState, action);
    expect(state.setFilters.species.length).toEqual(0);
  });
});
