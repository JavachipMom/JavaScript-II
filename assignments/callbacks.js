// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'Yo-yo', 'Gum'];

/* 

  // GIVEN THIS PROBLEM:

  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // SOLUTION:

  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // NOTES ON THE SOLUTION:

  // firstItem is a higher order function.
  // It expects a callback (referred to as `cb`) as its second argument.
  // To test our solution, we can use the given `items` array and a variety of callbacks.
  // Note how callbacks can be declared separately, or inlined.

  // TEST 1 (inlined callback):

  const test1 = firstItem(items, item => `I love my ${item}!`);
  console.log(test1); // "I love my Pencil!"

  // TEST 2 (declaring callback before hand):

  function logExorbitantPrice(article) {
    return `this ${article} is worth a million dollars!`;
  };

  const test2 = firstItem(items, logExorbitantPrice);
  console.log(test2); // "this Pencil is worth a million dollars!"
*/


function getLength(array, callback) {
  // getLength passes the length of the array into the callback.
  return callback(array.length);
};
// I'm creating the variable to test the callback of the total items in the array
let test1 = getLength(items, totalItems => `There are ${totalItems} items in the array!`);
console.log(test1);

function shortArray(number) { 
  return `This array of ${number} items is the shortest array I have..`;
};

let test2 = getLength(items, shortArray);
console.log(test2);

// ------------------------------------------------------------------------------------------

function last(array, callback) {
  // last passes the last item of the array into the callback.
  return callback(array[3]);
};

test1 = last(items, item => `Most schools have a standard rule about NO ${item} on campus, but I still always chewed it..`);
console.log(test1);

function schoolSupplies(supplies) {
  return `${supplies} has always been my go-to study helper for keeping my thoughts on track and staying busy..`
};

test2 = last(items, schoolSupplies);
console.log(test2);

// ------------------------------------------------------------------------------------------
let x = 12;
let y = 12;
function sumNums(x, y, callback) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return callback(x + y);
};

test1 = sumNums(x, y, sumTotal => `So the sum total of ${x} + ${y} = ${sumTotal}.`);
console.log(test1);

function add(total) {
  return `The total sum of ${x} and ${y} is ${total}..`
};

test2 = sumNums(x, y, add);
console.log(test2);
// ------------------------------------------------------------------------------------------

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x * y);
};

test1 = multiplyNums(x, y, multiplied => `If you multiply ${x} and ${y}, you'll get ${multiplied}..`);
console.log(test1);

function multiply(total) {
  return `We all know that ${x} X ${y} equals ${total}..`
};

test2 = multiplyNums(x, y, multiply);
console.log(test2);

// ------------------------------------------------------------------------------------------

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  
  // Pass true to the callback if it is, otherwise pass false.
}

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
