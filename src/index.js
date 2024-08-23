
// You should implement your task here.

module.exports = function towelSort(matrix) {
  matrix = matrix || [];
  let res = [];

  for (let i = 0; i < matrix.length; i++) {
    res = res.concat((i === 0 || i % 2 === 0) ? [...matrix[i]] : [...matrix[i]].reverse());
  }

  return res;
}
