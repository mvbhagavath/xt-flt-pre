import React, { useState } from "react";
import Filters from "../Filters";
import "./styles.scss";

const filters = [
  {
    label: "Species",
    filterItems: ["Human", "Animal", "Alien"],
    id: "species",
  },
  {
    label: "Gender",
    filterItems: ["Male", "Female", "unknown"],
    id: "gender",
  },
  {
    label: "Origin",
    filterItems: ["Earth", "Mars", "unknown"],
    id: "origin",
  },
];

const SidePanel = () => {
  const [isFilterOpen, setFilterState] = useState(false);
  return <div className="col-lg-2 side-panel">
    <div className="side-panel__filter-label">
      <span>Filters</span>
      <button
        className="side-panel__filter-label-icon"
        onClick={() => setFilterState(!isFilterOpen)}
      >
        {isFilterOpen ? '-' : '+'}
      </button>
    </div>
    <div className={`side-panel__filter-container ${isFilterOpen ? 'active' : '' }`}>
      {filters.map((filter) => (
        <Filters key={filter.id} {...filter} />
      ))}
    </div>
  </div>
};

export default SidePanel;
