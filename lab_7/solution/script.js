// a normal function for calculating volume
// of a cube.
function calcCubeVolume(length, width = length, height = length) {
  return width * height * length;
}

// an arrow function for calculating area
// of a circle.
const calcCircleArea = (diameter) => {
  const radius = diameter / 2;
  const area = Math.PI * radius * radius;

  return area;
};

console.log(
  `The volume of a cube with length of "2", width of "5" and height of "3" is: ${calcCubeVolume(
    5,
    3,
    2
  )}`
);

console.log(`The volume of a cube with length of "2" is: ${calcCubeVolume(2)}`);

console.log(
  `The area of a circle with diameter of 3.14 is: ${calcCircleArea(3.14)}`
);
