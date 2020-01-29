var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var MangaSchema = new Schema({
    // `title` is required and of type String
    title: {
        type: String,
        required: true
    },
    chapters: {
        type: [String],
        required: true
    },
    volumes: {
        type: String,
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
var Manga = mongoose.model("Manga", MangaSchema);

// Export the Article model
module.exports = Manga;
