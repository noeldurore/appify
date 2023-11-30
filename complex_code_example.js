/* 
 * filename: complex_code_example.js
 * description: This code is a sophisticated and complex example that demonstrates various advanced concepts in JavaScript.
 */

// Define a class for Point with x and y coordinates
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  distanceTo(point) {
    const dx = this.x - point.x;
    const dy = this.y - point.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
}

// Define a class for Circle that inherits from Point
class Circle extends Point {
  constructor(x, y, r) {
    super(x, y);
    this.radius = r;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }

  perimeter() {
    return 2 * Math.PI * this.radius;
  }
}

const p1 = new Point(0, 0);
const p2 = new Point(3, 4);
console.log(`Distance between p1 and p2: ${p1.distanceTo(p2)}`);

const c = new Circle(0, 0, 4);
console.log(`Area of the circle: ${c.area()}`);
console.log(`Perimeter of the circle: ${c.perimeter()}`);

// Define a function to calculate the factorial of a number recursively
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(`Factorial of 5: ${factorial(5)}`);

// Define an asynchronous function to fetch data from an API and perform some operations
async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();

    // Perform calculations on the fetched data
    const sum = data.reduce((acc, val) => acc + val, 0);
    const average = sum / data.length;

    return { sum, average };
  } catch (error) {
    console.error(`Error fetching data: ${error}`);
    throw error;
  }
}

fetchData('https://api.example.com/data')
  .then(result => console.log(result))
  .catch(error => console.error(error));

// Define a generator function to generate an infinite sequence of fibonacci numbers
function* fibonacciGenerator() {
  let a = 0, b = 1;

  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

const fibonacci = fibonacciGenerator();
console.log("Fibonacci sequence:");
for (let i = 0; i < 10; i++) {
  console.log(fibonacci.next().value);
}

// Implement a bubble sort algorithm
function bubbleSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n-1; i++) {
    for (let j = 0; j < n-i-1; j++) {
      if (arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
      }
    }
  }

  return arr;
}

const unsortedArray = [4, 2, 1, 5, 3];
console.log(`Sorted array: ${bubbleSort(unsortedArray)}`);

// ... additional lines of complex code go here ...