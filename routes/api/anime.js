var express = require("express");
var app = express.Router();
var Anime = require("../../models/anime");

app.post("/saveanime", (req, res) => {
  const newAnime = new Anime({
    title: req.body.title,
    episodes: req.body.episodes,
    score: req.body.score,
    start_date: req.body.start_date,
    end_date: req.body.end_date,
    rated: req.body.rated,
    firebaseUID: req.body.firebaseUID,
    mal_id: req.body.mal_id
  });
  Anime.findOne({
    mal_id: req.body.mal_id
  }).then(anime => {
    if (anime) {
      return res.status(400).json({
        error: "Anime Already Saved"
      });
    } else {
      newAnime
        .save()
        .then(anime => res.json(anime))
        .catch(err => console.log(err));
    }
  });
});

app.get("/myanime/:firebaseUID", (req, res) => {
  Anime.find({ firebaseUID: req.params.firebaseUID })
    .then(animes => {
      if (animes) {
        res.json(animes);
      } else {
        return res.status(400).json({ Error: "NO animes saved" });
      }
    })
    .catch(error => console.log(error));
});
module.exports = app;
