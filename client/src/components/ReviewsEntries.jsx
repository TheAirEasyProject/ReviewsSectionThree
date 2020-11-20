import React from 'react';
import styles from '../../../styles.css';

const ReviewsEntries = ( {review} ) => {
  return (
    <div className={styles.reviewsTopSix}>
      <img className ={styles.avatar} src={review.user.user_avatar}></img>
      <div className={styles.namedate}>
      <div className={styles.user_name}>{review.user.user_name}</div>
      <div className={styles.review_date}>{review.review.review_date}</div>
      </div>
      <div className={styles.review_text}>{review.review.review_text}</div>
    </div>
  )
}
export default ReviewsEntries;