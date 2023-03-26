import React from 'react';
import Stars from './Stars';
import './Review.css'; 

const Review = ({ author, content, rating }) => {
  return (
    <div className="review">
      <h5>{author}</h5>
      <p>{content}</p>
      <Stars initialRating={rating} />
    </div>
  );
};

export default Review;
