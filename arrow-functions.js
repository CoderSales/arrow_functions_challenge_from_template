const addTwoNumbers = (a, b) => a + b;
let sum = addTwoNumbers(3, 5);
console.log(sum); // OUTPUT1: 8

const addTwoNumbers2 = (a, b) => a + b;
let sum2 = addTwoNumbers2(6,4);
console.log(sum2); // OUTPUT2: 10

// Implicit Returns
const saySomething = message => console.log(message);
saySomething('Hello there!!'); // OUTPUT3: Hello there!

const sayHello = () => console.log('hello');
sayHello(); // OUTPUT 4: hello

// _________________________________

// Returning Multiple Lines

const returnMultipleLines = () => (
    `<p>
        This is a multiline string!
    </p>`
)
console.log(returnMultipleLines()); // OUTPUT 5: 3 line HTML code


// PART 2:
let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'maths','english', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', english: 'Joan', art: 'Simon'},
        results: {science: 93, maths: 95, english: 80, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 63, maths: 79, art: 95},
    }
];

const averagePoints = (arr, subject) => {
    return 
};
// https://stackoverflow.com/questions/20905354/javascript-calculating-the-average-of-an-array-using-for-loop

let result =  averagePoints (students,'english');
console.log(result) // OUTPUT6: undefined
console.log(students.subjects) // OUTPUT7: undefined