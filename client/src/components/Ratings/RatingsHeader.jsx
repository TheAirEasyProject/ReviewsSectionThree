import React from 'react';
import styles from '../../../../styles.css';

const RatingsHeader = ({ data }) => {
  return (
    <div className={styles.revheader}>
      <div>
        <i className='fa fa-star' id={styles.staricon}></i>{' '}
        {data.length > 0 && data[0].listing_rating} (
        {data.length > 0 && data[0].listing_reviews.length} Reviews)
      </div>
    </div>
  );
};

export default RatingsHeader;
