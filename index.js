// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt ([
        {
            type: "input",
            name: "title",
            message: "What is the title of the project?",
            validate: function(answer) {
                if (answer.length < 1) {
                    return console.log("You must enter a valid title.")
                }
                return true;
            },
        },
        {
            type: "input",
            name: "description",
            message: "Please describe the project.",
            validate: function(answer) {
                if (answer.length < 1) {
                    return console.log("You must enter a valid description.")
                }
                return true;
            },
        },
        {
            type: "input",
            name: "install",
            message: "What are the steps required to install this project?",
        },
        {
            type: "input",
            name: "usage",
            message: "Please provide examples for use.",
        },
        {
            type: "list",
            name: "license",
            message: "Choose a license type, to let other developers know what they can & cannot do with this project.",
            choices: [
                "None",
                "NGPL-3.0",
                "GPL-3.0",
                "LGPL-3.0",
                "MPL-2.0",
                "Apache-2.0",
                "MIT",
                "BSL-1.0",
                "Unlicense",
            ],
        },
        {
            type: "input",
            name: "collab",
            message: "Please list any other collaborators. If none, leave blank.",
        },
        {
            type: "input",
            name: "github",
            message: "Please enter your GitHub username.",
            validate: function(answer) {
                if (answer.length < 1) {
                    return console.log("You must enter a valid GitHub username.")
                }
                return true;
            },

        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email address.",
            validate: function(answer) {
                if (answer.length < 1) {
                    return console.log("You must enter a valid email address.")
                }
                return true;
            },

        },
    ])
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
          return console.log(err);
        else {
          console.log("File written successfully - README.md");
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    promptUser()
    .then(answers => {
        generateMarkdown(answers)
        writeToFile("newly-generated-README.md", generateMarkdown(answers))
    })
}

// Function call to initialize app
init();
