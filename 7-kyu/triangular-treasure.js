// TRIANGULAR TREASURE
// https://www.codewars.com/kata/525e5a1cb735154b320002c8


/* Triangular numbers are so called because of the equilateral triangular shape that they occupy when laid out as dots. i.e.

1st (1)   2nd (3)    3rd (6)
*          **        ***
           *         **
                     *
You need to return the nth triangular number. You should return 0 for out of range values:

For example: (Input --> Output)

0 --> 0
2 --> 3
3 --> 6
-10 --> 0 */


// MY SOLUTION
function triangular( n ) {
  let total = 0;
  for(let i = 1; i <= n; i++){
    total += i;
  }
  return total;
}
