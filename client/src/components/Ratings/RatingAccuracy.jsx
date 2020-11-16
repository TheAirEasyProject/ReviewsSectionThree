import React, { useState, useEffect } from 'react'

const RatingAccuracy = ( {data} ) => {

  const [accuracyData, setAccuracyData] = useState(0);

  useEffect(() => {
    if (data.length > 0) {
      let total = 0;
      data[0].listing_reviews.forEach(entry => {
        total += entry.ratings.accuracy
      })
      let newTotal = (total / data[0].listing_reviews.length).toString().slice(0, 3);
      setAccuracyData(Number(newTotal));
    }
  }, [data]);

  return (
    <div>
      Accuracy {accuracyData}
    </div>
  )
}

export default RatingAccuracy
