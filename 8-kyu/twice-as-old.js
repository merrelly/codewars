// TWICE AS OLD
// https://www.codewars.com/kata/5b853229cfde412a470000d0


/* Your function takes two arguments:

1. current father's age (years)
2. current age of his son (years)

Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). */


// MY SOLUTION
const twiceAsOld = (dadYearsOld, sonYearsOld) => sonYearsOld * 2 > dadYearsOld ? sonYearsOld * 2 - dadYearsOld : dadYearsOld - sonYearsOld * 2;
