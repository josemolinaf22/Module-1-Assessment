const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("what is your password?", function(input){ 
  let token = input.split(' ');
  console.log(`The password you entered is ${input}`)
  
  if( token.length < 9 && token.length> 20){
    console.log("That was correct!")
  } else if (token.length < 9) {
    console.log("Unfortunately, the password is too short.")
  } else if (password.length > 20){
    console.log("Unfortunately, the password is too long!")
  }
  
  
  reader.close()
  });