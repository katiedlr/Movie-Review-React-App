import React, { useState } from 'react';
import './Movie.css';
import ReviewForm from './ReviewForm';
import ReviewList from './ReviewList';

const Movie = ({ title, imageUrl, synopsis }) => {
  const [reviews, setReviews] = useState([]);

  const handleReviewSubmit = (review) => {
    setReviews((prevReviews) => [...prevReviews, review]);
  };

  return (
    <div className="card movie-card">
      <img src={imageUrl} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{synopsis}</p>
      </div>
      <div className="card-body">
        <h5>Reviews</h5>
        <ReviewList reviews={reviews} />
        <ReviewForm onReviewSubmit={handleReviewSubmit} />
      </div>
    </div>
  );
};

export default Movie;
