import React, { useState, useEffect } from 'react'

const RatingCleanliness = ( {data} ) => {

  const [cleanData, setCleanData] = useState(0);

  useEffect(() => {
    if (data.length > 0) {
      let total = 0;
      data[0].listing_reviews.forEach(entry => {
        total += entry.ratings.cleanliness
      })
      let newTotal = (total / data[0].listing_reviews.length).toString().slice(0, 3);
      setCleanData(Number(newTotal));
    }
  });

  return (
    <div>Cleanliness {cleanData}</div>
  )
}

export default RatingCleanliness
