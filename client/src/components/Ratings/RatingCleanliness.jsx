import React, { useState, useEffect } from 'react'

const RatingCleanliness = ( {data} ) => {

  const [cleanData, setCleanData] = useState(0);
  const [doneLoading, setDoneLoading] = useState(false);

  if (data.length > 0 && !doneLoading) {
    setDoneLoading(true);

    let total = 0;
    data[0].listing_reviews.forEach(entry => {
      total += entry.ratings.cleanliness
    })
    let newTotal = (total / data[0].listing_reviews.length).toString().slice(0, 3);
    setCleanData(Number(newTotal));
  }

  const containerStyles = {
    height: 4,
    width: 120,
    backgroundColor: "#e0e0de",
    borderRadius: 5,
    margin: 5
  }

  const fillerStyles = {
    height: 4,
    width: `${cleanData * 20}%`,
    backgroundColor: 'black',
    borderRadius: 'inherit'
  }

  return (
    <div className='ratingsBar'>
    <div className='ratingsData'>Cleanliness</div>

    <div className='barandnumber'><span className='bar'style={containerStyles}><span className='barStyle' style={fillerStyles}></span></span>

    <span className='inlinedata'>{cleanData}</span></div>
    </div>
  )
}

export default RatingCleanliness