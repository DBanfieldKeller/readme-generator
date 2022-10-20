// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = ["Title of your project?", "Please select a license type.", "Provide a brief description.", "Provide installation instructions.", "Provide usage instructions.", "Provide contribution guidelines.", "Provide test instructions.", "What is your github username?", "What is your email address?"];




// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.md`, data, (err) => err ? console.error(err) : console.log('success!!!'))
}


// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: questions[0],
                name: 'title',
            },
            {
                type: 'list',
                message: questions[1],
                name: 'license',
                choices: ["MIT", "GNU GPL V3", "CC Attribution", "CC Attribution-NonCommercial", "CC Attribution-NonCommerical-NoDerivatives"]
            },
            {
                type: 'input',
                message: questions[2],
                name: "description",
            },
            {
                type: 'input',
                message: questions[3],
                name: 'installation',
            },
            {
                type: 'input',
                message: questions[4],
                name: 'usage',
            },
            {
                type: 'input',
                message: questions[5],
                name: 'contribution',
            },
            {
                type: 'input',
                message: questions[6],
                name: 'test',
            },
            {
                type: 'input',
                message: questions[7],
                name: 'username'
            },
            {
                type: 'input',
                message: questions[8],
                name: 'email'
            }
        ])
        .then((response) => {
            JSON.stringify(response);
            writeToFile(response.title, JSON.stringify(response))
            console.log(response);
        })
}

// Function call to initialize app
init();
