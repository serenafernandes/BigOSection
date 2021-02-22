function reverseStr (str) {
  if(!str || str.lenght < 2 || typeof str !== 'string'){
    return 'hmm, that is not good'
  }
  const backwards = [];
  const totalItems = str.length -1;

  for(let i = totalItems; i >= 0; i--){
    backwards.push(str[i]);
  }
  return backwards.join('');
}

// reverse('Hi my name is Serena');

function reverse2(str) {
  return str.split('').reverse().join('');
}

reverse2('Hi my name is Serena');

//ES6 WoW
const reverse3 = str => [...str].reverse().join('');