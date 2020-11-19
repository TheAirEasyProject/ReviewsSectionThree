import React, { useState, useEffect } from 'react'
import MoreReviewsModal from './MoreReviewsModal.jsx';

const MoreReviewsButton = ( {data} ) => {

  const [totalReviews, setTotalReviews] = useState(0);
  const [doneLoading, setDoneLoading] = useState(false);
  const [modalState, setModalState] = useState(false);

  if (data.length > 0 && !doneLoading) {
    setDoneLoading(true);
    setTotalReviews(data[0].listing_reviews.length)
  }

  return (
    <div className='reviewsbuttonparent'>
      <button id='startBtn'className='reviewbutton'
      onClick={() => setModalState(!modalState)}>Show all {totalReviews} reviews</button>

      {modalState && <MoreReviewsModal data={data} modal={modalState} modalState={setModalState}/>}
    </div>
  )
}

export default MoreReviewsButton
