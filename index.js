//Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');

//Function writes README file
function writeToFile(fileName, data) {
fs.writeFile(fileName, data, (err) => {
	//If user causes an error they'll receive this message.
	if (err) {
		console.error(err)
		return
	}

	//Log to inform user the file has been created
	console.log('ReadMe file created successfully.')
});
}

const writeFileAsync = util.promisify(writeToFile);

//Questions Array for user input
const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },
      {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Describe your project.',
      },
      {
        type: 'checkbox',
        name: 'license',
        message: 'Enter your project license type',
        choices: ['MIT', 'Unlicense', 'Apache 2.0', 'EPL 2.0', 'BSD 3-Clause', 'lppl1.3c, ofl'],
      },
      {
        type: 'input',
        name: 'Command',
        message: 'Which command should be run to install dependencies?',
      },
      {
        type: 'input',
        name: 'use',
        message: 'Tell the user what this repository is for.',
      },
      {
        type: 'input',
        name: 'Contributions',
        message: 'Notes on making contributions to this ReadMe file',
      },
    ]);
  };

//function to initializes app
const init = () => {
    promptUser()
      .then((answers) => writeFileAsync('ReadMe.md', generateMarkdown(answers)))
      .then(() => console.log('Successfully wrote to ReadMe.md'))
      .catch((err) => console.error(err));
  };
  // Called function initializes app
  init();  


