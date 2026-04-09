var url = require("url");

var a = "http://localhost:8080/default.htm?category=books&id=101";

var g = url.parse(a, true);

console.log(g.protocol);   // http:
console.log(g.host);       // localhost:8080
console.log(g.pathname);   // /default.htm

var b = g.query;

console.log(b.category);   // books
console.log(b.id);         // 101