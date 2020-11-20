import React, { useState, useEffect } from 'react';
import styles from '../../../../styles.css';

const RatingCheckin = ( {data} ) => {

  const [checkinData, setCheckinData] = useState(0);
  const [doneLoading, setDoneLoading] = useState(false);

  if (data.length > 0 && !doneLoading) {
    setDoneLoading(true);

    let total = 0;
    data[0].listing_reviews.forEach(entry => {
      total += entry.ratings.check_in
    })
    let newTotal = (total / data[0].listing_reviews.length).toString().slice(0, 3);
    setCheckinData(Number(newTotal));
  }

  const containerStyles = {
    height: 4,
    width: 120,
    backgroundColor: "#e0e0de",
    borderRadius: 5,
    margin: 5
  }

  const fillerStyles = {
    height: 4,
    width: `${checkinData * 20}%`,
    backgroundColor: 'black',
    borderRadius: 'inherit'
  }

  return (
    <div className={styles.ratingsBar}>
    <div className={styles.ratingsData}>Check-in</div>

    <div className={styles.barandnumber}><span className={styles.bar}style={containerStyles}>
      <span className={styles.barStyle} style={fillerStyles}></span>
    </span>

    <span className={styles.inlinedata}>{checkinData}</span></div>
    </div>
  )
}

export default RatingCheckin
