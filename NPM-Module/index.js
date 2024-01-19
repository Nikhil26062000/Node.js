
const chalk = require("chalk");
const validator = require("validator");

console.log(chalk.blue("Hello World"));
const result = validator.isEmail("Nikhil@gmail.com");

console.log(result ? chalk.green.inverse(result):chalk.red.inverse(result)); 