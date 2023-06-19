function myForEach(array, func) {
  for (let idx = 0; idx < array.length; idx++) {
    func(array[idx], idx, array);
  }
}

function myFilter(array, func) {
  let filteredList = {};
  // myForEach(array, (value) => {if (func(value)) {filteredList.push(value)}});
  array.forEach(value => {
    if (func(value)) {
      filteredList.push(value);
    }
  });
  return filteredList;
}

function myMap(array, func) {
  let result = {};
  array.forEach(value => result.push(func(value)));
  return result;
}

function myReduce(array, func, initial) {
  let copy = array.slice();
  accumulator = initial || copy.pop();
  copy.forEach(value => {
    accumulator = func(accumulator, value);
  });
  return accumulator;
}

let smallest = (result, value) => (result <= value ? result : value);
let sum = (result, value) => result + value;

console.log(myReduce([5, 12, 15, 1, 6], smallest));           // 1
console.log(myReduce([5, 12, 15, 1, 6], sum, 10));            // 49


function myOwnEvery(array, func) {
  for (let idx = 0; idx < array.length; idx++) {
    let value = array[idx];
    if (!func(value)) {
      return false;
    }
  }
  return true;
}

// Practice Questions

function totalArea(rectangles) {
  return rectangles.reduce((sum, currentRectangle) => {
    return sum + (currentRectangle[0] * currentRectangle[1]);
  })
}


function totalSquareArea(rectangles) {
  return totalArea(rectangles.filter(rectangle => rectangle[0] === rectangle[1]));
}


function processReleaseData(data) {
  return data.filter(release => release.id && release.title).map(release => {
    return {
      id: release.id,
      title: release.title
    }
  });
}

function octalToDecimal(numberString) { // issues: if you use reduceRight the index are not correct (also used wrong power symbol)
  console.log(numberString.split('').reverse().reduce((sum, char, index) => {
    return sum + Number(char) * (8 ** (index));
  }, 0));
}

octalToDecimal('1');           // 1
octalToDecimal('10');          // 8
octalToDecimal('130');         // 88
octalToDecimal('17');          // 15
octalToDecimal('2047');        // 1063
octalToDecimal('011');         // 9



function anagram(word, list) {
  return list.filter(candidate => word.split('').sort().join('') === candidate.split('').sort().join(''));
}

function processBands(data) {
  function capitalizeFirstLetter(word) {
    return word[0].toUpperCase() + word.slice(1);
  }
  data.forEach(band => {
    let name = band.name;
    name = name.split(' ').map(capitalizeFirstLetter).join(' ');
    name = name.split('').filter(char => char !== '.').join('');
    band.name = name;
    band.country = 'Canada';
  });
  return data;
}



// Class

function findAverage(grades) {
  return grades.reduce((sum, value) => sum + value) / grades.length;
}

function findMinimum(grades) {
  return grades.reduce((min, value) => {
    if (value < min) {
      return value;
    } else {
      return min;
    }
  });
}

function findMaximum(grades) {
  return grades.reduce((max, value) => {
    if (value > max) {
      return value;
    } else {
      return max;
    }
  });
}

function findLetterGrade(finalScore) {
  if (finalScore >= 93) {
    return 'A';
  } else if (finalScore >= 85) {
    return 'B';
  } else if (finalScore >= 77) {
    return 'C';
  } else if (finalScore >= 69) {
    return 'D';
  } else if (finalScore >= 60) {
    return 'E';
  } else {
    return 'F';
  }
}

function findFinalScore(examScore, exercsesScore) {
  return 0.65 * examScore + 0.35 * exercsesScore;
}

function findSum(grades) {
  return grades.reduce((sum, value) => sum + value);
}



