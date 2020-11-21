const db = require("../database/mongoose/mongoose.js");

module.exports = {
  getOne: (req, res) => {
    const request = req.params.id;
    db.Listing.find({ listing_id: request }, (err, data) => {
      if (err) {
        console.log("Error getting data from Mongo");
        res.end();
      } else {
        res.json(data);
      }
    });
  },
};
