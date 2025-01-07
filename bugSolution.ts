function printCoord(pt: { x: number; y: number; z?: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
  if (pt.z) {
    console.log("The coordinate's z value is " + pt.z);
  }
}

printCoord({ x: 3, y: 7 });
printCoord({ x: 3, y: 7, z: 10 });