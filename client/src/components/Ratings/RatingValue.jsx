import React, { useState, useEffect } from 'react'

const RatingValue = ( {data} ) => {

  const [valueData, setValueData] = useState(0);

  useEffect(() => {
    if (data.length > 0) {
      let total = 0;
      data[0].listing_reviews.forEach(entry => {
        total += entry.ratings.value
      })
      let newTotal = (total / data[0].listing_reviews.length).toString().slice(0, 3);
      setValueData(Number(newTotal));
    }
  }, [data]);

  return (
    <div>
      Value {valueData}
    </div>
  )
}

export default RatingValue
