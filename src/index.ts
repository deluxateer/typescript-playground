let id: number = 5;
let company: string = 'wow';
let showText: boolean = true;
let x: any = 'dang';
x = 5;
let age: number;
age = 30;

// Array of some type
let ages: number[] = [1, 2, 3, 4];

// Tuple
let person: [number, string, boolean] = [1, 'Delux', true];

// Tuple Array
let employee: [number, string][];
employee = [
  [1, 'Delux'],
  [1, 'John'],
  [1, 'Jane'],
];

// Union, can be multiple types
let myId: number | string = 22;
myId = '22';

// Enum, a set of constants of numbers or strings
enum Direction1 {
  Up, // default value is: 0
  Down, // default value is: 1
  Right, // default value is: 2
  Left, // default value is: 3
}

console.log(Direction1.Up);

enum Direction2 {
  Up = 1,
  Down, // default value is: 2
  Right, // default value is: 3
  Left, // default value is: 4
}

console.log(Direction2.Down);

enum Direction3 {
  Up = 'Up',
  Down = 'Down',
  Right = 'Right',
  Left = 'Left',
}

// Objects
const user: {
  id: number;
  name: string;
} = {
  id: 1,
  name: 'Johnny',
};

type User = {
  id: number;
  name: string;
};

const user2: User = {
  id: 1,
  name: 'Johnny',
};

// Type Assertion
const cid: any = '1';
// const customerId = <number>cid;
const customerId = cid as number;

// Functions
// (types for args): type for return val
function addNum(x: number, y: number): number {
  return x + y;
}

function log(x: string | number): void {
  console.log(x);
}

// Interface
interface UserInterface {
  readonly id: number;
  name: string;
  age?: number;
}

const user3: UserInterface = {
  id: 1,
  name: 'Johnny',
};

interface MathFunc {
  (x: number, y: number): number;
}

const addStuff: MathFunc = (x, y) => x + y;
