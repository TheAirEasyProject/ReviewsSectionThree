import React, { useState, useEffect } from 'react'
import ModalReviews from './ModalReviews.jsx';
import ModalSearchBar from './ModalSearchBar.jsx';

const MoreReviewsModal = ( {data, modal, modalState} ) => {


  return (
    <div className='modal-wrapper'>

      <div className='asd'>
        <div className='modal-header'>
          <button className='close-modal-btn' onClick={() => modalState(false)}>x</button>
      </div>

      <div className='modal-content'>
        <div className='modal-body'>
          <div className='flex-content'>
            <div className='flex-content-left'>
              <ModalReviews data={data}/>
            </div>
            <div className='flex-content-right'>
              <ModalSearchBar />
                </div>
            </div>
              <div className='modal-footer'>
           </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MoreReviewsModal
