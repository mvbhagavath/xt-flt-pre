import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const CharacterCard = ({
  id,
  name,
  status,
  gender,
  species,
  origin,
  image,
}) => (
  <div className="character-card">
    <div className="character-card__image">
      <img src={image} alt={name} />
      <div className="character-card__basic-details">
        <span className="character-card__name-id">
          {id}. {name}
        </span>
      </div>
    </div>
    <div className="character-card__info">
      <div className="character-card__other-details">
        <span
          className={`character-card__status character-card__status--${status.toLowerCase()}`}
        />
        {status}
      </div>
      <div className="character-card__other-details">
        {species} - {gender}
      </div>
      <div className="character-card__location-details">
        <span className="character-card__location-label">Origin</span>
        <span className="character-card__location">{origin.name}</span>
      </div>
    </div>
  </div>
);

CharacterCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  origin: PropTypes.shape().isRequired,
  image: PropTypes.string.isRequired,
};

export default CharacterCard;
