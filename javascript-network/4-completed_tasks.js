const request = require('request');

function countCompletedTasks(apiUrl) {
    request.get(apiUrl, { json: true }, (error, response, body) => {
        if (error) {
            console.error('Error:', error);
            return;
        }

        if (response && response.statusCode !== 200) {
            console.error('Error:', body);
            return;
        }

        const completedTasksByUser = {};

        body.forEach(task => {
            if (task.completed) {
                if (!completedTasksByUser[task.userId]) {
                    completedTasksByUser[task.userId] = 1;
                } else {
                    completedTasksByUser[task.userId]++;
                }
            }
        });

        console.log(completedTasksByUser);
    });
}

const apiUrl = process.argv[2];
if (!apiUrl) {
    console.error('Usage: node script.js <API_URL>');
    process.exit(1);
}

countCompletedTasks(apiUrl);
