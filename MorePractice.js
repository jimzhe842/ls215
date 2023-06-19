function checkValid(version) {
  if (version.match(/^[0-9]+(\.[0-9]+)*$/)) {
    return true;
  } else {
    return false;
  }
  // if (version.match(/[^0-9.]/)) {
    // return false;
  // } else {
    // return true;
  // }
}

function padZeroes(arr, targetLength) {
  let totalZeroes = targetLength - arr.length;
  while (totalZeroes > 0) {
    totalZeroes--;
    arr.push(0);
  }
}

function compareVersions(version1, version2) {
  // Check if version1 and version2 are strings (convert them to strings)
  if (!checkValid(version1) || !checkValid(version2)) {
    return null;
  }
  let arr1 = version1.split('.').map(char => Number(char));
  let arr2 = version2.split('.').map(char => Number(char));
  let targetLength = Math.max(arr1.length, arr2.length);
  padZeroes(arr1, targetLength);
  padZeroes(arr2, targetLength);
  // turn into array, get longer version, pad shorter with zeroes
  // do a comparison
  for (let idx = 0; idx < targetLength; idx++) {
    let v1 = arr1[idx];
    let v2 = arr2[idx];
    if (v1 > v2) {
      return 1;
    } else if (v1 < v2) {
      return -1;
    }
  }
  return 0;
}

// Problem 1

// good number => clean number (10 digits, if 11 check first is one) (always 10 numbers)
// bad number => return 10 zeros

// take string
// clean using regex
// get length of string
  // if 11 length
    // if first digit is one then remove otherwise return 10 zeros
  // if 10 then good


let DEFAULT = ('0').repeat(10);

function cleanPhone(string) {
  string = string.replace(/[^0-9]/g,'');
  let length = string.length;
  if (length === 10) {
    return string;
  } else if (length === 11) {
    if (string[0] === 1) {
      return string.slice(1);
    }
  }
  return DEFAULT;
}



// Problem 2

// Given a number string
// Ignore all non-numeric inputs
// Reverse the number string (cannot reverse strings only arrays)
// Convert to array, map to numbers
// Double all the even indexes
  // If the result is greater than 9, subtract 9
// Sum up the resulting digits
  // Check the sum is modulus 10 zero
    // if it is return true else return false

function checkSum(digits) {
  digits = digits.replace(/\D/g, '');
  let arr = digits.split('').map(char => Number(char)).reverse();
  let sum = arr.reduce((sum, value, index) => {
    if (index % 2 === 1) {
      value *= 2;
      value = value > 9 ? value - 9 : value;
    }
    return sum + value;
  }, 0);
  return sum % 10 === 0;
}

// Problem 3

// Given a string (conver to uppercase)
// Parse the string
  // Check each character if they are from a new block
    // If they are from a new block (mark that block) and keep going
    // If not from a new block return false
  // Return true
// Return true or false

// Case insensitive

// used block array, all letters that cannot be used anymore
// or used block hash object, all letters as keys
// unused block array

let BLOCKS = ['BO', 'XK' ,'DQ', 'CP', 'NA',
'GT', 'RE', 'FS', 'JW', 'JW', 'HU',
'VI', 'LY', 'ZM'];

function isBlockWord(string) {
  string = string.toUpperCase();
  let unusableLetters = '';
  let stringArr = string.split('');
  for (let idx = 0; idx < stringArr.length; idx++) {
    let char = stringArr[idx];
    if (unusableLetters.indexOf(char) > -1) {
      return false;
    } else {
      let block = BLOCKS.find(block => block.indexOf(char) > -1);
      unusableLetters += block;
    }
  }
  return true;
}

console.log(isBlockWord('jest'));

// Problem 4

// Take in a string of separated digits
// Separated by commas
// Shorthand notation (1,2,5,12,18,26 => 1,2,5,2,8,6)
// Use colon, dash, dot (1:3, 1-3, 1..3 => 1,2,3)
// Case (2-1,5 => 2,11,15)
// Case (545, 64:11) => (545, 564...611), (545, 500) => (545, 1500)
// Output array of numbers

// Separate the commas
// Create an array of the return value
// Iterate through the rest of the elements
  // Find the number of the element (or the first number)
    // check if it is a range by using regex
      // if element is a number that is the starting point
      // if it is a range, get the first number (through splitting)
  // Compare this number to the previous step
    // if smaller increase the reference point (if 2,1 then do 2,11);
      // find length of string of smaller number, new reference point is Math.floor(larger number / 10 ** length) + 10 ** length;
    // if larger then just return the current number + reference point;
    // if range then include all numbers in between (need to recheck the reference point);

    // set previous number (always the long version of the number)

