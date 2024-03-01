const request = require('request');

function getCharacters(movieId) {
    const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;
    
    request.get(apiUrl, { json: true }, (error, response, body) => {
        if (error) {
            console.error('Error:', error);
            return;
        }

        if (response.statusCode !== 200) {
            console.error('Error:', body);
            return;
        }

        console.log(`Characters of ${body.title}:`);
        body.characters.forEach(characterUrl => {
            request.get(characterUrl, { json: true }, (error, response, character) => {
                if (error) {
                    console.error('Error:', error);
                    return;
                }

                if (response.statusCode !== 200) {
                    console.error('Error:', character);
                    return;
                }

                console.log(character.name);
            });
        });
    });
}

const movieId = process.argv[2];
if (!movieId) {
    console.error('Usage: node script.js <Movie_ID>');
    process.exit(1);
}

getCharacters(movieId);
