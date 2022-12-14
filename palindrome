function palindrome(str) {

  const newstr = str.toLowerCase().match(/[a-z0-9]/g);
  const max = newstr.length;

  let i = 0;
  while (i <= Math.floor(max / 2)) {
    if (newstr[i] !== newstr[max - i - 1]) {
      return false
      }
    
    i++;

    }
  return true
  
  }

palindrome("1 eye for of 1 eye.");
