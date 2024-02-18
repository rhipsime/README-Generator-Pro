// index.js

const fs = import('fs');

import inquirer from 'inquirer';

const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
      validate: (input) => {
        if (input.trim() !== '') {
          return true;
        } else {
          return 'Please enter a title for your project.';
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a short description explaining the what, why, and how of your project:',
      validate: (input) => {
        if (input.trim() !== '') {
          return true;
        } else {
          return 'Please provide a description for your project.';
        }
      }
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the steps required to install your project? Provide a step-by-step description:',
      validate: (input) => {
        if (input.trim() !== '') {
          return true;
        } else {
          return 'Please provide installation instructions for your project.';
        }
      }
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions and examples for use:',
      validate: (input) => {
        if (input.trim() !== '') {
          return true;
        } else {
          return 'Please provide usage information for your project.';
        }
      }
    },
    {
      type: 'input',
      name: 'credits',
      message: 'List your collaborators, if any, with links to their GitHub profiles:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose the license for your project:',
      choices: ['MIT', 'GNU GPLv3', 'Apache 2.0', 'ISC', 'Other']
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
      },
      
  ];  

  // Prompt the user for information
inquirer.prompt(questions).then((answers) => {
    // Generate README content based on user input
    const readmeContent = generateREADME(answers);
  
    // Write README content to file
    fs.writeFile('README.md', readmeContent, (err) => {
      if (err) {
        console.error('Error writing README file:', err);
      } else {
        console.log('README file generated successfully!');
      }
    });
}).catch((error) => {
    console.error('Error:', error);
});

function generateREADME(answers) {
    // GitHub profile link
    const githubLink = answers.github ? `[${answers.github}](https://github.com/${answers.github})` : 'None';
  
    return `
  # ${answers.title}
  
  ## Description
  ${answers.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Questions](#questions)
  
  ## Installation
  ${answers.installation}
  
  ## Usage
  ${answers.usage}
  
  ## Credits
  ${answers.credits}
  
  ## License
  This project is licensed under the ${answers.license} License.
  
  ## Questions
  - [GitHub](${answers.github ? 'https://github.com/' + answers.github : '#'})  
  - Email: ${answers.email ? answers.email : 'Not provided'}
  `;
}
  
  
  

 