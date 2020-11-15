import React, { useState, useEffect, useContext } from 'react';
import { reviewsContext } from '../ReviewsApp.jsx';

const Cleanliness = () => {
  const reviewsData = useContext(reviewsContext);
  const [cleanliness, setCleanliness] = useState();


  return (
    <div>Cleanliness</div>
  )
}

export default Cleanliness;