const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];

const driversTwo = [
        {
          name: 'Bobby',
          hometown: 'Pittsburgh' },
        {
          name: 'Sammy',
          hometown: 'New York' } ,
        {
          name: 'Sally',
          hometown: 'Cleveland' },
        {
          name: 'Annette',
          hometown: 'Los Angeles' },
        {
          name: 'Bobby',
          hometown: 'Tampa Bay' }
      ];

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
  return resultThree = driversTwo.filter((persons) => persons.name === 'Bobby')
}

console.log(resultThree);
 



