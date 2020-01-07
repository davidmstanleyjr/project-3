const express = require("express");
const mysql = require("mysql");

const app = express();

const port = 4000;

const db = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "3317",
	database: "animecsv"
});

//api route for getting anime info
app.get("/getAllAnime", (req, res) => {
	const sql = "SELECT * FROM ANIME";
	db.query(query, (err, rows) => {
		if (err) throw err;
		res.send(rows);
	});
});

//tells api to listen on specified port
app.listen(port, () => console.log("REST API listening on PORT: " + port));
