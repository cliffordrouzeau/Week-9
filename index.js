const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create a function to initialize app
function init() {
  inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your Project title?',
      name: 'Projecttitle',
    },
    {
      type: 'input',
      message: 'What is your Description?',
      name: 'Description',
    },
    {
        type: 'input',
        message: 'what is your installation instructions',
        name: 'installationinstructions',
      },
      {
        type: 'input',
        message: 'What is your usage information?',
        name: 'usageinformation',
      },  
      {
        type: 'input',
        message: 'What is your contribution guidelines?',
        name: 'contributionguidelines',
      },  
      {
        type: 'input',
        message: 'What is your test instructions?',
        name: 'testinstructions',
      },  
      {
        type: 'list',
        message: 'What is your license?',
        name: 'license',
        choices: ['MIT', 'GPLv2', 'Apache', 'GPLv3']
      },  
      {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'GitHubusername',
      },  
      {
        type: 'input',
        message: 'What is your email address?',
        name: 'emailaddress',
      },  
      {
        type: 'input',
        message: 'What is your review description?',
        name: 'reviewdescription',
      },  
  ])
  .then((data) =>{
    console.log(data)
    if(data.license == "MIT"){
      data.license = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    } else if(data.license == 'Apache'){
      data.license = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    } else if(data.license == 'GPLv2'){
      data.license = '![License](https://img.shields.io/badge/License-GPLv2-green)'
    } else if(data.license == 'GPLv3'){
      data.license = '![License](https://img.shields.io/badge/license-GPLv3-blue)'
    }
 
    let doc = 
    `# ${data.Projecttitle}  ${data.license} 

## Table of Contents
> * [Description](#description)
> * [Usage](#usage)
> * [Installation](#installation)
> * [Contributing](#contributing)
> * [Tests](#tests)
> * [Questions](#questions)
> * [Review](#review)

## Description

    ${data.Description}

### Usage
    ${data.usageinformation}
    
## Installation 
    ${data.installationinstructions}

## Contributing 
    ${data.contributionguidelines}
  
## Tests 
    ${data.testinstructions}
    
### Questions
  
 > **GITHUB**: [${data.GitHubusername}](https://github.com/${data.GitHubusername})

 > **EMAIL**: You can reach me at ${data.emailaddress} for additional questions.

### Review
    ${data.reviewdescription}

    
  
    `

fs.writeFile('README.md', doc, (err) =>
  err ? console.error(err) : console.log('Success!')
);
  })
}

// Function call to initialize app
init();
