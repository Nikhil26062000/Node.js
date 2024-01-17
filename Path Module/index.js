

const path = require('path');

console.log(path.dirname("C:/Users/KIIT/Desktop/Node.js/Path Module/index.js"));

console.log(path.extname("C:/Users/KIIT/Desktop/Node.js/Path Module/index.js"));

console.log(path.basename("C:/Users/KIIT/Desktop/Node.js/Path Module/index.js"));

const myPath =  path.parse("C:/Users/KIIT/Desktop/Node.js/Path Module/index.js");
console.log(myPath.name);