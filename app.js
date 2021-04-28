// dot Notation

const person = {
  name: 'Heze',
};

console.log(person.name);
person.age = 37;
console.log(person);

// Square brackets notations

const item = {
  'featured-items': ['item1', 'item2'],
};

console.log(item['featured-items']);
console.log(person['name']);

let appState = 'loading';
appState = 'error';
const keyName = 'computer';

const app = {
  [appState]: true,
};

app[keyName] = 'apple';
console.log(app);

const state = {
  loading: true,
  name: '',
  job: '',
};

const updateState = (key, value) => {
  state[key] = value;
};

updateState('name', 'Brad');
updateState('job', 'Developer');
updateState('loading', false);

updateState('products', []);

updateState('name', 'Justin');

console.log(state);
