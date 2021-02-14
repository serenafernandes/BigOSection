const boxes = [0,1,2,3,4,5];

function logFirstTwoBoxes(boxes){
  console.log(boxes[0]); // O(1)
  console.log(boxes[1]); // O(1)
}
// we always say O(1) no matter how big (even if it's O(100))
logFirstTwoBoxes(boxes); // O(2)