const db = require('../database/mongoose/mongoose.js');

module.exports = {
  getAll: (req, res) => {
    db.find({}, (err, data) => {
      if (err) {
        console.log('Error getting data from Mongo');
        res.end();
      } else {
        res.json(data);
      }
    });
  },

  getOne: (req, res) => {
    const request = req.params.id;
    db.find({ 'review.review_id': request }, (err, data) => {
      if (err) {
        console.log('Error getting data from Mongo');
        res.end();
      } else {
        res.json(data);
      }
    });
  }
}