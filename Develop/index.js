// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Project title?',
    },
    {
        type: 'input',
        name: 'what',
        message: 'What is your project?',
    },
    {
        type: 'input',
        name: 'why',
        message: 'Why did you create this project?',
    },
    {
        type: 'input',
        name: 'how',
        message: 'How will this be used?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install this project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'how is this used?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license does your project use?',
        choices: ['agpl', 'apache', 'mit', 'no license']
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/generated-README.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
    .then(readmeData => {
        return readmeData;
    })
}

// Function call to initialize app
init()
.then(readmeData => {
    console.log(readmeData);
    return generateMarkdown(readmeData);
})
.then(pageMD => {
    return writeFile(pageMD);
})
.then(writeFileResponse => {
    console.log(writeFileResponse.message);
})
.catch(err => {
    console.log(err);
})
