// TODO: Include packages needed for this application
var inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "projectTitle",
        message: "What is the title of the project?"
    },
    {
        type: "input",
        name: "projectDescription",
        message: "Please enter a description of this project."
    },
    {
        type: "input",
        name: "projectInstall",
        message: "What are the steps required to install this project?"
    },
    {
        type: "input",
        name: "projectUsage",
        message: "Please provide instructions & examples for use."
    },
    {
        type: "list",
        name: "projectLicense",
        message: "Choose a license type, to let other developers know what they can & cannot do with this project.", 
        choices: ["Apache", "Academic", "GNU", "ISC", "MIT", "Mozilla", "Open"]
    },
    {
        type: "input",
        name: "projectCollaborators",
        message: "Please list your collaborators, if any."
    },
    {
        type: "confirm",
        name: "projectTest",
        message: "Is there a test included?"
    },
    {
        type: "input",
        name: "projectQuestions",
        message: "What should a developer do if they have an issue?"
    },
    {
        type: "input",
        name: "githubUsername",
        message: "Please enter your GitHub username."
    },
    {
        type: "input",
        name: "emailAddress",
        message: "Please enter your email address."
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => console.log(answers))
}

// Function call to initialize app
init();
