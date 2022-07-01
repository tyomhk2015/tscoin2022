// Participant: tyomhk2015 (https://nomadcoders.co/users/tyomhk2015)

interface ILast {
  <T>(arr: T[]): T
}

interface IPrepend {
  <T>(arr: T[], item: T): T[]
}

// Return the last element
const last: ILast = (arr) => arr[arr.length-1]

// Add an element at the beginning of the given array, and return the whole array.
const prepend: IPrepend = (arr, item) => [item, ...arr]


// last(arg) test
const testArr = [1,2,3,4,5];
const testArr2 = [true,false,undefined,null, 'Sanz'];

console.log('== last(arg) test ==');
console.log(last(testArr));
console.log(last(testArr2));

// prepend(arr, argument) test
console.log('== prepend(arr, argument) test ==');
console.log(prepend(testArr, 777));
console.log(prepend(testArr2, 'Wa!'))