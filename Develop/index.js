// TODO: Include packages needed for this application
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const util = require('util');

const questions = [
    {
        type:'input',
        name:'title',
        message:'What would you like to be the project title?'
    },
    {
        type:'input',
        name:'description',
        message:'Please provide a brief description:'
    },
    {
        type:'input',
        name:'installation',
        message:'Please provide your installation instructions:'
    },
    {
        type:'input',
        name:'usage',
        message:'Please provide your usage information:'
    },
    {
        type:'input',
        name:'contribution',
        message:'Please provide all listed contributors:'
    },
    {
        type:'input',
        name:'test',
        message:'Please provide requirements for testing this application:'
    },
    {

        type:'list',
        name:'license',
        message:'Whats license do you wish to use?',
        choices: [
            "Apache",
            "Academic",
            "MIT",
            "Mozilla",
        ]

    },
    {
    type:'input',
    name:'username',
    message:'Please provide your Github username:'
    },
    {
    type:'input',
    name:'email',
    message:'Please provide your email:'
     },
];

// TODO: Create a function to write README file
function writeToFile(data){
    fs.writeFile('README.md', data, err => {
        if(err){
            console.log(err);
        }
        else {
            console.log("your file has been made.")
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(
        questions
)
.then(data => {
    let templateGenerator = generateMarkdown(data)
    console.log(templateGenerator);
    writeToFile(templateGenerator);
    console.log(data);
})
}


// Function call to initialize app
init();
