// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') {
    const badge = ""
    return badge
  } else {
    const badge = `<img src ="https://img.shields.io/badge/license-${license}-brightgreen"/> </br>`;
    return badge
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink
  switch (license) {
    case 'MIT':
      licenseLink = 'https://opensource.org/licenses/MIT </br>';
      break;
    case 'APACHE_2.0':
      licenseLink = 'http://www.apache.org/licenses/LICENSE-2.0 </br>';
      break;
    case 'GPL_3.0' :
      licenseLink = 'http://www.gnu.org/licenses/ </br>';
      break;
    case 'BSD_3' :
      licenseLink = 'https://opensource.org/licenses/BSD-3-Clause </br>';
      break;
    case 'None' :
      licenseLink = ''
      break;
    
  }
  return licenseLink
}

// Create license section
function renderLicenseSection(license) {
  if (license === 'None') {
    return 'This application is not covered by any license';
  } else {
    return `This application is covered by the ${license} license`
  }
 }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}
  
  ## Description
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
 ${renderLicenseBadge(data.license)}
 ${renderLicenseLink(data.license)}
 ${renderLicenseSection(data.license)}
 
 ## Tests
 ${data.test}
 ## Questions
 If you have any questions, please feel free to reach out via email or at my github below
 
 ${data.email} </br>
 https://github.com/${data.username}
`;
}

module.exports = generateMarkdown;
