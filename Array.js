const strings = ['a', 'b', 'c', 'd'];
//4*4 = 16 bytes of storage

strings[2]

// add item at the end (O(1))
strings.push('e');

//remove last item (O(1))
strings.pop();
strings.pop();

// add item in the beggining (O(n))
strings.unshift('x')

// add item in a specific index
strings.splice(2, 0, 'alien')
// add on index 2 withouth deleting anything the sting alien

