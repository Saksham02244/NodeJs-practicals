var http = require("http");

http.createServer(function (req, res) {
    res.write("hey coders, welcome to my site.");
    res.end();
}).listen(8080, () => {
    console.log("Server running at http://localhost:8080");
});