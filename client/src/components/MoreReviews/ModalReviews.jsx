import React from 'react'
import RatingCleanliness from '../Ratings/RatingCleanliness.jsx';
import RatingAccuracy from '../Ratings/RatingAccuracy.jsx';
import RatingCommunication from '../Ratings/RatingCommunication.jsx';
import RatingLocation from '../Ratings/RatingLocation.jsx';
import RatingCheckin from '../Ratings/RatingCheckin.jsx';
import RatingValue from '../Ratings/RatingValue.jsx';
import styles from '../../../../styles.css';

const ModalReviews = ( {data} ) => {
  return (
    <div className={styles.modalreviews}>
      <div className={styles.modalreviewsheader}>
        <p className={styles.modalp}><i className="fa fa-star" id={styles.staricon}></i> {data.length > 0 && data[0].listing_rating} ({data.length > 0 && data[0].listing_reviews.length} Reviews)</p>
      </div>

      <div className={styles.modalreviews__content}>

        <div className={styles.modalreviews__box}>
          <div className={styles.modalreviews__box__left}></div>
            <div className={styles.modalratingslist}>
                <RatingCleanliness data={data}/>
                <div className={styles.modalratingsone}><RatingAccuracy data={data} /></div>
                <div className={styles.modalratingsone}><RatingCommunication data={data} /></div>
                <div className={styles.modalratingsone}><RatingLocation data={data} /></div>
                <div className={styles.modalratingsone}><RatingCheckin data={data} /></div>
                <div className={styles.modalratingsone}><RatingValue data={data} /></div>
            </div>
          <div className={styles.modalreviews__box__right}>
            <div className={styles.modalreviews__box__right__bar}></div>
            <div className={styles.modalreviews__box__right__rating}></div>
          </div>
          </div>

      </div>
    </div>
  )
}

export default ModalReviews
