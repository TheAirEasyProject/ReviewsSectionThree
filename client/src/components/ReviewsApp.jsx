import React, { useState, useEffect } from 'react';
import Ratings from './RatingsHeader/RatingsHeader.jsx';
import Reviews from './Reviews.jsx';
import axios from 'axios';

export const reviewsContext = React.createContext();

const ReviewsApp = () => {
  const [reviewsData, setReviewsData] = useState([]);

  useEffect(() => {
    let id = Math.floor(Math.random() * 100) + 1

    axios
      .get(`listings/${id}/reviews`)
      .then(res => setReviewsData(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <reviewsContext.Provider value={reviewsData}>
        <Ratings />
        <Reviews />
      </reviewsContext.Provider>
    </div>
  );
};

export default ReviewsApp;
