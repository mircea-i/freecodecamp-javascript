function convertToRoman(num) {

  const roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  const arabic = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let converted = '';

  while (num > 0) {
    for (let i = 0; i < arabic.length; i++) {
      if (arabic[i] <= num) {
        converted += roman[i];
        num -= arabic[i];
        break
      }     
    }
  }
  
 return converted;
}

convertToRoman(36);
