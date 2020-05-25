import { FETCH_DATA_SUCCESS, FETCH_DATA_FAIL } from "../actionTypes";

const fetchDataSuccess = (payload) => ({
  type: FETCH_DATA_SUCCESS,
  payload,
});

const fetchDataFail = (payload) => ({
  type: FETCH_DATA_FAIL,
  payload,
});

export { fetchDataSuccess, fetchDataFail };
