const mongoose = require('mongoose');
const listingData = require('./listingData.js');
const Model = require('../mongoose/mongoose.js');
const faker = require('faker');
mongoose.connect('mongodb://localhost/fecreviews');

let seedDb = (data) => {
  data.forEach(listing => {
    const currentListing = new Model.Listing(listing);

    let randomInt = () => {
      return ((Math.random() * (5 - 2)) + 2).toString().slice(0, 1);
    };

    let newReview = () => {
      return {
        'review': {
          'review_id': currentListing.listing_id,
          'review_text': faker.lorem.sentences(),
          'review_date': faker.date.past()
        },
        'user': {
          'user_name': faker.name.firstName(),
          'user_avatar': faker.image.avatar()
        },
        'ratings': {
          'ratings_average': 0,
          'cleanliness': Number(randomInt()),
          'communication': Number(randomInt()),
          'check_in': Number(randomInt()),
          'accuracy': Number(randomInt()),
          'location': Number(randomInt()),
          'value': Number(randomInt())
        }
      }
    }

    let emptyArray = [];
    let num = 1;
    const randomAmount = Math.floor(Math.random() * (200 - 30)) + 30;

    while (num <= randomAmount) {
      let currentReview = new Model.Review(newReview())

      let rating = currentReview.ratings;

      let avgRating = (rating.cleanliness + rating.communication + rating.check_in + rating.accuracy + rating.location + rating.value) / 6;

      let newAvgRating = avgRating.toString().slice(0, 3);

      currentReview.ratings.ratings_average = Number(newAvgRating);

      emptyArray.push(currentReview);
      currentReview.save(err => {
        if (err) {
        } else {
        }
      });
      num++
    }

    let total = 0;
    emptyArray.forEach(item => {
      total += item.ratings.ratings_average
    })

    let newTotal = (total / emptyArray.length).toString().slice(0, 4);

    currentListing.listing_rating =  Number(newTotal);

    currentListing.listing_reviews = emptyArray;

    currentListing.save(err => {
      if (err) {
        console.log(err);
      } else {
        console.log('IT WORKED');
      }
    });

  });
};

seedDb(listingData);