// 1000 Lights

// 1 to n switches, all are off initially
// Toggle 1~n on first pass
// Toggle 2,4,6 second pass
// Toggle 3,6,9 third pass
// continue (total n times)

// Take in total number of switches
// Return array of lights that are on

// Create new array of size n
// Fill array with false
// For i = 1 to n
  // For j = i to n, j + i
    // iterate through array, toggle switches
// Get indexes of array that are true

function lightsOn(switches) {
  let arr = new Array(switches);
  arr.fill(false);
  for (let i = 1; i <= switches; i++) {
    for (let j = i; j <= switches; j += i) {
      arr[j] = !arr[j];
    }
  }
  let result = [];
  arr.forEach((value, index) => {
    if (value) {
      result.push(index);
    }
  });
  return result;
}

console.log(lightsOn(5));        // [1, 4]
console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

// Diamonds

// Odd integer
// Console logging diamond (nxn)

// diamond (1)
// *

// diamond (3)
//  *
// ***
//  *

// Figure out pattern
// Pattern: 4,3,2,1,0,1,2,3,4         starting: Math.floor(n / 2)
// Diamond count: 1,3,5,7,9,7,5,3,1
// Two arrays representing these patterns
// Then iterate over one array, console.log(' '.repeat(padding)('*').repeat(count))



function diamond(n) {
  let count = [];
  for (let i = 1; i <= n; i += 2) {
    count.push(i);
  }
  for (let i = n - 2; i > 0; i -= 2) {
    count.push(i);
  }
  let padding = count.map(num => (n - num) / 2);
  console.log(padding);
  for (let idx = 0; idx < count.length; idx++) {
    console.log(`${' '.repeat(padding[idx])}${'*'.repeat(count[idx])}`);
  }
}

diamond(9);

// Now I know my ABCs

function isBlockWord(word) {
  let BLOCKS = ['BO', 'XK' ,'DQ', 'CP', 'NA',
  'GT', 'RE', 'FS', 'JW', 'JW', 'HU',
  'VI', 'LY', 'ZM'];

  let wordArr = word.split('').map(char => char.toUpperCase());
  for (let idx = 0; idx < wordArr.length; idx++) {
    let char = wordArr[idx];
    let block = BLOCKS.find(block => block.indexOf(char) > -1);
    if (block) {
      let index = BLOCKS.indexOf(block);
      BLOCKS.splice(index, 1);
    } else {
      return false;
    }
  }
  return true;
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
