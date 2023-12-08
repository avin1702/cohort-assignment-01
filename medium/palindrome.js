/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.replace(/[^a-zA-Z0-9]/g,'').toLowerCase()
  let len 
  if(str == null)
  {
    return true
  }
  else
  {
    len = str.length
    for(i=0;i<len/2;i++)
    console.log(str)
  if(str[i]!==str[len-1-i]){

    return false
  }
  else{
    return true;
  }
  }  

  
}

module.exports = isPalindrome;
