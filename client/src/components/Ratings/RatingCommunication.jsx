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

  const containerStyles = {
    height: 4,
    width: 120,
    backgroundColor: "#e0e0de",
    borderRadius: 5,
    margin: 5
  }

  const fillerStyles = {
    height: 4,
    width: `${communicationData * 20}%`,
    backgroundColor: 'black',
    borderRadius: 'inherit'
  }

  return (
    <div className='ratingsBar'>
    <div className='ratingsData'>Communication</div>

    <div className='barandnumber'><span className='bar'style={containerStyles}>
      <span className='barStyle' style={fillerStyles}></span></span>

      <span className='inlinedata'>{communicationData}</span></div>
    </div>
  )
}

export default RatingCommunication
