import React from 'react';
import ReviewsEntries from './ReviewsEntries.jsx';

const Reviews = ( {data} ) => {

  return (
    <div className='reviews'>
      {data.length ? data[0].listing_reviews.slice(0, 6).map((review, key) => (
        <ReviewsEntries
        review = {review}
        key = {key}
        />
      )) : null}
    </div>
  )
}

export default Reviews;