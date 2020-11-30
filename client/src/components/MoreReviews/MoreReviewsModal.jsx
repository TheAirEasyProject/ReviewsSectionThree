import React, { useState, useEffect, useCallback, useRef } from 'react';
import ModalRatings from './ModalRatings.jsx';
import ModalSearchBar from './ModalSearchBar.jsx';
import ModalReviewsList from './ModalReviewsList.jsx';
import styles from '../../../../styles.css';

const MoreReviewsModal = ({ data, modal, modalState }) => {
  const [searchInput, setSearchInput] = useState('');
  const [permData, setPermData] = useState(data[0].listing_reviews);
  const [filteredData, setFilteredData] = useState(data[0].listing_reviews);

  const search = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);

    let newData = permData.filter((currentReview) =>
      currentReview.review.review_text
        .toLowerCase()
        .includes(searchInput.toLowerCase())
    );
    setFilteredData(newData);
  };

  const escKey = useCallback((e) => {
    if (modal) {
      if (e.keyCode === 27) {
        modalState(false);
      }
    }
  }, []);

  const node = useRef();
  const handleClickOutside = (e) => {
    if (modal) {
      if (node.current.contains(e.target)) {
        return;
      }
      modalState(false);
    }
  };
  useEffect(() => {
    document.addEventListener('keydown', escKey, false);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('keydown', escKey, false);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.modalwrappermain}>
      <div className={styles.asd} ref={node}>
        <div className={styles.modalheader}>
          <button
            className={styles.closemodalbtn}
            onClick={() => modalState(false)}
          >
            x
          </button>
        </div>
        <div className={styles.modalcontent}>
          <div className={styles.modalbody}>
            <div className={styles.flexcontent}>
              <div className={styles.flexcontentleft}>
                <ModalRatings data={data} />
              </div>
              <div className={styles.flexcontentright}>
                <div className={styles.modalreviewslist}>
                  <ModalSearchBar search={search} />
                </div>
                <div className={styles.scrollbar}>
                  <ModalReviewsList data={filteredData} input={searchInput} />
                </div>
              </div>
            </div>
            <div className={styles.modalfooter}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreReviewsModal;
