import React, { useState } from "react";
import { useDispatch } from "react-redux";

import "./styles.scss";

import { sortByID } from "../../redux/actions/userActions";

const Sort = () => {
  const dispatch = useDispatch();
  return (
    <div className="sort">
      <span className="sort__label">Sort By ID</span>
      <button
        type="button"
        className="sort__button"
        onClick={() => dispatch(sortByID(1))}
      >
        Asc
      </button>
      <button
        type="button"
        className="sort__button"
        onClick={() => dispatch(sortByID(-1))}
      >
        Desc
      </button>
    </div>
  );
};

export default Sort;
