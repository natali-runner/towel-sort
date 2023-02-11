module.exports = function towelSort (matrix) {

  let sortArray = [];

  if (arguments.length === 0) return [];

  matrix.forEach((arr, index) => {
  sortArray = sortArray.concat(index % 2 === 0? arr : arr.reverse())
  });

  return sortArray
}
