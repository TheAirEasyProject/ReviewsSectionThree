import React, { useState, useEffect } from 'react';
import Ratings from './Ratings.jsx';
import Reviews from './Reviews.jsx';
import axios from 'axios';

export const reviewsContext = React.createContext();

const ReviewsApp = () => {
  const [reviewsData, setReviewsData] = useState([]);

  useEffect(() => {
    axios
      .get('/reviews')
      .then(res => setReviewsData(res.data))
      .catch(err => console.log(err))
  }, []);

  return (
    <div>
      <Ratings />
      <reviewsContext.Provider value={reviewsData.slice(0, 6)}>
        <Reviews />
      </reviewsContext.Provider>
    </div>
  )
};

export default ReviewsApp;