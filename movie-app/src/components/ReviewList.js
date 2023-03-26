import React from 'react';
import Review from './Review';

const ReviewList = ({ reviews }) => {
  console.log('reviews:', reviews);
  return (
    <div className="review-list">
      {reviews.map((review, index) => (
        <Review
          key={index}
          author={review.author}
          text={review.text}
          rating={review.rating}
        />
      ))}
    </div>
  );
};

export default ReviewList;
