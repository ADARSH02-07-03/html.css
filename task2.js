function sortStringAlphabetically(inputString) {
    // Split the string into an array of characters
    const charArray = inputString.split('');
  
    // Sort the array in alphabetical order
    const sortedArray = charArray.sort();
  
    // Join the sorted array back into a string
    const sortedString = sortedArray.join('');
  
    return sortedString;
  }
  
  // Example usage:
  const input = "programming";
  const sortedResult = sortStringAlphabetically(input);
  console.log(sortedResult); // Output: "aggimmnopr"
  