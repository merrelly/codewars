// TWO TO ONE
// https://www.codewars.com/kata/5656b6906de340bd1b0000ac


/* Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz" */


// MY SOLUTION
function longest(s1, s2) {
  let array = s1.split('').concat(s2.split(''));
  return array.sort().filter((e, i) => array.indexOf(e) === i).join('');
}
