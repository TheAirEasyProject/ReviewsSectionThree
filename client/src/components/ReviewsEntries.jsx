import React from 'react';

const ReviewsEntries = ( {review} ) => {
  return (
    <div>
      <div><img className ='avatar' src={review.user.user_avatar}></img></div>
      <div className='user_name'>{review.user.user_name}</div>
      <div className='review_date'>{review.review.review_date.slice(4, 16)}</div>
      <div className='review_text'>{review.review.review_text}</div>
    </div>
  )
}
export default ReviewsEntries;