const readline = require('readline');

// Create readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask user for their name, surname, and birthdate
rl.question('What is your name? ', (name) => {
  rl.question('What is your surname? ', (surname) => {
    rl.question('What is your birthdate? (MM/DD/YYYY) ', (birthdate) => {
      // Generate a list of possible usernames based on user input
      const usernameOptions = [
        `${name}.${surname}`,
        `${name}${surname}`,
        `${name}${surname.substring(0,2)}${birthdate.split('/')[1]}`,
        `${name}${birthdate.split('/')[2]}`,
        `${name.substring(0, 1)}${surname}${birthdate.split('/')[2]}`,
        `${name.substring(0, 3)}${birthdate.split('/')[2]}`,
      ];

      // Print out the list of possible usernames
      console.log(`Here are some possible username options based on your input (${name} ${surname} ${birthdate}):`);
      console.log(usernameOptions);

      rl.close();
    });
  });
});
