import React, { useState, useEffect } from 'react'

const MoreReviewsModal = ( {data, modal, modalState} ) => {


  return (
    <div className='modal-wrapper'
    style={{
      transform: modal ? 'translateY(0vh)' : 'translateY(-100vh)',
      opacity: modal ? '1' : '0'
      }}><div className='asd'>
      <div className='modal-header'>
      <button className='close-modal-btn' onClick={() => modalState(false)}>x</button>
      </div>
      <div className='modal-content'>
        <div className='modal-body'>
          <div className='flex-content'>
            <div className='flex-content-left'>
              <div>Flex Content Left</div>
            </div>
            <div className='flex-content-right'>
            <div>Flex Content Right</div>
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
