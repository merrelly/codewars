// FORMATTING DECIMAL PLACES #0
// https://www.codewars.com/kata/5641a03210e973055a00000d


/* Each number should be formatted that it is rounded to two decimal places. You don't need to check whether the input is a valid number because only valid numbers are used in the tests.

Example:    
5.5589 is rounded 5.56   
3.3424 is rounded 3.34 */


// MY SOLUTION
function twoDecimalPlaces(n) {
  return Number(n.toFixed(2));
}