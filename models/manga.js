const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mangaSchema = new Schema({
    type: { type: String, required: true },
    chapters: [{ type: Number, required: true }],
    volumes: [{ type: Number, required: true }],
    score: [{ type: Number, required: true }],
    start_date: [{ type: Date, default: Date.now }],
    end_date: [{ type: Date, default: Date.now }],
});

const Anime = mongoose.model("Manga", mangaSchema);

module.exports = Anime;