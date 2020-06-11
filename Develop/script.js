// Assignment Code
var generateBtn = document.querySelector("#generate");
var selected = 0;
var ranString;
var lowcharString = "qwertyuiopasdfghjklzxcvbnm";
var uppcharString = "QWERTYUIOPASDFGHJKLZXCVBNM";
var numString = "1234567890";
var specialString = "!@#$%^&*()_+-=`?><"
var midString=null;
var length;
var charTypes;
var lowercase = false;
var uppercase = false;
var numeric = false;
var specialChar = false;
var randNum = 0;
var passwordText;

// Write password to the #password input
function writePassword() { 

  length = prompt("How many characters should your password be? (must be between 8-128 characters)");
  charTypes = prompt("What types of characters do you want -- 1. lowercase 2. uppercase 3. numeric 4. Special --(type all the numbers of the types you want)"); 

  if(length<8){
    alert("Password must be at least 8 characters long");
  }
  else if(length>128){
    alert("Password cannot be longer than 128 characters");
  }
  else{
  
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

  randNum = Math.floor(Math.random()*midString.length);
  ranString=midString[randNum];

  for (var i = 0; i<(length-1);i++)
  {

    randNum = Math.floor(Math.random()*midString.length);
    ranString = ranString+midString[randNum];
  
  }
  
  passwordText = document.querySelector("#password");
  
  passwordText.value = ranString;

}}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);