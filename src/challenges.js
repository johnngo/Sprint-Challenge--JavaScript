/* eslint-disable */


/* ======================== CallBacks Practice ============================ */
const each = (elements, cb) => {
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
  for(let i =0; i < elements.length; i++) {
    cb(elements[i],i );
  }
};

const map = (elements, cb) => {
  // Produces a new array of values by mapping each value in list through a transformation function.
  // Return the new array.
  const newArr = [];
  for (let i = 0; i< elements.length; i++) {
    newArr.push(cb(elements[i]));
  }
  return newArr;
};

/* ======================== Closure Practice ============================ */
// No test needed here, just run the newCounter(); and make sure it's counting up
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  // Example: const newCounter = counter();
  // newCounter(); // 1
  // newCounter(); // 2
  count = 0;
  return () => {
    count++;
    return count;
  }

};
const limitFunctionCallCount = (cb, n) => {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  let count = 0;
  return (...args) => {
    if(count === n) {
      return null;
    }
    count +=1;
    return cb(...args);
  };
};

/* ======================== Prototype Practice ============================ */

// Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides. 

// Create a CuboidMaker constructor function that accepts properties for length, width, and height
const CuboidMaker = function CuboidMaker(options) {
  this.length = options.length;
  this.width = options.width;
  this.height = options.height;
};

// Create a seperate function property of CuboidMaker that returns the volume of a given cuboid's length, width, and height
// Formula for cuboid volume: length * width * height
CuboidMaker.prototype.volume = function volume() {
  return this.length * this.width * this.height;
};

// Create a seperate function property of CuboidMaker that returns the surface area of a given cuboid's length, width, and height. 
// Formula for cuboid surface area of a cube: 2(length * width + length * height + width * height)
CuboidMaker.prototype.surfaceArea = function surfaceArea() {
  return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
};

const cuboid = new CuboidMaker({
    length: 4,
    width: 5,
    height: 5,
  });

/* ======================== Class Practice ============================ */

// Task 1: Copy and paste your prototype CuboidMaker here and proceed to convert it into ES6 Class syntax
class Cuboid {
  constructor(options) {
    // Implement this constructor
    this.length = options.length;
    this.width = options.width;
    this.height = options.height;
  }
  volume() {
    // Implement this function
    return this.length * this.width * this.height;
  }
  surfaceArea() {
    // Implement this function
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}
// Task 2: Create a new class called Cube. Extend the Cube class with the CuboidMaker class.
// Create two new methods on the Cube class to calculate the volume and surface area of a 
// cube given the same values passed in from CuboidMaker.
class Cube extends CuboidMaker { // Be sure to use `extends` to extend the Cuboid class
  constructor(options) {
    // Use the parent constructor
    super(options);
    this.isCube = options.isCube;
  }
  volume() {
        return this.length * this.width * this.height;
      }
  surfaceArea() {
        return 6 * (this.length * this.width);
      }
}

const cube = new Cube({
    length: 2,
    width: 2,
    height: 2,
    isCube:true,
  });
/* ======================== Stretch Challenges ============================ */


// Challenge 1: Go back to your prototype CuboidMaker and extend Cube using psuedo-classical inheritance to achiveve the same results you built using the ES6 class syntax
const CubeMaker = function CubeMaker(options) {
  // Call the parent constructor
};

// Set up inheritance by linking the prototype to its parent.
// CubeMaker.prototype = null;

// Challenge 2: Go back to your class Cube and add the following property: isCube.
// Create a method inside of Cube that checks for isCube and if it's true, returns a string 'We have a cube!'; NOTE: Comment our your prototype code so you don't have conflicting names!

// Challenge 3: Recursion
const checkMatchingLeaves = obj => {
  // return true if every property on `obj` is the same
  // otherwise return false
};

module.exports = {
  each,
  map,
  limitFunctionCallCount,
  checkMatchingLeaves,
  CuboidMaker,
  CubeMaker,
  Cuboid,
  Cube
};
