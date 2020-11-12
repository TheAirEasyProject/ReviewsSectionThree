const mongoose = require('mongoose');
const reviewsData = require('./reviewsData.js');
const Model = require('../mongoose/mongoose.js');

mongoose.connect('mongodb://localhost/fecreviews');

let seedDb = (data) => {
  console.log(data);

  data.forEach(review => {
    let currentReview = new Model(review);

    currentReview.save(err => {
      if (err) {
        console.log(err);
        return;
      } else {
        console.log('Review was saved to the database.');
        return;
      }
    });
  });
};

seedDb(reviewsData);