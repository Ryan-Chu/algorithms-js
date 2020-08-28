/*
 * Must be tridiagonal matrix with answer column appended at the end.
 */
const tridiagonalMatrix = (InputMatrix) => {
  const answer = [];
  // This checks if parameter is a NxN matrix
  if (InputMatrix.length !== InputMatrix[0].length) {
    console.log('Not NxN matrix');
    return null;
  }
  //  This checks if parameter is a tridiagonal matrix
  //  Does not check last column in parameter because Mx = r
  //  M is tridiagonal matrix and r is predetermined matrix
  for (let i = 0; i < InputMatrix.length; i++) {
    for (let j = 0; j < InputMatrix[j].length; j++) {
      const cell = InputMatrix[i][j];

      // Makes sure tridiagonal matrix except for last column
      if ((i !== j) || (i - 1 !== j) || (i + 1 !== j) && (j !== InputMatrix[i].length)) {
        if (cell !== 0) {
          return null;
        }
      }
    }
  }


  // Dictionary to define starting set for Thomas Algo
  const input = {};
  input.b1 = InputMatrix[0][0];
  input.c1 = InputMatrix[0][1];
  input.a2 = InputMatrix[1][0];
  input.r1 = InputMatrix[0][1] / InputMatrix[0][0];
  input.p1 = InputMatrix[0][InputMatrix.length - 1] / InputMatrix[0][0];

  // Iterates through matrix implementing Thomas Algorithm
  for (let i = 2; i < InputMatrix.length; i++) {
    const oneLess = i - 1;
    const twoLess = i - 2;

    // Implements algo of next variables, a, b, c
    input[`b${i}`] = InputMatrix[oneLess][oneLess];
    input[`c${i}`] = InputMatrix[oneLess][i];
    input[`a${i}`] = InputMatrix[oneLess][twoLess];

    // n = iteration in example equations
    // Implements algo to determine R in Rn = Cn / Bn
    // and P in Pn = Rn / Bn
    input[`r${i}`] = input[`c${i}`] / (input[`b${i}`] - (input[`a${i}`] * input[`p${oneLess}`]));
    input[`p${i}`] = (input[`r${i}`] - input[`a${i}`] * input[`p${oneLess}`]) / (input[`b${i}`] - input[`a${i}`] * input[`r${oneLess}`]);
  }

  // Makes new 2d float array based on imput size
  // Also sets Xn equal to Pn allowing us to also figure out the rest of X
  answer[InputMatrix.length - 1] = input[`p${InputMatrix.length - 1}`];
  for (let n = InputMatrix.length - 2; n >= 0; n--) {
    answer[n] = input[`p${n}`] - input[`r${n}`] * input[n];
  }

  return answer;
};

module.exports = tridiagonalMatrix;
