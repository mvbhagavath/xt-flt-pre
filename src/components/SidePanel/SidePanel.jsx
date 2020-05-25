import React from "react";
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
const SidePanel = () => (
  <div className="side-panel">
    {filters.map((filter, index) => (
      <Filters key={filter.id} {...filter} />
    ))}
  </div>
);

export default SidePanel;
