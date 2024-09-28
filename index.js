// 1) returnFirstTwoDrivers function
const returnFirstTwoDrivers = (drivers) => {
  return drivers.slice(0, 2);
};

// 2) returnLastTwoDrivers function
const returnLastTwoDrivers = (drivers) => {
  return drivers.slice(-2);
};

// 3) selectingDrivers array
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// 6) createFareMultiplier function
const createFareMultiplier = (multiplier) => {
  return function (fare) {
    return fare * multiplier;
  };
};

// 8) fareDoubler function (which doubles fares)
const fareDoubler = createFareMultiplier(2);

// 10) fareTripler function (which triples fares)
const fareTripler = createFareMultiplier(3);

// 12) selectDifferentDrivers function
const selectDifferentDrivers = (arrayOfDrivers, driverFunction) => {
  return driverFunction(arrayOfDrivers);
};

// Example usage:

const drivers = ["Alice", "Bob", "Charlie", "David"];

console.log(returnFirstTwoDrivers(drivers)); // Output: ['Alice', 'Bob']
console.log(returnLastTwoDrivers(drivers)); // Output: ['Charlie', 'David']

console.log(selectingDrivers[0](drivers)); // Output: ['Alice', 'Bob']
console.log(selectingDrivers[1](drivers)); // Output: ['Charlie', 'David']

console.log(fareDoubler(10)); // Output: 20
console.log(fareTripler(10)); // Output: 30

console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers)); // Output: ['Alice', 'Bob']
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers)); // Output: ['Charlie', 'David']
