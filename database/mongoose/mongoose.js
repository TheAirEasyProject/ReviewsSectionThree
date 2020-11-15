const mongoose = require('mongoose');
const connectionString = 'mongodb://localhost/fecreviews';

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Mongoose is running'));

const listingSchema = new mongoose.Schema({
  listing_id: Number,
  listing_rating: Number,
  listing_reviews: Array
})

const reviewSchema = new mongoose.Schema({
  review: {
    review_id: Number,
    review_text: String,
    review_date: String,
    },
  user: {
    user_name: String,
    user_avatar: String
    },
  ratings: {
    ratings_average: Number,
    cleanliness: Number,
    communication: Number,
    check_in: Number,
    accuracy: Number,
    location: Number,
    value: Number
  }
});

const Listing = mongoose.model('Listing', listingSchema);
const Review = mongoose.model('Review', reviewSchema);

module.exports = {
  Listing,
  Review
}