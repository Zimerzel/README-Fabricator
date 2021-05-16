
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license){
    return ` [![License](https://img.shields.io/badge/License-${data.license}%20-blue.svg) `
  }
  else {
    return [];
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license){
    return ` (https://opensource.org/licenses/${data.license}) `
  }
  else{
    return [];
  }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license){
    return 
  }
  else{
    return [];
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  <h1 align="center">${data.title}</h1>

  
  # Description
  ${data.description}

  # Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribution](#contribution)
  * [Test](#test)
  * [Questions](#questions)
 
  # Installation
  These dependencies must be installed for the application to work properly, ${data.installation}.
  
  # Usage
  To use this app, ${data.usage}.
  
  # License
  [![License](https://img.shields.io/badge/License-${data.license}-blue.svg)](https://opensource.org/licenses/${data.license})
  <br />
  This application is licensed under the ${data.license} license.
  
  # Contribution 
  ${data.contribution}
  
  # Test
  The following is needed to run the test: ${data.test}
  
  # Questions
  If you have any questions concerning this repo, please email ${data.email} or through my Github profile: https://github.com/${data.username}/${data.title}.

`;

}

module.exports = generateMarkdown;

