// Uppercase Check

function isUppercase(word) {
  console.log(word.toUpperCase() === word);
  return word.toUpperCase() === word;
}

isUppercase('t');               // false
isUppercase('T');               // true
isUppercase('Four Score');      // false
isUppercase('FOUR SCORE');      // true
isUppercase('4SCORE!');         // true
isUppercase('');                // true

// Delete Vowels

function removeVowels(wordsArr) {
  console.log(wordsArr.map(word => word.replace(/[aeiou]/ig, '')));
  return wordsArr.map(word => word.replace(/[aeiou]/ig, ''));
}


removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]

// Lettercase Counter

function letterCaseCount(string) {
  let length = string.length;
  let lowerCase = string.match(/[a-z]/g) || [];
  let upperCase = string.match(/[A-Z]/g) || [];
  let lowerCaseCount = lowerCase.length;
  let upperCaseCount = upperCase.length;
  let neitherCount = length - lowerCaseCount - lowerCaseCount;
  let result = {lowercase: lowerCaseCount, upperCase: upperCaseCount, neither: neitherCount};
  console.log(result);
  return result;
}

letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }

// Capitalize Words

function wordCap(string) {
  let result = string.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
  console.log(result);
  return result;
}

wordCap('four score and seven');       // "Four Score And Seven"
wordCap('the javaScript language');    // "The Javascript Language"
wordCap('this is a "quoted" word');    // 'This Is A "quoted" Word'



// Swap Case

function swapCase(string) {
  let result = string.split('').map((char) => {
    return char.match(/[a-z]/) ? char.toUpperCase() : char.toLowerCase();
  }).join('');

  console.log(result);
  return result;
}

swapCase('CamelCase');              // "cAMELcASE"
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"

// Staggered Caps Part 1

function staggeredCase(string) {
  let result = string.split('').map((char, index) => index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()).join('');
  console.log(result);
  return result;
}

staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
staggeredCase('ignore 77 the 4444 numbers');   // "IgNoRe 77 ThE 4444 nUmBeRs"

// Staggered Caps Part 2

function staggeredCase2(string) {
  let index = 0;
  let result = string.split('').map((char) => {
    if (char.match(/[a-z]/i)) {
      if (index % 2 === 0) {
        char = char.toUpperCase();
      } else {
        char = char.toLowerCase();
      }
      index++;
    }
    return char;
  }).join('');
  console.log(result);
  return result;
}

staggeredCase2('I Love Launch School!');        // "I lOvE lAuNcH sChOoL!"
staggeredCase2('ALL CAPS');                     // "AlL cApS"
staggeredCase2('ignore 77 the 444 numbers');    // "IgNoRe 77 ThE 444 nUmBeRs"

// How Long Are You

function wordLengths(words) {
  if (words === undefined || words === '') {
    let result = [];
    console.log(result);

    return result;
  }
  let wordsArr = words.split(' ');
  let result = wordsArr.map(word => `${word} ${word.length}`);
  console.log(result);
  return result;
}

wordLengths('cow sheep chicken');
// ["cow 3", "sheep 5", "chicken 7"]

wordLengths('baseball hot dogs and apple pie');
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

wordLengths("It ain't easy, is it?");
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

wordLengths('Supercalifragilisticexpialidocious');
// ["Supercalifragilisticexpialidocious 34"]

wordLengths('');      // []
wordLengths();        // []

// Search Word Part 1

function searchWord(string, text) {
  if (!string || !text) {
    console.log("Missing at least one input");
    return;
  }
  string = `\\b${string}\\b`; // \b does not work
  let regex = new RegExp(string, 'gi');
  let matches = text.match(regex) || [];
  console.log(matches.length);
  return matches.length;
}

const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

searchWord('sed', text);      // 3

// Search Word Part 2


function searchWord2(string, text) {
  if (!string || !text) {
    console.log("You forgot at least one input");
    return;
  }
  let regexStr = `\\b${string}\\b`;

  let regex = new RegExp(regexStr, 'gi');
  let result = text.replace(regex, `**${string.toUpperCase()}**`);
  console.log(`**${string.toUpperCase()}**`);
  console.log(result);
  return result;
}

const text2 = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

console.log(searchWord2('sed', text2));
// returns
// "**SED** ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, **SED** quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, **SED** quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
