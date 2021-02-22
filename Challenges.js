// function funChallenge(input) {
//   let a = 10;
//   a = 50 + 3;

//   for (let i = 0; i < input.length; i++) {
//     anotherFunction();
//     let stranger = true;
//     a++;
//   }
//   return a;
// }
const input = [0,1,2,3,4,5]

function anotherFunChallenge(input) {
  let a = 5; // O(1)
  let b = 10; // O(1)
  let c = 50; // O(1)
  for (let i = 0; i < input; i++) {
    let x = i + 1; // O(n)
    let y = i + 2; // O(n)
    let z = i + 3; // O(n)

  }
  for (let j = 0; j < input; j++) {
    let p = j * 2; // O(n)
    let q = j * 2; // O(n)
  }
  let whoAmI = "I don't know"; // O(1)
}

anotherFunChallenge(input);