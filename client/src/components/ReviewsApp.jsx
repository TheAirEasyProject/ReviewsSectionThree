import React, { useState, useEffect } from 'react';
import RatingsApp from './Ratings/RatingsApp.jsx';
import Reviews from './Reviews.jsx';
import axios from 'axios';

const ReviewsApp = () => {
  const [listingData, setlistingData] = useState([]);

  useEffect(() => {
    let id = Math.floor(Math.random() * 100) + 1
    axios
      .get(`listings/${id}/reviews`)
      .then(res => setlistingData(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <div className='main'>
      <RatingsApp data={listingData}/>
      <Reviews data={listingData}/>
      </div>
    </div>
  );
};

export default ReviewsApp;
