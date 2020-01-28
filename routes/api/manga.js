var express = require("express");
var app = express.Router();
var Manga = require("../../models/manga");

app.post("/savemanga", (req, res) => {
  const newManga = new Manga({
    title: req.body.title,
    chapters: req.body.chapters,
    volumes: req.body.volumes,
    score: req.bodys.score,
    start_date: req.body.start_date,
    end_date: req.body.end_date,
    firebaseUID: req.body.firebaseUID,
    mal_id: req.body.mal_id
  });
  Manga.findOne({
    mal_id: req.body.mal_id
  }).then(manga => {
    if (manga) {
      return res.status(400).json({
        error: "Manga Already Saved"
      });
    } else {
      newManga
        .save()
        .then(manga => res.json(manga))
        .catch(err => console.log(err));
    }
  });
});

app.get("/mymanga/:firebaseUID", (req, res) => {
  Manga.find({ firebaseUID: req.params.firebaseUID })
    .then(mangas => {
      if (mangas) {
        res.json(mangas);
      } else {
        return res.status(400).json({ Error: "NO mangas saved" });
      }
    })
    .catch(error => console.log(error));
});
module.exports = app;

// Questions
