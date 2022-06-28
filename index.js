// Import stylesheets
import './style.css';

// Write Javascript code!
const property = 'Fistname';
const valuee = 'Shubham';
const user = {
  name: 'Shubham',
  age: 10,
  location: 'Pune',
};

// delete user['name of book '];

// console.log(user);

// Print  key with loop

// for (let i in user) {
//   console.log(user[i]);
// }

// Quest.1

const obj = {
  a: 'one',
  b: 'two',
  a: 'three',
};

console.log(obj);
// if we have two same key with different value then
//last will be replaced with first
// -----Output
//{a: "three", b: "two"}
// a: "three"
// b: "two"
// __proto__: Object

//Quest:2:create a function multiplyby2(obj) that multipies
// all numaric  property values of num by 2

const nums = {
  a: 100,
  b: 200,
  title: 'Mynums',
};

function multi(obj) {
  for (let key in obj) {
    if (typeof obj[key] == 'number') {
      obj[key] = obj[key] * 2;
    }
  }
}
multi(nums);

console.log(nums);
