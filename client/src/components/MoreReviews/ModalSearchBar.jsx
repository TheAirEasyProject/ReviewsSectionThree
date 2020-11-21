import React from "react";
import ModalReviewsList from "./ModalReviewsList.jsx";
import styles from "../../../../styles.css";

const ModalSearchBar = ({ data, searchInput, search }) => {
  return (
    <div className={styles.searchwrapper}>
      <div className={styles.searchbar}>
        <div className={styles.searchicon}>
          <i className="fa fa-search"></i>
        </div>
        <form>
          <input
            onChange={(e) => search(e)}
            className={styles.searchinput}
            placeholder="Search reviews"
          ></input>
        </form>
      </div>
    </div>
  );
};

export default ModalSearchBar;
