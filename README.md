# freecodecamp-javascript

My solutions to the final problems of the JavaScript course at freecodecamp.

### Palindrome checker

 - Return **true** if the given string is a palindrome, otherwise return **false**. Full requirements [here](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker).
 - Solution walkthrough:
First get only the alphanumeric characters from the input string converted to lower case and store them into **newstr** array. Next store the array's length in **max**.
Then we iterate the array, stopping at its middle (if the number of elements is even) or ignoring the middle element (if the number of elements is odd) comparing its elements (the first with the last, the second with the second to last and so on). If there is a mismatch immediatly return **false** - the string is not a palindrome. 
Only if all the comparisons are true, then return **true** .

### Roman numeral converter

 - Convert the given number into a roman numeral. Full requirements [here](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter).
 - Solution walkthrough
Use consecutive substractions from the original number.
 First initialize two arrays, one with roman numerals and the other one with their corresponding values.
 While the number is bigger than zero (so conversion still needed) iterate the **arabic** array (observe that it is sorted from high to low); when an element of the array is less or equal than the number add to the **converted** string the corresponding roman value, substract from the original number the value from the array then **break** in order to be able to repeat the process.
 When the original number is zero the conversion is completed and **converted** is returned.
