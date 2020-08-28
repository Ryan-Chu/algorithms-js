/* eslint-env mocha */
// + https://www.mathstools.com/section/main/system_equations_solver#.X0i6dPhKg0p
const tridiagonalMatrix = require('../../../src').algorithms.math.tridiagonalMatrix;
const assert = require('assert');

const badMatrix = [[1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4]];
const badMatrix2 = [[1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4]];
const matrix1 = [[1, 4, 0, 0, 1], [2, 4, 2, 0, 2], [0, 2, 4, 2, 3], [0, 0, 1, 4, 4]];
const answer1 = [-7, 2, 4, -8.5];
const matrix2 = [[1, 2, 0, 0, 0, 5], [2, 1, 3, 0, 0, 4], [0, 2, 2, 3, 0, 3],
  [0, 0, 1, 3, 1, 2], [0, 0, 0, 2, 1, 1]];
const answer2 = [9, -2, -4, 5, -9];


describe('Nontridiagonal matrix parameter', () => {
  it('should check Invalid parameters', () => {
    // Test for non NxN matrix
    assert.equal(tridiagonalMatrix(badMatrix), null);
    // Test for non tridiagonal matrix
    assert.equal(tridiagonalMatrix(badMatrix2), null);
  });

  it('Should solve for 4x4 tridiagonal matrix + r', () => {
    // Answer acquired from online matrix solver Ax=b where b = r, see above +
    assert.equal(tridiagonalMatrix(matrix1), answer1);
  });

  it('Should solve for 5x5 tridiagonalMatrix + r', () => {
    // Answer acquired from online matrix solver Ax = b where b = r, see above +
    assert.equal(tridiagonalMatrix(matrix2), answer2);
  });
});
