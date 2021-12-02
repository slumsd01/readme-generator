// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt ([
        {
            type: "input",
            name: "projectTitle",
            message: "What is the title of the project?"
        },
        {
            type: "input",
            name: "projectDescription",
            message: "Please describe the project.",
        },
        {
            type: "input",
            name: "projectInstall",
            message: "What are the steps required to install this project?",
        },
        {
            type: "input",
            name: "projectUsage",
            message: "Please provide examples for use.",
        },
        {
            type: "list",
            name: "projectLicense",
            message: "Choose a license type, to let other developers know what they can & cannot do with this project.",
            choices: [
                "GNU AGPLv3",
                "GNU GPLv3",
                "GNU LGPLv3",
                "Mozilla Public License 2.0",
                "Apache License 2.0",
                "MIT License",
                "Boost Software License 1.0",
                "The Unlicense",
            ],
        },
        {
            type: "input",
            name: "projectCollab",
            message: "Please list any other collaborators. If none, leave blank.",
        },
        {
            type: "input",
            name: "githubUsername",
            message: "Please enter your GitHub username.",
        },
        {
            type: "input",
            name: "emailAddress",
            message: "Please enter your email address.",
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
        writeToFile("README.md", generateMarkdown(answers))
    })
}

// Function call to initialize app
init();
