import {
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAIL,
  SORT_BY_ID,
  UPDATE_SET_FILTERS,
} from "../actionTypes";
import { sortArray } from "../../utils/arrayHelpers";
import { addRemoveFilter } from "../../utils";

const initialState = {
  data: {},
  apiError: false,
  callInprogress: true,
  setFilters: {
    species: [],
    gender: [],
    origin: [],
  },
  filterUpdated: false,
};

const fetchData = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        apiError: false,
        callInprogress: false,
        data: payload,
        filterUpdated: false,
      };
    case FETCH_DATA_FAIL:
      return {
        ...state,
        apiError: true,
        callInprogress: false,
        data: payload,
      };
    case SORT_BY_ID: {
      const {
        data: { results },
      } = state;
      const sortedResults = sortArray(results, "id", payload);
      return {
        ...state,
        data: {
          ...state.data,
          results: sortedResults,
        },
      };
    }
    case UPDATE_SET_FILTERS: {
      const { id, item } = payload;
      const updatedFilters = addRemoveFilter(state.setFilters, id, item);
      return {
        ...state,
        setFilters: updatedFilters,
        filterUpdated: true,
        apiError: false,
      };
    }
    default:
      return state;
  }
};

export default fetchData;
