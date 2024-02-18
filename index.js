// index.js

const fs = require('fs');
const inquirer = require('inquirer');

// Define questions
const questions = [
  // Define your questions here
];

// Prompt the user for information
inquirer.prompt(questions).then((answers) => {
  // Generate README content based on user input
  const readmeContent = `
    # ${answers.title}

    ## Description
    ${answers.description}

    ## Installation
    ${answers.installation}

    ## Usage
    ${answers.usage}

    ## License
    ${answers.license}
  `;

  // Write README content to file
  fs.writeFile('README.md', readmeContent, (err) => {
    if (err) {
      console.error('Error writing README file:', err);
    } else {
      console.log('README file generated successfully!');
    }
  });
});
