import React, { useState, useEffect } from 'react'

const RatingLocation = ( {data} ) => {

  const [locationData, setLocationData] = useState(0);

  useEffect(() => {
    if (data.length > 0) {
      let total = 0;
      data[0].listing_reviews.forEach(entry => {
        total += entry.ratings.location
      })
      let newTotal = (total / data[0].listing_reviews.length).toString().slice(0, 3);
      setLocationData(Number(newTotal));
    }
  }, [data]);

  return (
    <div>
      Location {locationData}
    </div>
  )
}

export default RatingLocation
