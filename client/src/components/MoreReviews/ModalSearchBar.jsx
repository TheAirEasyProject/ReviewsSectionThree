import React from 'react'
import ModalReviewsList from './ModalReviewsList.jsx';
import styles from '../../../../styles.css';

const ModalSearchBar = ( {data} ) => {
  return (
    <div className={styles.searchwrapper}>
      <div className={styles.searchbar}>
        <div className={styles.searchicon}><i className="fa fa-search"></i></div>
      <input className={styles.searchinput} placeholder='Search reviews'></input>
    </div>
      </div>
  )
}

export default ModalSearchBar
