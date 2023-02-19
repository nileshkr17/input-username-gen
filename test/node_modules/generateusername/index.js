function generateusername(name, surname, birthdate) {
  const usernameOptions = [
    `${name}.${surname}`,
    `${name}${surname}`,
    `${name}${birthdate.substring(8)}`,
    `${name.charAt(0)}${surname}${birthdate.substring(6)}`,
    `${name.substring(0, 3)}${birthdate.substring(8)}`
  ];

  return usernameOptions;
}
module.exports=generateusername;