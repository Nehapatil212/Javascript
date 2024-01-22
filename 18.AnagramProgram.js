function areAnagrams(str1, str2) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanStr1 = str1.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const cleanStr2 = str2.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
    // Sort the characters of both strings
    const sortedStr1 = cleanStr1.split('').sort().join('');
    const sortedStr2 = cleanStr2.split('').sort().join('');
  
    // Check if the sorted strings are equal
    return sortedStr1 === sortedStr2;
  }
  
 console.log("****************Anagram or not *******************************");
  const string1 = "listen";
  const string2 = "silent";
  const result = areAnagrams(string1, string2);
  console.log(`Givan string is "Silent" and "Listen" are Anagram: `,result)
  console.log("******************************************************************");
  const str1 = "Hello";
  const str2 = "word";
  const result1 = areAnagrams(str1, str2);
  console.log(`Givan string is "Hello" and "word" are Anagram: `,result1)

  console.log("******************************************************************");
  const s1 = "Such";
  const s2 = "Much";
  const r1 = areAnagrams(s1, s2);
  console.log(`Givan string is "Such" and "Much" are Anagram: `,r1)