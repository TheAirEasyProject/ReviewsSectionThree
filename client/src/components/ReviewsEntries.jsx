import React from 'react';

const ReviewsEntries = ( {review} ) => {
  return (
    <div className='reviewsTopSix'>
      <img className ='avatar' src={review.user.user_avatar}></img>
      <div className='namedate'>
      <div className='user_name'>{review.user.user_name}</div>
      <div className='review_date'>{review.review.review_date}</div>
      </div>
      <div className='review_text'>{review.review.review_text}</div>
    </div>
  )
}
export default ReviewsEntries;