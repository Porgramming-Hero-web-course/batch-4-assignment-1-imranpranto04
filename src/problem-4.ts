// Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.
{
  type Circle = {
    shape: "circle";
    radius: number;
  };

  type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
  };

  type Shape = Circle | Rectangle;

  function calculateShapeArea(shape: Shape): number {
    if (shape.shape === "circle") {
      // Calculate area of circle (π * r^2)
      return Math.PI * shape.radius ** 2;
    } else if (shape.shape === "rectangle") {
      // Calculate area of rectangle (width * height)
      return shape.width * shape.height;
    }
    return 0; // Fallback (should never be reached)
  }

  // Sample Input 1
  const circleArea: number = parseFloat(
    calculateShapeArea({ shape: "circle", radius: 5 }).toFixed(2)
  );
  console.log(circleArea); // Output: 78.54

  // Sample Input 2
  const rectangleArea: number = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });
  console.log(rectangleArea); // Output: 24
}