function convertToLongHand(prev, current) {
  // takes in a number (two numbers)

  if (prev > current) {
    let prevLength = String(prev).length;
    let currentLength = String(current).length;
    if (prevLength === currentLength) {
      current += Math.pow(10, prevLength);
    } else {
      // check if the trailing part of the number is smaller or greater
      let prevTrailing = prev % Math.pow(10, prevLength - 1);
      // let currentTrailing = current % Math.pow(10, currentLength);
      let prevLeadingNumber = Math.floor(prev / Math.pow(10, prevLength - 1));
      if (current > prevTrailing) {
        current += prevLeadingNumber * Math.pow(10, prevLength - 1);
      } else {
        current += (prevLeadingNumber + 1) * Math.pow(10, prevLength - 1);
      }
    }
    // let addedNumber = Math.floor(prev / (10 ** digitCount)) + (10 ** (digitCount));
    // return current + addedNumber;
  }
  return current;
  
}

function range(a,b) {
  let result = [];
  for (let idx = a; idx <= b; idx++) {
    result.push(idx);
  }
  return result;
}

function getFullNumberList(string) {
  let elements = string.split(',').map(element => element.trim());
  shorthandRanges = elements.reduce((accum, element) => {
    accum.push(element.split(/[-(..):]/g).map(char => Number(char)));
    return accum;
  }, []);
  let result = [];
  let prev = -Infinity;
  shorthandRanges.forEach(shorthandRange => {
    let num = shorthandRange[0];
    num = convertToLongHand(prev, num);
    result.push(num);
    prev = num;
    shorthandRange.slice(1).forEach(num => {
      num = convertToLongHand(prev, num);
      result = result.concat(range(prev + 1, num));
      prev = num;
    });
  });
  // elements.forEach(element => {
  //   if (element.match(/[-(..):]/g)) {
  //     console.log(element.split(/[-(..):]/g));
  //   } else {
  //     let num = Number(element);
  //     num = convertToLongHand(prev, num);
  //     prev = num;
  //     result.push(num);
  //   }
  // });
  return result;
}

// console.log(convertToLongHand(2, 3));
// console.log(convertToLongHand(2, 1));
// console.log(convertToLongHand(545, 64));
// console.log(convertToLongHand(545, 1));
// console.log(convertToLongHand(545, 20));
// console.log(range(5,10));

// console.log(getFullNumberList("1, 3, 7, 2, 4, 1"));
// console.log(getFullNumberList("1-3, 1-2"));
// console.log(getFullNumberList("1:5:2"));
// console.log(getFullNumberList("104-2"));
// console.log(getFullNumberList("104-02"));
// console.log(getFullNumberList("545, 64:11"));

// Problem 5

// Encoding

// input, string, number of rails to encode

// Take the string
// Get the string length;
// For loop from 1 to #rails:
  // Current layer = idx;
  // Starting point = current layer;
  // Separation = (2*#layers - 2) - (currentLayer-1)2;
  // iterate over sequence of numbers (while <= string length);
    // take the string[idx] move to the current fence arr result;
// Let's say 2 fences
// fenceArr = ['abc', 'foo'];
// join the two strings and return;

function encode(message, numRails) {
  message = message.replace(/\s+/g, '');
  let length = message.length;
  let fenceArr = [];
  let wavelength = 2 * numRails - 2;
  for (let idx=1; idx <= numRails; idx++) {
    let currentLayer = idx;
    let currentFence = '';
    
    let layerIndex = currentLayer;
    let innerWavelength = wavelength - (currentLayer - 1) * 2;
    let outerWavelength = (currentLayer - 1) * 2;
    if (currentLayer === 1 || currentLayer === numRails) {
      innerWavelength = wavelength;
      outerWavelength = wavelength;
    }
    let useInner = true;
    while (layerIndex <= length) {
      console.log(layerIndex);
      currentFence += message[layerIndex - 1];
      if (useInner) {
        layerIndex += innerWavelength;
      } else {
        layerIndex += outerWavelength;
      }

      useInner = !useInner;
    }
    fenceArr[currentLayer] = currentFence;
  }
  return fenceArr.join('');
}

function decrypt(message, numRails) {
  let decryptedMessage = [];
  let length = message.length;
  let wavelength = 2 * numRails - 2;
  let generalIndex = 0;
  for (let idx=1; idx <= numRails; idx++) {
    let currentLayer = idx;
    // let currentFence = '';
    
    let layerIndex = currentLayer;
    let innerWavelength = wavelength - (currentLayer - 1) * 2;
    let outerWavelength = (currentLayer - 1) * 2;
    if (currentLayer === 1 || currentLayer === numRails) {
      innerWavelength = wavelength;
      outerWavelength = wavelength;
    }
    let useInner = true;
    while (layerIndex <= length) {
      decryptedMessage[layerIndex - 1] = message[generalIndex];
      generalIndex++;
      if (useInner) {
        layerIndex += innerWavelength;
      } else {
        layerIndex += outerWavelength;
      }

      useInner = !useInner;
    }
    // fenceArr += currentFence;
  }
  return decryptedMessage.join('');
}

console.log(encode("WE ARE DISCOVERED FLEE AT ONCE", 3));
console.log(decrypt("WECRLTEERDSOEEFEAOCAIVDEN", 3));