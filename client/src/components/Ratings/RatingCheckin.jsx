import React, { useState, useEffect } from 'react'

const RatingCheckin = ( {data} ) => {

  const [checkinData, setCheckinData] = useState(0);

  useEffect(() => {
    if (data.length > 0) {
      let total = 0;
      data[0].listing_reviews.forEach(entry => {
        total += entry.ratings.check_in
      })
      let newTotal = (total / data[0].listing_reviews.length).toString().slice(0, 3);
      setCheckinData(Number(newTotal));
    }
  }, [data]);

  return (
    <div>
      Check-in {checkinData}
    </div>
  )
}

export default RatingCheckin
