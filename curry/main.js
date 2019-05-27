const curriedAdd3 = (x) => (y) => (z) => {
  return x + y + z;
}

console.log(curriedAdd3(1)(2)(3));