// Assignment Code
//declare variables here will need a string for each char type and booleans for each char type as well 
var generateBtn = document.querySelector("#generate");
var selected = 0;
var ranString;
var lowcharString = "qwertyuiopasdfghjklzxcvbnm";
var uppcharString = "QWERTYUIOPASDFGHJKLZXCVBNM";
var numString = "1234567890";
var specialString = "!@#$%^&*()_+-=`?><"
var midString;
var length;
var charTypes;
var lowercase;
var uppercase;
var numeric;
var specialChar;
var randNum = 0;
var passwordText;

// Write password to the #password input
function writePassword() { 
  midString=null;
  lowercase = false;
  uppercase = false;
  numeric = false;
  specialChar = false;

  //prompts for how many characters the password should be and for what character types should be used
  length = prompt("How many characters should your password be? (must be between 8-128 characters)");
  charTypes = prompt("What types of characters do you want -- 1. lowercase 2. uppercase 3. numeric 4. Special --(type all the numbers of the types you want)"); 

  //if statements for if the user enters more or less than the character limits for the generator
  if(length<8){
    alert("Password must be at least 8 characters long");
  }
  else if(length>128){
    alert("Password cannot be longer than 128 characters");
  }
  else{
  
    //if statements for checking which character types were selected 
  for (var j =0; j<charTypes.length;j++){
      if (charTypes[j]==="1"){

        lowercase=true; 
        
      }
      else if (charTypes[j]==="2"){

        uppercase=true;
        
      }
      else if (charTypes[j]==="3"){

        numeric=true;
        
      }
      else if (charTypes[j]==="4"){

        specialChar=true;
        
      }
      else{
        
        alert("invalid input");

      }
  } 

//if statements for adding the appropriate character strings into the string that the random generator will pull its random chars from 
  if(lowercase===true){
  
    midString = lowcharString;
  
  }
  
  if(uppercase===true){

    if(midString==null){

      midString=uppcharString;

    }
    else{

    midString = uppcharString.concat(midString);
  
    }
  
  }
  
  if(numeric===true){

    if(midString==null){

      midString=numString;

    }
    else{

      midString = numString.concat(midString);
  
    }
  
  }
  if(specialChar===true){
    
    if(midString==null){

      midString=specialString;

    }
    else{

      midString = specialString.concat(midString);
  
    }
  
  }
  //use a random number generator from Math.random to generate a random number
  randNum = Math.floor(Math.random()*midString.length);
  ranString=midString[randNum];

  //for loop for the length that the user inputted that adds random characters to the random password string

  for (var i = 0; i<(length-1);i++)
  {

    randNum = Math.floor(Math.random()*midString.length);
    ranString = ranString+midString[randNum];
  
  }
  
  passwordText = document.querySelector("#password");
  //prints the random password to the screen
  passwordText.value = ranString; 
  

}}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);