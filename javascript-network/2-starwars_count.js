const request = require('request');

function countMoviesWithCharacter(apiUrl, characterId) {
    request.get(apiUrl, { json: true }, (error, response, body) => {
        if (error) {
            console.error('Error:', error);
            return;
        }

        if (response.statusCode !== 200) {
            console.error('Error:', body);
            return;
        }

        let count = 0;


        body.results.forEach(film => {
            
            if (film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`)) {
                count++;
            }
        });

        console.log(`Number of movies where Wedge Antilles is present: ${count}`);
    });
}

const apiUrl = process.argv[2];
if (!apiUrl) {
    console.error('Usage: node script.js <API_URL>');
    process.exit(1);
}

const characterId = 18; 
countMoviesWithCharacter(apiUrl, characterId);
