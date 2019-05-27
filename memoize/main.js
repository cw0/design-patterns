const memoize = require('./memoize');

let add = (x, y) => {
  return x + y;
}

let memoizedAdd = memoize(add);

memoizedAdd(3, 5);
memoizedAdd(3, 5);