const generateusername=require('generateusername');
const name='Nilesh';
const surname='Singh';
const birthdate='2002-04-17';
const usernameOptions=generateusername(name, surname, birthdate);
console.log(usernameOptions);