import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import { updateSetFilters } from "../../redux/actions/userActions";
import { fetchDataSuccess, fetchDataFail } from "../../redux/actions/fetchData";
import { generateQueryParams } from "../../utils";
import { getData } from "../../utils/api";
import "./styles.scss";

const Filters = ({ label, filterItems, id }) => {
  const { filterUpdated, setFilters } = useSelector((state) => state.fetchData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (filterUpdated) {
      const query = `/character?${generateQueryParams(setFilters)}`;
      dispatch(getData(query, fetchDataSuccess, fetchDataFail));
    }
  });

  return (
    <div className="filter-group">
      <div className="filter-group__label">{label}</div>
      {filterItems.map((item, index) => (
        <button
          type="button"
          className="filter-group__filter"
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
