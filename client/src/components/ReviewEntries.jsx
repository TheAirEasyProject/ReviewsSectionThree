import React, { useContext } from 'react';
import { reviewsContext } from './ReviewsApp.jsx';

const ReviewEntries = () => {

  const reviewsData = useContext(reviewsContext);

  return (
    <div className='reviewsTopSix'>
      {reviewsData.map(currentReview => (
        <div>
          <div><img src={currentReview.user.user_avatar}></img></div>
          <div>{currentReview.user.user_name}</div>
          <div>{currentReview.review.review_text}</div>
        </div>
      ))}
    </div>
  )
}

export default ReviewEntries;