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

console.log(user);

// Print  key with loop

for (let i in user) {
  console.log(user[i]);
}
