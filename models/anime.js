var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var AnimeSchema = new Schema({
  // `title` is required and of type String
  title: {
    type: String,
    required: true
  },
  episodes: {
    type: [String],
    required: true
  },
  score: {
    type: String,
    required: true
  },
  start_date: {
    type: String,
    required: true
  },
  end_date: {
    type: String,
    required: true
  },
  rated: {
    type: String,
    required: true
  },
  firebaseUID: {
    type: String,
    required: true
  },
  mal_id: {
    type: String,
    required: true
  }
});

// This creates our model from the above schema, using mongoose's model method
var Anime = mongoose.model("Anime", AnimeSchema);

// Export the Article model
module.exports = Anime;
