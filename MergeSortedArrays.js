function mergeSortedArrays(arr1, arr2) {
  const mergedArrays = [];
  let arr1Item = arr1[0];
  let arr2Item = arr2[0];
  // indexes to iterate on the loop
  let i = 1;
  let j = 1;

  // Check input
  if (arr1.lenght === 0) {
    return arr2;
  }
  if (arr2.lenght === 0) {
    return arr1;
  }
// loop through the array items
  while (arr1Item || arr2Item) {
    // check if the arr2 item exists and push the smaller item to the merged array
    if (!arr2Item || arr1Item < arr2Item) {
      mergedArrays.push(arr1Item);
      arr1Item = arr1[i];
      i++;
    // else just push the arr2Item
    } else {
      mergedArrays.push(arr2Item);
      arr2Item = arr2[j];
      j++;
    }
  }
  return mergedArrays;
}

mergeSortedArrays([0,3,4,31], [4,6,30]);