import React, { useState, useEffect } from 'react'
import MoreReviewsModal from './MoreReviewsModal.jsx';

const MoreReviewsButton = ( {data} ) => {

  const [totalReviews, setTotalReviews] = useState(0);
  const [modalState, setModalState] = useState(false);

  useEffect(() => {
    if (data.length > 0) {
      setTotalReviews(data[0].listing_reviews.length)
    }
  }, [data]);

  return (
    <div className='reviewsbuttonparent'>
      <button id='startBtn'className='reviewbutton'
      onClick={() => setModalState(!modalState)}>Show all {totalReviews} reviews</button>

      { modalState ? <div className='back-drop'></div> : null }
      {modalState && <MoreReviewsModal data={data} modal={modalState} modalState={setModalState}/>}
    </div>
  )
}

export default MoreReviewsButton
