# freecodecamp-javascript

My solutions to the final problems of the JavaScript course at freecodecamp.

### Palindrome checker

 - Return **true** if the given string is a palindrome, otherwise return **false**. Full requirements [here](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker).
 - Solution walkthrough:
First get only the alphanumeric characters from the input string converted to lower case and store them into **newstr** array. Next store the array's length in **max**.
Then we iterate the array, stopping at its middle (if the number of elements is even) or ignoring the middle element (if the number of elements is odd) comparing its elements (the first with the last, the second with the second to last and so on). If there is a mismatch immediatly return **false** - the string is not a palindrome. 
Only if all the comparisons are true, then return **true** .
