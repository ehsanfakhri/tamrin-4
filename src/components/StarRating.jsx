import React, { useState } from "react";
import "./StarRating.css";

const StarRating = ({ defaultValue }) => {
  const [rating, setRating] = useState(defaultValue);

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 5; i >= 1; i--) {
      const starClass = i <= rating ? "star filled" : "star";
      const starStyle = {
        filter: `brightness(${i <= rating ? 1 : 0.4})`,
      };

      stars.push(
        <span
          key={i}
          className={starClass}
          style={starStyle}
          onClick={() => handleStarClick(i)}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="star-rating">
      <div className="stars">{renderStars()}</div>
    </div>
  );
};

export default StarRating;
