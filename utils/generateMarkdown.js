// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  let tableOfContents = `

  ## Table of Contents`

  if (answers.install !== "") {
    tableOfContents += `
  * [Installation](#installation)`
  }

  if (answers.usage !== "") { tableOfContents += `
  * [Usage](#usage)` };

  if (answers.license !== "None") { tableOfContents += `
  * [License](#license)` };

  if (answers.collab !== "") { tableOfContents += `
  * [Contributions](#contributing)` };

  tableOfContents += `
  * [Questions](#questions)`
  
  let markdown =`
  # ${answers.title}

  ## Description

  ${answers.description}`

  if (answers.license !== "None") {
    markdown += `

  ![License Badge](https://img.shields.io/static/v1?label=license&message=${answers.license}&color=blue)`
  }

  markdown += tableOfContents

  if (answers.install !== "") {
    markdown += `

  ## Installation

  ${answers.install}`
  }

  if (answers.usage !== "") { 
    markdown += `

  ## Usage

  ${answers.usage}`
  }

  if (answers.license !== "None") { 
    markdown += `

  ## License

  [${answers.license}](https://choosealicense.com/licenses/${answers.license}/)`
  }

  if (answers.collab !== "") { 
    markdown += `

  ## Contributions

  ${answers.collab}`
  }

  markdown += `  
  
  ## Questions?
  
  Contact information for any questions or comments:
  * [GitHub](https://github.com/${answers.github})
  * [Email](${answers.email})`


  return markdown
}

module.exports = generateMarkdown
