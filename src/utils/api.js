import axios from "axios";

import { API_URL, CHRACTER_ENDPOINT, TIMEOUT_SECS } from "./constants";

const api = axios.create({
  method: "get",
  baseURL: API_URL,
  timeout: TIMEOUT_SECS,
});

/**
 * getData - method to handle the api calls
 * @param {string} endpoint 
 * @param {function} onSuccess 
 * @param {function} onFail 
 */
const getData = (endpoint = CHRACTER_ENDPOINT, onSuccess, onFail) => (
  dispatch
) => {
  api(endpoint)
    .then((response) => {
      dispatch(onSuccess(response.data));
    })
    .catch((error) => {
      dispatch(onFail(error));
    });
};

export { getData };
