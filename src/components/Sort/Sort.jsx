import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import "./styles.scss";

import { sortByID } from "../../redux/actions/userActions";

const Sort = () => {
  const [activeSort, setSort] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sortByID(activeSort));
  }, [activeSort]);

  return (
    <div className="sort">
      <span className="sort__label">Sort By ID</span>
      <button
        type="button"
        className={`sort__button ${activeSort === 1 ? "active" : ""}`}
        onClick={() => setSort(1)}
      >
        Asec
      </button>
      <button
        type="button"
        className={`sort__button ${activeSort === -1 ? "active" : ""}`}
        onClick={() => setSort(-1)}
      >
        Desc
      </button>
    </div>
  );
};

export default Sort;
