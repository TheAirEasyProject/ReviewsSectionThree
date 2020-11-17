import React, { useState, useEffect } from 'react'
import MoreReviewsButton from './MoreReviewsButton.jsx';


const MoreReviewsApp = ( {data} ) => {

  return (
    <div className='buttontest'>
      <MoreReviewsButton data={data} />
    </div>
  )
}

export default MoreReviewsApp
