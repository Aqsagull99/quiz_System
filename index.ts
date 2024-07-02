import inquirer from 'inquirer';
import chalk from 'chalk';

// Define the TypeScript questions
const questions = [
    {
        type: 'list',
        name: 'q1',
        message: 'Which of the following is a valid TypeScript data type?',
        choices: ['number', 'string', 'boolean', 'All of the above'],
        correctAnswer: 'All of the above',
    },
    {
        type: 'list',
        name: 'q2',
        message: 'How do you define a variable in TypeScript?',
        choices: ['let', 'const', 'var', 'All of the above'],
        correctAnswer: 'All of the above',
    },
    {
        type: 'list',
        name: 'q3',
        message: 'What is the correct syntax for defining an array of numbers in TypeScript?',
        choices: ['let numbers: number[] = [1, 2, 3];', 'let numbers: Array<number> = [1, 2, 3];', 'Both of the above', 'None of the above'],
        correctAnswer: 'Both of the above',
    },
    {
        type: 'list',
        name: 'q4',
        message: 'Which of the following is used to create an interface in TypeScript?',
        choices: ['interface', 'type', 'class', 'None of the above'],
        correctAnswer: 'interface',
    },
    {
        type: 'list',
        name: 'q5',
        message: 'How do you specify that a parameter is optional in a TypeScript function?',
        choices: ['By appending a question mark (?) to the parameter name', 'By appending an exclamation mark (!) to the parameter name', 'By appending a colon (:) to the parameter name', 'By appending an asterisk (*) to the parameter name'],
        correctAnswer: 'By appending a question mark (?) to the parameter name',
    },
    {
        type: 'list',
        name: 'q6',
        message: 'What does the "never" type represent in TypeScript?',
        choices: ['A value that never occurs', 'A nullable value', 'A number type', 'A string type'],
        correctAnswer: 'A value that never occurs',
    },
    {
        type: 'list',
        name: 'q7',
        message: 'Which of the following TypeScript types represents a value that can be "undefined"?',
        choices: ['undefined', 'null', 'void', 'never'],
        correctAnswer: 'undefined',
    },
    {
        type: 'list',
        name: 'q8',
        message: 'How do you define a tuple type in TypeScript?',
        choices: ['let tuple: [string, number];', 'let tuple: (string, number);', 'let tuple: {string, number};', 'let tuple: string, number;'],
        correctAnswer: 'let tuple: [string, number];',
    },
    {
        type: 'list',
        name: 'q9',
        message: 'Which keyword is used to inherit a class in TypeScript?',
        choices: ['extends', 'implements', 'inherits', 'super'],
        correctAnswer: 'extends',
    },
    {
        type: 'list',
        name: 'q10',
        message: 'What is the use of the "readonly" modifier in TypeScript?',
        choices: ['To make a property write-only', 'To make a property read-only', 'To make a property accessible only within the class', 'To make a property optional'],
        correctAnswer: 'To make a property read-only',
    },
];

// Prompt the user with the questions
async function startQuiz() {
    console.log(chalk.blue('Welcome to the TypeScript Quiz!'));

    const answers = await inquirer.prompt(questions.map(q => ({
        type: q.type,
        name: q.name,
        message: q.message,
        choices: q.choices,
    })));

    let score = 0;

    // Calculate the score
    questions.forEach((question, index) => {
        if (answers[question.name] === question.correctAnswer) {
            score++;
        } else {
            score--;  // Deduct marks for wrong answers
        }
    });

    // Display the result
    console.log(chalk.green(`Your final score is ${score}.`));

    // Show correct answers
    console.log(chalk.yellow('\nCorrect Answers:'));
    questions.forEach((question, index) => {
        console.log(chalk.yellow(`${index + 1}. ${question.message} Correct answer: ${question.correctAnswer}`));
    });
}

startQuiz();






