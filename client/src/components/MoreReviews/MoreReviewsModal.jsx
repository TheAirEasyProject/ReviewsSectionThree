import React, { useState, useEffect } from 'react'
import ModalReviews from './ModalReviews.jsx';
import ModalSearchBar from './ModalSearchBar.jsx';
import ModalReviewsList from './ModalReviewsList.jsx';
import styles from '../../../../styles.css';

const MoreReviewsModal = ( {data, modal, modalState} ) => {


  return (
    <div className={styles.modalwrappermain} onClick={() => modalState(false)}>

      <div className={styles.asd}>
        <div className={styles.modalheader}>
          <button className={styles.closemodalbtn} onClick={() => modalState(false)}>x</button>
      </div>

      <div className={styles.modalcontent}>
        <div className={styles.modalbody}>
          <div className={styles.flexcontent}>
            <div className={styles.flexcontentleft}>
              <ModalReviews data={data}/>
            </div>
            <div className={styles.flexcontentright}>
              <div className={styles.modalreviewslist} >
              <ModalSearchBar data={data}/>
              </div>
              <div className={styles.scrollbar}><ModalReviewsList data={data} /></div>
                </div>
            </div>
              <div className={styles.modalfooter}>
           </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MoreReviewsModal
