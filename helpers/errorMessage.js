const chalk = require('chalk');

module.exports = function errorMessage(message, expected, received) {
    console.log(chalk.bold('-----------------------------------------------------------------\n\n\n'));
    console.log(chalk.red(chalk.bold(message)), '\n');
    console.log(chalk.white('Expected: ', chalk.bold(expected)), '\n');
    console.log(chalk.white('Got: '), chalk.red(chalk.bold(received)));
    console.log(chalk.bold('\n\n\n\n\n-----------------------------------------------------------------'));  
}
