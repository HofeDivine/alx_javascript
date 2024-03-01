const request = require('request');

function countCompletedTasks(apiUrl) {
    request.get(apiUrl, { json: true }, ( response) => {
        


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

        Object.keys(completedTasksByUser).forEach(userId => {
            console.log(`User ${userId}: ${completedTasksByUser[userId]} completed tasks`);
        });
    });
}

const apiUrl = process.argv[2];
if (!apiUrl) {
 
    process.exit(1);
}

countCompletedTasks(apiUrl);
