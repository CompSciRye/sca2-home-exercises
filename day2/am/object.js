// complete the function such that it returns true if an object or any of its
// subobjects have any falsy values and false otherwise
// HINT: recursion may help here

const hasFalsyValue = obj => {
  return !obj;
};

arr = [0, 1, true, false, 57, null, "hello", NaN, ""]
console.log(arr.map(x => hasFalsyValue(x)))