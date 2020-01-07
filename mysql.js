const mysql = require("mysql");

const db = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "3317",
	database: "animecsv"
});

// let query = "";

// db.connect(err => {
// 	if (err) throw err;
// 	console.log("You have successfully connected!");

	// query = 
	DROP DATABASE IF EXISTS animecsv;

	USE animecsv;
	// db.query(query, err => {
	// 	if (err) throw err;
	// 	console.log("Anime table has been dropped!");
	// });

	// query =
		CREATE TABLE anime
		 row_id INT AUTO_INCREMENT PRIMARY KEY, 
		 name VARCHAR(255), 
		anime_id INT, type VARCHAR(255), 
		episodes INT, 
		rating DECIMAL, members INT;

	// db.query(query, err => {
	// 	if (err) throw err;
	// 	console.log("Your Anime table has been created!");
	// });

	query =
		"LOAD DATA LOCAL INFILE 'csv/animeTable.csv' INTO TABLE ANIME FIELDS TERMINATED BY ',' IGNORE 1 LINES " +
		"(name, anime_id, type, episodes, rating, members)";

	db.query(query, err => {
		if (err) throw err;
		console.log("Your Anime table has been loaded!");
	});

	db.end(err => {
		if (err) throw err;
		console.log("It's all good! The database connection is closing");
	});
// });
