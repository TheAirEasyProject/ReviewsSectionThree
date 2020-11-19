import React from 'react'
import RatingsApp from '../Ratings/RatingsApp.jsx';

const ModalReviews = ( {data} ) => {
  return (
    <div className='modalreviews'>
      <div className='modalreviewsheader'>
        <p className='modalp'><i className="fa fa-star" id='staricon'></i> {data.length > 0 && data[0].listing_rating} ({data.length > 0 && data[0].listing_reviews.length} Reviews)</p>
      </div>

      {/* <RatingsApp data={data}/> */}
      {/* <div className="modalreviews__content">

        <div className="modalreviews__box">
          <div className="modalreviews__box__left">Cleanliness</div>
          <div className="modalreviews__box__right">
            <div className="modalreviews__box__right__bar"></div>
            <div className="modalreviews__box__right__rating">4.7</div>
          </div>
          </div>

      </div> */}
    </div>
  )
}

export default ModalReviews
