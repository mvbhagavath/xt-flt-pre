import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { getData } from "../../utils/api";
import { CHRACTER_ENDPOINT } from '../../utils/constants';
import { fetchDataSuccess, fetchDataFail } from "../../redux/actions/fetchData";
import "./styles.scss";

const Search = () => {
  const [searchText, setSearchText] = useState();
  const dispatch = useDispatch();

  return (
    <div className="search-bar">
      <input
        id="filled-search"
        label="Search field"
        placeholder="Search by name"
        type="search"
        className="search-bar__input"
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button
        type="button"
        className="search-bar__button"
        onClick={() =>
          dispatch(
            getData(
              `${CHRACTER_ENDPOINT}?name=${searchText}`,
              fetchDataSuccess,
              fetchDataFail
            )
          )
        }
      >
        Search
      </button>
    </div>
  );
};

export default Search;
