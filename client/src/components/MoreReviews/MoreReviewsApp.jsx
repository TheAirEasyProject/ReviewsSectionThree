import React, { useState, useEffect } from "react";
import MoreReviewsButton from "./MoreReviewsButton.jsx";
import styles from "../../../../styles.css";

const MoreReviewsApp = ({ data }) => {
  return (
    <div className={styles.buttontest}>
      <MoreReviewsButton data={data} />
    </div>
  );
};

export default MoreReviewsApp;
