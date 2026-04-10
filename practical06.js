let http = require("http");
var a = require("upper-case");

http.createServer(function(req, res) {
    
    res.write(a.upperCase('hello world'));
    res.end();

}).listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});