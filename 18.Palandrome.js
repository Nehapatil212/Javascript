function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Reverse the string
    const reversedStr = cleanStr.split('').reverse().join('');
    
    // Check if the reversed string is equal to the original cleaned string
    return cleanStr === reversedStr;
  }
  
  // Example usage
  const exampleString = "madam";
  const result = isPalindrome(exampleString);
  console.log("**************************Palindrome**********************************")
  
  console.log("Given string is 'madam' :", result);
  const exampleString1= "dad";
  const result1 = isPalindrome(exampleString1);
  console.log("Given string is 'dad' :", result1);
  const exampleString2 = "hello";
  const result2 = isPalindrome(exampleString2);
  console.log("Given string is 'hello' :", result2);