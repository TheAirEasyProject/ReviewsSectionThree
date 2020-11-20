import React from 'react';
import ReviewsEntries from './ReviewsEntries.jsx';
import styles from '../../../styles.css';

const Reviews = ( {data} ) => {

  return (
    <div className={styles.reviews}>
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