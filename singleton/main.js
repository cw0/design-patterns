const Singleton = require('./Singleton');

const first = new Singleton('first');
const second = new Singleton('second');

console.log(first.name, second.name); //first first