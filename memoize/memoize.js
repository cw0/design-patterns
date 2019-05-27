let memoize = (fn) => {
  let cache = {};
  return (...args) => {
    let stringifiedArgs = JSON.stringify(args);
    console.log(cache[stringifiedArgs]);
    let result = cache[stringifiedArgs] = cache[stringifiedArgs] ||
      fn(...args);
    return result;
  }
}

module.exports = memoize;