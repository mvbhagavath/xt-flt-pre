import React from "react";
import PropTypes from "prop-types";

import CharacterCard from "../CharacterCard";
import "./styles.scss";

const CharacterList = ({ characters }) => (
  <div className="character-list">
    {characters.map((character, index) => (
      <div key={`${character}-${index}`} className="character-list__card-container col-6 col-md-3">
        <CharacterCard {...character} />
      </div>
    ))}
  </div>
);

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape(CharacterCard.propTypes))
    .isRequired,
};

export default CharacterList;
