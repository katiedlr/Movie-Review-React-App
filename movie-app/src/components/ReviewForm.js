import React, { useState } from 'react';
import Stars from './Stars';
import './ReviewForm.css';

const ReviewForm = ({ onReviewSubmit }) => {
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    onReviewSubmit({ author, content, rating });
    setAuthor('');
    setContent('');
    setRating(0);
  };

  return (
    <form className="review-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="author">Your Name:</label>
        <input
          type="text"
          id="author"
          className="form-control"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="content">Your Review:</label>
        <textarea
          id="content"
          className="form-control"
          rows="3"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="rating">Your Rating:</label>
        <Stars
          initialRating={rating}
          onRatingChange={(newRating) => setRating(newRating)}
        />
      </div>
      <button type="submit" className="btn btn-primary">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
