const testData = [1, 2];

function sumFor(data) {
  let sum = 0;
  for (const i of data) {
    sum += i;
  }
  return sum;
}
console.log(sumFor(testData));

function sumWhile(data) {
  let sum = 0;
  let i = 0;
  while (i < data.length) {
    sum += data[i];
    i++;
  }
  return sum;
}
console.log(sumWhile(testData));

function sumRecursion(data) {
  if (data.length === 0) {
    return 0;
  }
  return data[0] + sumRecursion(data.slice(1));
}
console.log(sumRecursion(testData));

function sumTheSimpleWay(data) {
  return _.reduce(data, function (memo, elem) { return memo + elem; });
}
console.log(sumTheSimpleWay(testData));
