const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const animeSchema = new Schema({
    type: { type: String, required: true },
    episodes: [{ type: Number, required: true }],
    score: [{ type: Number, required: true }],
    start_date: [{ type: Date, default: Date.now }],
    end_date: [{ type: Date, default: Date.now }],
    rating: [{ type: Number, required: true }],
});

const Anime = mongoose.model("Anime", animeSchema);

module.exports = Anime;