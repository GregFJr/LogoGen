const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./shapes/shapes');

async function userInput() {
    const userschoice = await inquirer.prompt([
        {
            type: 'list',
            name: 'shape',
            message: 'What shape would you like to render?',
            choices: ['Circle', 'Triangle', 'Square']
        },

        {
            type: 'input',
            name: 'color',
            message: 'What color would you like to render?',
        },  

        {
            type: 'input',
            name: 'text',
            message: 'What text would you like to render?',
        },

        {
            type: 'input',
            name: 'textColor',
            message: 'What color would you like to render the text?',

        },
    ]);

    let selectedShape;
    switch (userschoice.shape) {
        case 'Circle':
            selectedShape = new Circle();
            break;
        case 'Square':
            selectedShape = new Square();
            break;
        case 'Triangle':
            selectedShape = new Triangle();
            break;
        default:
            console.log('Invalid shape');
            break;
  }

    selectedShape.setColor(userschoice.color);
    selectedShape.setText(userschoice.text);
    selectedShape.setTextColor(userschoice.textColor);

    const svg = selectedShape.render();

    fs.writeFileSync('logo.svg', svg);

    console.log('Generated logo.svg ', svg);
}


userInput();

