import React, { useState } from "react";
import styles from "../../../../styles.css";
import ModalReviewsEntries from "./ModalReviewsEntries.jsx";

const ModalReviewsList = ({ data, searchInput }) => {
  return (
    <div>
      <div>
        {data.length
          ? data.map((review, key) => (
              <ModalReviewsEntries key={key} review={review} />
            ))
          : null}
      </div>
    </div>
  );
};

export default ModalReviewsList;
