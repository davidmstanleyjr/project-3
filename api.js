const express = require("express");
const cors = require("cors");
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
//i'm using cors so the browser doesn't block reqeusts made to outside sources. This would happen because of the express API I created.
app.use(cors());

//api route for getting anime info
app.get("/getAllAnime", (req, res) => {
	const query = "SELECT * FROM ANIME";
	db.query(query, (err, rows) => {
		if (err) throw err;
		res.send(rows);
	});
});

//tells api to listen on specified port
app.listen(port, () => console.log("REST API listening on PORT: " + port));
