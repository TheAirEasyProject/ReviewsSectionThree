import React, { useState, useEffect } from 'react';
import RatingsApp from './Ratings/RatingsApp.jsx';
import Reviews from './Reviews.jsx';
import axios from 'axios';

const ReviewsApp = () => {
  const [listingData, setlistingData] = useState([]);

  useEffect(() => {
    let id = Math.floor(Math.random() * 100) + 1 // Random Test ids
    axios
      .get(`listings/${id}/reviews`)
      .then(res => setlistingData(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <RatingsApp data={listingData}/>
      <Reviews data={listingData}/>
    </div>
  );
};

export default ReviewsApp;
