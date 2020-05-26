import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import { updateSetFilters } from "../../redux/actions/userActions";
import { fetchDataSuccess, fetchDataFail } from "../../redux/actions/fetchData";
import { generateQueryParams } from "../../utils";
import { CHRACTER_ENDPOINT } from "../../utils/constants";
import { getData } from "../../utils/api";
import "./styles.scss";

const Filters = ({ label, filterItems, id }) => {
  const { filterUpdated, setFilters, apiError } = useSelector(
    (state) => state.fetchData
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (filterUpdated && !apiError) {
      const query = `${CHRACTER_ENDPOINT}?${generateQueryParams(setFilters)}`;
      dispatch(getData(query, fetchDataSuccess, fetchDataFail));
    }
  });

  const isFilterActive = (item) => {
    const isActive = setFilters[id]?.indexOf(item) >= 0;
    return isActive;
  };

  return (
    <div className="filter-group">
      <div className="filter-group__label">{label}</div>
      {filterItems.map((item, index) => (
        <button
          type="button"
          className={`filter-group__filter ${
            isFilterActive(item) ? "active" : "inactive"
          }`}
          key={`${item}`}
          onClick={() => dispatch(updateSetFilters({ id, item }))}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

Filters.propTypes = {
  label: PropTypes.string.isRequired,
  filterItems: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.string.isRequired,
};

export default Filters;
