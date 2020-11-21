import React, { useState, useEffect } from "react";
import RatingsApp from "./Ratings/RatingsApp.jsx";
import Reviews from "./Reviews.jsx";
import MoreReviewsApp from "./MoreReviews/MoreReviewsApp.jsx";
import styles from "../../../styles.css";
import axios from "axios";

const ReviewsApp = () => {
  const [listingData, setlistingData] = useState([]);

  useEffect(() => {
    axios
      .get(`${window.location.pathname}reviews`)
      .then((res) => setlistingData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className={styles.main}>
        <div className={styles.topdiv}></div>
        <RatingsApp data={listingData} />
        <Reviews data={listingData} />
        <MoreReviewsApp data={listingData} />
        <div className={styles.botdiv}></div>
      </div>
    </div>
  );
};

export default ReviewsApp;
