const nemo = ['nemo'];
const everyone = ['dory', 'marlin', 'bruce', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
// create an array of 100 items and fill it with 'nemo'
const large = new Array(100000).fill('nemo');
// The more the array grows the longer it will get.

function findNemo (array) {
  for(let i = 0; i < array.length; i++){
    if(array[i] === 'nemo'){
      console.log('Found Nemoooo!');
    }
  }
}

findNemo(large);