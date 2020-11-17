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
          <RatingCleanliness className='clean' data={data}/>
          <RatingAccuracy className='accuracy' data={data}/>
          <RatingCommunication className ='communication' data={data}/>
          <RatingLocation className='location' data={data}/>
          <RatingCheckin className='checkin' data={data}/>
          <RatingValue className='value' data={data}/>
      </div>
      </div>
  )
}

export default RatingsApp;