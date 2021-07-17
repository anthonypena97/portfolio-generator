// const generatePage = (userName, githubName) => {
//     return `
//     Name: ${userName}
//     GitHub: ${githubName}
//     `;
// }

// --------------------------

const fs = require('fs');
const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2, process.argv.length);

const [name, github] = profileDataArgs;

// console.log(name, github);
// console.log(generatePage(name, github));

fs.writeFile('index.html', generatePage(name, github), err => {
    if (err) throw new Error(err);

    console.log('Portfolio complete! Check out index.html to see the output!');
});