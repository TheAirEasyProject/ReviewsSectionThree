import React, { useState, useEffect } from 'react'

const RatingCommunication = ( {data} ) => {

  const [communicationData, setCommunicationData] = useState(0);

  useEffect(() => {
    if (data.length > 0) {
      let total = 0;
      data[0].listing_reviews.forEach(entry => {
        total += entry.ratings.communication
      })
      let newTotal = (total / data[0].listing_reviews.length).toString().slice(0, 3);
      setCommunicationData(Number(newTotal));
    }
  }, [data]);

  return (
    <div>
      Communication {communicationData}
    </div>
  )
}

export default RatingCommunication
