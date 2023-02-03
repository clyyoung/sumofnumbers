function sumFor(data) {
  let sum = 0;
  for (const i of data) {
    sum += i;
  }
  return sum;
}

console.log(sumFor([1, 2, 3]));
