import React from "react";
import RatingsHeader from "./RatingsHeader.jsx";
import RatingCleanliness from "./RatingCleanliness.jsx";
import RatingAccuracy from "./RatingAccuracy.jsx";
import RatingCommunication from "./RatingCommunication.jsx";
import RatingLocation from "./RatingLocation.jsx";
import RatingCheckin from "./RatingCheckin.jsx";
import RatingValue from "./RatingValue.jsx";
import styles from "../../../../styles.css";

const RatingsApp = ({ data }) => {
  return (
    <div>
      <RatingsHeader data={data} />
      <div className={styles.ratings}>
        <RatingCleanliness className={styles.clean} data={data} />
        <RatingAccuracy className={styles.accuracy} data={data} />
        <RatingCommunication className={styles.communication} data={data} />
        <RatingLocation className={styles.location} data={data} />
        <RatingCheckin className={styles.checkin} data={data} />
        <RatingValue className={styles.value} data={data} />
      </div>
    </div>
  );
};

export default RatingsApp;
