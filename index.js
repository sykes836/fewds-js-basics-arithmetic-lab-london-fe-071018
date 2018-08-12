/*
Variables defined in the test suite:
- oldID
- currentAge

You should NOT try to redefine any of the above variables.
*/

// Write your code below this line!
let newID = 1000000000

beforeEach(function() {
  newID = (1000000000 + oldID)
 });
 
 function ageIsValid (x, y) {
  if (Number.isInteger(y / x)) {
    return 'True';
  }
  else
  return 'False';
};
