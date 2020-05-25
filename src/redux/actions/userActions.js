import { SORT_BY_ID, UPDATE_SET_FILTERS } from "../actionTypes";

const sortByID = (payload) => ({
  type: SORT_BY_ID,
  payload,
});

const updateSetFilters = (payload) => ({
  type: UPDATE_SET_FILTERS,
  payload,
});

export { sortByID, updateSetFilters };
