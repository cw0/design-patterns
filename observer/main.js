const Observer = require('./Observer');
const Observable = require('./Observable');

const observable = new Observable();
const observer1 = new Observer('first');
const observer2 = new Observer('second');

observable.attach(observer1);
observable.attach(observer2);

observable.notify();

observable.detach(observer1);
observable.notify();