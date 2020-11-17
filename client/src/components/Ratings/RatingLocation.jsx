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

  const containerStyles = {
    height: 4,
    width: 120,
    backgroundColor: "#e0e0de",
    borderRadius: 5,
    margin: 5
  }

  const fillerStyles = {
    height: 4,
    width: `${locationData * 20}%`,
    backgroundColor: 'black',
    borderRadius: 'inherit'
  }

  return (
    <div className='ratingsBar'>
    <div className='ratingsData'>Location</div>
    <div className='barandnumber'><span className='bar'style={containerStyles}><span className='barStyle' style={fillerStyles}></span></span><span className='inlinedata'>{locationData}</span></div>
    </div>
  )
}

export default RatingLocation
