import React from 'react'
import styles from '../../../../styles.css';

const ModalReviewsList = ( {data} ) => {
  return (
    <div>
    <div >
      {data.length ? data[0].listing_reviews.map((review, key) => (
          <div className={styles.reviewsTopSixModal}>
              <img className ={styles.avatarModal} src={review.user.user_avatar}></img>
            <div className={styles.namedateModal}>
              <div className={styles.modalreviewusername}>{review.user.user_name}</div>
              <div className={styles.modalreviewdate}>{review.review.review_date}</div>
            </div>
              <div className={styles.review_textModal}>{review.review.review_text}</div>
        </div>
      )) : null}
    </div>
    </div>
  )
}

export default ModalReviewsList
