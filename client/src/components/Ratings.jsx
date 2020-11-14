import React from 'react';

const Ratings = () => {
  return (
    <div>
    <div className='header'>
    <span className='totalReviews'>
      <h2>⭐ 4.96 (378 reviews)</h2>
    </span>
    </div>

    <div className='ratings'>
      <div className='cleanliness'>Cleanliness</div>
      <div className='cleanlinessBar'>---------- 4.9</div>

      <div className='accuracy'>Accuracy</div>
      <div className='accuracyBar'>---------- 5.0</div>

      <div className='communication'>Communication</div>
      <div className='communicationBar'>---------- 5.0</div>

      <div className='location'>Location</div>
      <div className='locationBar'>---------- 4.9</div>

      <div className='checkin'>Check-In</div>
      <div className='checkinBar'>---------- 5.0</div>

      <div className='value'>Value</div>
      <div className='valueBar'>---------- 4.9</div>
    </div>
    </div>
  )
}

export default Ratings;