// //  const arr = [2,5,1,2,3,5,1,2,4]

// function firstRecurringCharacter (input) {
//   for(let i = 0; i <= input.length; i++){
//     for(let j = i + 1; j <= input.length; j++){
//       if(input[i] === input[j]){
//         return input[i];
//       }
//     }
//   }
//   return undefined;
// }

// firstRecurringCharacter([2,5,1,2,3,5,1,2,4]);


function firstRecurringCharacter2 (input) {
  let map = {};
  for(let i = 0; i < input.length; i++){
    if(map[input[i]] !== undefined){
      return input[i];
    } else {
      map[input[i]] = i;
    }
  }
  return undefined;
}

firstRecurringCharacter2([2,5,1,2,3,5,1,2,4]);
//by using hash tables it's possible to detect correctly in case we have an input like [2,5,5,2,3,5,1,2,4]