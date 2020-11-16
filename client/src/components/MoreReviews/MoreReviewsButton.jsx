import React, { useState, useEffect } from 'react'

const MoreReviewsButton = ( {data} ) => {

  const [totalReviews, setTotalReviews] = useState(0);

  useEffect(() => {
    if (data.length > 0) {
      setTotalReviews(data[0].listing_reviews.length)
    }
  }, [data]);

  return (
    <div className='reviewsbuttonparent'>
      <button id='startBtn' className='reviewbutton'>Show all {totalReviews} reviews</button>
    </div>
  )
}

export default MoreReviewsButton
