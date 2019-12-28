const papa = require('papaparse');
const fs = require('fs');

const animeFilePath = './csv/anime.csv';
const animeFile = fs.readFileSync(animeFilePath, 'utf-8');

//this is for the rows that I extract and read in from papaparse.
const animeRows = {};
papa.parse(animeFile, {
	header: true,
	skipEmptyLines: true,
	complete: function(results) {
		animeRows.data = results.data;
		animeRows.errors = results.errors;
		animeRows.meta = results.meta;
	}
});

console.log(animeRows.data);
// this iterates through all of the rows that papa parse has given me.
const animeArray = animeRows.data.map((row) => {
	const { name, anime_id, type, episodes, rating, members } = row;
	const editedName = name.replace(/, /g, ' ');

	return { name: editedName, anime_id, type, episodes, rating, members };
});
// this allows papa parse to iterate through all of the objects and convert them to a string to be written in the file system.
const animeData = papa.unparse(animeArray);
createFile('./csv/animeTable.csv', animeData, 'Your Anime Table has been saved!');

// this accepts a filepath, data and a message that we display if there aren't any errors.
function createFile(filePath, data, msg) {
	fs.writeFile(filePath, data, (err) => {
		if (err) throw err;
		console.log(msg);
	});
}
