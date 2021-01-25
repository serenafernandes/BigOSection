// fix to allow usage of the performance function
const {performance} = require('perf_hooks');
const nemo = ['nemo'];
const everyone = ['dory', 'marlin', 'bruce', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
// create an array of 100 items and fill it with 'nemo'
const large = new Array(100).fill('nemo');

function findNemo (array) {
  let t0 = performance.now();
  for(let i = 0; i < array.length; i++){
    if(array[i] === 'nemo'){
      console.log('Found Nemoooo!');
    }
  }
  let t1 = performance.now();
  console.log('Finding Nemo took: ' + (t1-t0) + ' milliseconds');
}

findNemo(large);

// Depending on the computer this code is run it's going to give different results, that's where Big O helps. 
// It helps measure the scalability of the code regardles of where it will be run.