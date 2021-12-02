// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
# ${answers.projectTitle}

## Description 
${answers.projectDescription}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Credits](#credits)
* [Questions](#contact-information)

## Installation
${answers.projectInstall}

## Usage 
${answers.projectUsage}

## Credits
${answers.projectCollab}

## Contact Information
* [GitHub](https://github.com/${answers.githubUsername})
* [Email](${answers.emailAddress}) `;
}

module.exports = generateMarkdown;