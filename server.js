var http = require("http");
var taskList = require("./tasks")

var tasks = taskList.tasks;
// console.log(tasks);

var randomNumber = Math.floor(Math.random() * 5);

for (var i = 0; i < tasks.length; i++) {
    console.log(tasks[i]);
}

http.createServer(function (request, response) {
    response.writeHead(200, { "Content-type": " text/plain" });
    response.write(tasks[randomNumber]);
    response.end();
}).listen(3000);