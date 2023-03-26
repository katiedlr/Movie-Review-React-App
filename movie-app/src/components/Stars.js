import React, { useState } from 'react';
import './Stars.css';

const Star = ({ selected, onClick }) => (
  <span className={`star${selected ? ' selected' : ''}`} onClick={onClick}>
    ★
  </span>
);

const Stars = ({ initialRating = 0, onRatingChange }) => {
  const [rating, setRating] = useState(initialRating);

  const handleStarClick = (starIndex) => {
    const newRating = starIndex + 1;
    setRating(newRating);
    if (onRatingChange) {
      onRatingChange(newRating);
    }
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star
          key={i}
          selected={i < rating}
          onClick={() => handleStarClick(i)}
        />
      );
    }
    return stars;
  };

  return <div className="stars-container">{renderStars()}</div>;
};

export default Stars;