function generateClassRecordSummary(studentScores) {
  let grades = {studentGrades: [], exams: []};
  let examScores = [];
  Object.keys(studentScores).map(studentKey => {
    let student = studentScores[studentKey];
    let scores = student.scores;
    let exams = scores.exams;

    exams.forEach((examScore, index) => {
      examScores[index] = examScores[index] || [];
      examScores[index].push(examScore);
    })
    let exercises = scores.exercises;
    let examAverage = findAverage(exams);
    let exercisesScore = findSum(exercises);
    let finalScore = Math.round(findFinalScore(examAverage, exercisesScore));
    let letterGrade = findLetterGrade(finalScore);
    grades.studentGrades.push(`${finalScore} (${letterGrade})`);
  });
  console.log(examScores);
  grades.exams = examScores.map(examSet => {
    return {
      average: findAverage(examSet),
      minimum: findMinimum(examSet),
      maximum: findMaximum(examSet)
    };
  });
  return grades;
}

let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

console.log(generateClassRecordSummary(studentScores));


// List processing Exercises


function sum2(digits) {
  return String(digits).split('').reduce((sum, value) => sum + Number(value), 0);
}





function alphabeticNumberSort(array) {
  const NUMBER_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five',
                        'six', 'seven', 'eight', 'nine', 'ten', 'eleven',
                        'twelve', 'thirteen', 'fourteen', 'fifteen',
                        'sixteen', 'seventeen', 'eighteen', 'nineteen'];

  let result = array.map(number => NUMBER_WORDS[number]);
  return result.sort().map(letter => NUMBER_WORDS.indexOf(letter));
}

console.log(alphabeticNumberSort([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));



function multiplyAllPairs(arr1, arr2) {
  let result = [];
  arr1.forEach(number => {
    arr2.forEach(number2 => {
      result.push(number * number2);
    })
  });
  return result.sort((a, b) => a - b);
}


function sumOfSums(arr) {
  return arr.reduce((sum, number, index) => {
    // console.log(index);
    return sum + arr.slice(0, index + 1).reduce((sum, value) => sum + value);
  });
}

console.log(sumOfSums([1,2,3]));


function leadingSubstrings(string) {
  return string.split('').map((_,index) => string.slice(0, index + 1));
}

console.log(leadingSubstrings('abc'));


function substrings(string) {
  return string.split('').reduce((accum,_,index) => {
    let substring = string.slice(index, string.length);
    return accum.concat(leadingSubstrings(substring));
  }, []);
}

console.log(substrings('abcde'));

function palindromes(string) {
  let substrings = substrings(string);
  substrings = substrings.filter(string => {
    return string.length > 1 && string === string.split('').reverse().join('');
  });
  return substrings;
}

function buyFruit(fruits) {
  return fruits.reduce((accum, fruit) => {
    let length = fruit[1];
    let arr = new Array(length);
    arr.fill(fruit[0]);
    return accum.concat(arr); //`${fruit[0]} `.repeat(fruit[1]).split(' '));
  }, []);
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));


function transactionsFor(id, arr) {
  return arr.filter(transaction => transaction.id === id);
}

function isItemAvailable(id, arr) {
  let transactions = transactionsFor(id, arr);
  return transactions.reduce((sum, transaction) => {
    let multiplier = (transaction.movement === 'in') ? 1 : -1;
    return sum + transaction.quantity * multiplier;
  }, 0) > 0;
}

let findSum = function(transactions) {
  transactions.reduce((sum, transaction) => {
    let multiplier = (transaction.movement === 'in') ? 1 : -1;
    return sum + transaction.quantity * multiplier;
  }, 0);
}

const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                       { id: 105, movement: 'in',  quantity: 10 },
                       { id: 102, movement: 'out', quantity: 17 },
                       { id: 101, movement: 'in',  quantity: 12 },
                       { id: 103, movement: 'out', quantity: 15 },
                       { id: 102, movement: 'out', quantity: 15 },
                       { id: 105, movement: 'in',  quantity: 25 },
                       { id: 101, movement: 'out', quantity: 18 },
                       { id: 102, movement: 'in',  quantity: 22 },
                       { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true
