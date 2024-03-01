const request = require('request');

function getMovieTitle(movieId) {
    const url = `https://swapi-api.alx-tools.com/api/films/${movieId}`;
    
    request.get(url, (error, response, body) => {
        if (error) {
            console.error('Error:', error);
            return;
        }

        if (response.statusCode !== 200) {
            console.error('Error:', body);
            return;
        }

        const movie = JSON.parse(body);
        console.log(`${movie.title}`);
    });
}

const args = process.argv.slice(2);
if (args.length !== 1 || isNaN(args[0])) {
    console.error('Usage: node script.js <movieId>');
    process.exit(1);
}

const movieId = parseInt(args[0]);
getMovieTitle(movieId);
