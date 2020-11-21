import React, { useState, useEffect } from "react";
import styles from "../../../../styles.css";

const RatingCommunication = ({ data }) => {
  const [communicationData, setCommunicationData] = useState(0);
  const [doneLoading, setDoneLoading] = useState(false);

  if (data.length > 0 && !doneLoading) {
    setDoneLoading(true);

    let total = 0;
    data[0].listing_reviews.forEach((entry) => {
      total += entry.ratings.communication;
    });
    let newTotal = (total / data[0].listing_reviews.length)
      .toString()
      .slice(0, 3);
    setCommunicationData(Number(newTotal));
  }

  const containerStyles = {
    height: 4,
    width: 120,
    backgroundColor: "#e0e0de",
    borderRadius: 5,
    margin: 5,
  };

  const fillerStyles = {
    height: 4,
    width: `${communicationData * 20}%`,
    backgroundColor: "black",
    borderRadius: "inherit",
  };

  return (
    <div className={styles.ratingsBar}>
      <div className={styles.ratingsData}>Communication</div>

      <div className={styles.barandnumber}>
        <span className={styles.bar} style={containerStyles}>
          <span className={styles.barStyle} style={fillerStyles}></span>
        </span>

        <span className={styles.inlinedata}>{communicationData}</span>
      </div>
    </div>
  );
};

export default RatingCommunication;
