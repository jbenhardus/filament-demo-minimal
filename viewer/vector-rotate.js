const xMatrix = (angle) => {
  return [
    [1, 0, 0],
    [0, Math.cos(angle), -Math.sin(angle)],
    [0, Math.sin(angle), Math.cos(angle)],
  ];
};

const yMatrix = (angle) => {
  return [
    [Math.cos(angle), 0, Math.sin(angle)],
    [0, 1, 0],
    [-Math.sin(angle), 0, Math.cos(angle)],
  ];
};

const zMatrix = (angle) => {
  return [
    [Math.cos(angle), -Math.sin(angle), 0],
    [Math.sin(angle), Math.cos(angle), 0],
    [0, 0, 1],
  ];
};

const multiplyMatrixByVector = (matrix, vector) => {
  const product = [
    matrix[0][0] * vector[0] +
      matrix[0][1] * vector[1] +
      matrix[0][2] * vector[2],
    matrix[1][0] * vector[0] +
      matrix[1][1] * vector[1] +
      matrix[1][2] * vector[2],
    matrix[2][0] * vector[0] +
      matrix[2][1] * vector[1] +
      matrix[2][2] * vector[2],
  ];
  return product;
};

export const rotateVectorAboutAxis = (vector, axis, angle) => {
  let rotationMatrix;
  switch (axis) {
    case 'x':
      rotationMatrix = xMatrix(angle);
      break;
    case 'y':
      rotationMatrix = yMatrix(angle);
      break;
    case 'z':
      rotationMatrix = zMatrix(angle);
      break;
  }
  const rotated = multiplyMatrixByVector(rotationMatrix, vector);
  return rotated;
};
