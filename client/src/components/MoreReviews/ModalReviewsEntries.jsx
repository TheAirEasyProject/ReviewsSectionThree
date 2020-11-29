import React from 'react';
import styles from '../../../../styles.css';

const ModalReviewsEntries = ({ review, input }) => {
  const highlight = (reviewText) => {
    if (input.length > 0) {
      let newReview = [];
      let split = reviewText.toLowerCase().split(input.toLowerCase());
      for (let i = 0; i < split.length; i++) {
        newReview.push(split[i]);
        if (split[i + 1] !== undefined) {
          newReview.push(<mark>{input}</mark>);
        }
      }
      return newReview;
    }
  };

  return (
    <div className={styles.reviewsTopSixModal}>
      <img className={styles.avatarModal} src={review.user.user_avatar}></img>
      <div className={styles.namedateModal}>
        <div className={styles.modalreviewusername}>
          {review.user.user_name}
        </div>
        <div className={styles.modalreviewdate}>
          {review.review.review_date}
        </div>
      </div>
      <div className={styles.review_textModal}>
        {highlight(review.review.review_text) || review.review.review_text}
      </div>
    </div>
  );
};

export default ModalReviewsEntries;
