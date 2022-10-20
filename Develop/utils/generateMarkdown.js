// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ### Description
  ${data.description}
 ## Table of Contents
 - [Description](#description)
 - [Installation](#installation)
 - [Usage](#usage)
 - [License](#license)
 - [Contributing](#contributing)
 - [Tests](#tests)
 - [Questions](#questions)
 ## Installation
  ${data.installation}
 ## Usage
  ${data.usage}
 ## License
 ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)
 
 This application is covered by the ${data.license} license.
 ## Tests
 ${data.test}
 ## Questions
 If you have any questions, please feel free to reach out via email or at my github below
 ${data.email}
 (https://github.com/${data.username})
`;
}

module.exports = generateMarkdown;
