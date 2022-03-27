const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("What is your password?", function(input){ 
  
  if( input.length >= 9){
    console.log("That was correct!")
  } else {
       console.log("Unfortunately, the password was not correct.");
  }
  
  reader.close()
  });

  /// answer 

//   console.log('Welcome to the password validator')
//   reader.question("What is your password?", function(input){
//       if(input.length >= 10){
//           console.log("You got it right!")
//       } else {
//           console.log("that was a failure.")
//       }
//   }
//   )