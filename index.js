const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];

beforeEach(function () {
      drivers.length = 0;

//Uses Filter Method Retrive Values in Array
function findMatching(result) {
  return result = drivers.filter(aName => aName.includes('Bobby', 'Sammy'));
}

console.log(result);

// Use Filter Method to Retrive Beginning Provided Letters  
function fuzzyMatch(resultTwo) {
  return resultTwo = drivers.filter(names => names.includes('Sa'));
}

console.log(resultTwo);

//Filter Method to Retrive Objects in Array
function matchName(resultThree) {
  return resultThree = drivers.filter((persons) => persons.name === 'Bobby')
}

console.log(resultThree);
 



