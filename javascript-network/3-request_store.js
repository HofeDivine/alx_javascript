const request = require('request');
const fs = require('fs');

function saveWebpage(url, filePath) {
    request.get(url, { encoding: 'utf8' }, (error, response, body) => {
        

    

        fs.writeFile(filePath, body, { encoding: 'utf8' }, (err) => {
            if (err) {
                console.error('Error:', err);
            } 
        });
    });
}

const args = process.argv.slice(2);
if (args.length !== 2) {
    
    process.exit(1);
}

const url = args[0];
const filePath = args[1];
saveWebpage(url, filePath);
