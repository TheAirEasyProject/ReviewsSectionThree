import React from 'react'

const RatingsHeader = ( {data} ) => {

  return (
  <div className='header'><h3>⭐ {data.length > 0 && data[0].listing_rating} ({data.length > 0 && data[0].listing_reviews.length} Reviews)</h3></div>
  )
}

export default RatingsHeader
