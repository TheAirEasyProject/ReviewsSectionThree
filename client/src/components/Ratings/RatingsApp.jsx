import React from 'react';
import RatingsHeader from './RatingsHeader.jsx';
import RatingCleanliness from './RatingCleanliness.jsx';
import RatingAccuracy from './RatingAccuracy.jsx';
import RatingCommunication from './RatingCommunication.jsx';
import RatingLocation from './RatingLocation.jsx';
import RatingCheckin from './RatingCheckin.jsx';
import RatingValue from './RatingValue.jsx';

const RatingsApp = ( {data} ) => {
  return (
    <div>
        <RatingsHeader data={data}/>
      <div className='ratings'>
        <RatingCleanliness data={data}/>
        <RatingAccuracy data={data}/>
        <RatingCommunication data={data}/>
        <RatingLocation data={data}/>
        <RatingCheckin data={data}/>
        <RatingValue data={data}/>
      </div>
    </div>
  )
}

export default RatingsApp;