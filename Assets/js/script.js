
//returns the element with the ID of "Generate"
const generateBtn = document.querySelector("#generate");

//returns the element with the ID of "Password"
const passwordText = document.querySelector("#password");



//---------------------Password Arrays--------------------------------------

  const upperArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerArray = "abcdefghijklmnopqrstuvwxyz";
  const numericArray = "0123456789"
  const specialArray = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

  //---------------------Request & Validate Password Length----------------------------

function requestLength(){
  
  const lengthChoice = window.prompt("How long Would you like your password to be? (Must be a number between 8 and 128");

  // Check if User input for length is a number
  function NumberCheck(UserNumberChoice){
    return !isNaN(UserNumberChoice);
  }

  // Validate length input value is a number, otherwise repeat prompt.
  if(!NumberCheck(lengthChoice)){
    return requestLength();
  }

  const length = lengthChoice;

  // Validate length between 8 and 128, otherwise repeat prompt.
  if(length < 8 || length > 128){
    return requestLength();
  }
  
  // Return length value once all criteria are met.
  return length;

}

//---------------------------------Request & Return Lowercase Parameter--------------------------
function requestLower(){

  const lowerChoice = confirm("Would you like to include Lowercase letters? (OK/Cancel)");
  return lowerChoice;
    
}

//---------------------------------Request & Return Uppercase Parameter--------------------------
function requestUpper(){
  
  const upperChoice = confirm("Would you like to include Uppercase letters? (OK/Cancel)");
  return upperChoice;
  
}

//---------------------------------Request & Return Numeric Parameter----------------------------

function requestNumeric(){
  
  const numericChoice = confirm("Would you like to include Numbers? (OK/Cancel)");
  return numericChoice;
      
}

//---------------------------------Request & Return Special Character Parameter------------------

function requestSpecial(){
  
  const specialChoice = confirm("Would you like to include Special Characters? (OK/Cancel)");
  return specialChoice;
     
  
}

//-------------------------------------------Password Generation----------------------------------

function generatePassword() {

  //Set variables and Arrays containing the returned value(s) of the above functions
  var finalPasswordLength = requestLength();  
  var combinedCriteria = [requestLower(), requestUpper(), requestNumeric(), requestSpecial()];  
  var result = "";

  //Add to the result 'pool' of potential characters using the boolean values produced in the Password Arrays
  if(combinedCriteria[0]) {
    result = result  + lowerArray;
  }
  if(combinedCriteria[1]) {
    result = result  + upperArray;
  }
  if(combinedCriteria[2]) {
    result = result  + numericArray;
  }
  if(combinedCriteria[3]) {
    result = result  + specialArray;
  }

  //set password starting-state to empty string ("")   
  var finalpassword = "";

  //With each iteration of the 'For' loop, add a random element to the 'finalpassowrd' string, until the predetermined length is reached.
  for(var i = 0; i < finalPasswordLength; i++){

    var randomElement = result[Math.floor(Math.random() * result.length)];

    finalpassword = finalpassword + randomElement;
  }
 
  //set the value property in HTML
  passwordText.value = finalpassword;
    

}

//Trigger Password Generation Function on click event
generateBtn.addEventListener("click", generatePassword);

  
  
  
  
  
  






