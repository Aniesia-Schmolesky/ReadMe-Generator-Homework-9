// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {
//   if (license == 'MIT') {
//     `![License Badge](https://img.shields.io/npm/l/express)`
//   } if (license == 'Unlicense') {
//     `![License Badge](https://img.shields.io/npm/l/unlicense)`
//   } if (license == 'Apache 2.0') {
//     `![License Badge](https://img.shields.io/hexpm/l/plug)`
//   } if (license == 'BSD 3-Clause') {
//     `![License Badge](https://img.shields.io/pypi/l/django)`
//   } if (license == 'EPL 2.0') {
//     `![License Badge](https://img.shields.io/eclipse-marketplace/l/notepad4e)`
//   } if (license == 'lppl1.3c, ofl') {
//     `![License Badge](https://img.shields.io/ctan/l/novel)`
//   } else {``}
// }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {
//   if (license == 'MIT') {
//     `License link: https://img.shields.io/npm/l/express`
//   } if (license == 'Unlicense') {
//     `License link: https://img.shields.io/npm/l/unlicense`
//   } if (license == 'Apache 2.0') {
//     `License link: https://img.shields.io/hexpm/l/plug`
//   } if (license == 'BSD 3-Clause') {
//     `License link: https://img.shields.io/pypi/l/django`
//   } if (license == 'EPL 2.0') {
//     `License link: https://img.shields.io/eclipse-marketplace/l/notepad4e`
//   } if (license == 'lppl1.3c, ofl') {
//     `License link: https://img.shields.io/ctan/l/novel`
//   } else {``}
// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {
//   if (license == 'MIT') {
//     `# MIT`
//   } if (license == 'Unlicense') {
//     `# Unlicense`
//   } if (license == 'Apache 2.0') {
//     `# Apache 2.0`
//   } if (license == 'BSD 3-Clause') {
//     `# BSD 3-Clause`
//   } if (license == 'EPL 2.0') {
//     `# EPL 2.0`
//   } if (license == 'lppl1.3c, ofl') {
//     `# lppl1.3c, ofl`
//   } else {``}
// }


// ${module.exports = renderLicenseBadge}


// ${module.exports = renderLicenseLink}


// ${module.exports = renderLicenseSection}

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  let markDown = `# ${data.title}

  ## Description

  *About the project:*


   ${data.description}


  ## Usage:


   *What this repo is used for:*


   ${data.use}


  ## Contributing


  *To contribute to this repo, please follow the specified guidelines:*


  ${data.Contributions}

  
  ## Installation

  
  *Steps required to install project:*


  ${data.Command}

  
  ## License: 

  ${data.license.choices}
      
  ## Contact Information:

  *GitHub username:*   ${data.username}


  *Email address:*    ${data.email}  

`;
return markDown;
}

module.exports = generateMarkdown;
