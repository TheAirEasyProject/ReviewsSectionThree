import React, { useState } from 'react';
import Average from './Average.jsx';
import Cleanliness from './Cleanliness.jsx';
import Communication from './Communication.jsx';
import Accuracy from './Accuracy.jsx';
import Location from './Location.jsx';
import Checkin from './Checkin.jsx';
import Value from './Value.jsx';
import { reviewsContext } from '../ReviewsApp.jsx';

const Ratings = () => {

  return (
    <div>
      <Average />
    <div className='totalReviews'>
      <Cleanliness />
      <Accuracy />
      <Communication />
      <Location />
      <Checkin />
      <Value />
    </div>
    </div>
  )
}

export default Ratings;