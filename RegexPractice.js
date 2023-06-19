function isUrl(url) {
  console.log(!!url.match(/^https?:\/\/\S+$/));
}

isUrl('http://launchschool.com');   // -> true
isUrl('https://example.com');       // -> true
isUrl('https://example.com hello'); // -> false
isUrl('   https://example.com');    // -> false

function fields(string) {
  console.log(string.split(/[\t|\s|,]+/)); // use " " rather than "\s"
}

fields("Pete,201,Student");
// -> ['Pete', '201', 'Student']

fields("Pete \t 201    ,  TA");
// -> ['Pete', '201', 'TA']

fields("Pete \t 201");
// -> ['Pete', '201']

fields("Pete \n 201");
// -> ['Pete', "\n", '201']

function mysteryMath(string) {
  console.log(string.replace(/[+\-*\/]/, '?'));
}

mysteryMath('4 + 3 - 5 = 2');
// -> '4 ? 3 - 5 = 2'

mysteryMath('(4 * 3 + 2) / 7 - 1 = 1');
// -> '(4 ? 3 + 2) / 7 - 1 = 1'

function mysteriousMath(string) {
  console.log(string.replace(/[+\-*\/]/g, '?'));
}

mysteriousMath('4 + 3 - 5 = 2');           // -> '4 ? 3 ? 5 = 2'
mysteriousMath('(4 * 3 + 2) / 7 - 1 = 1'); // -> '(4 ? 3 ? 2) ? 7 ? 1 = 1'

function danish(string) {
  console.log(string.replace(/\b(apple|blueberry|cherry)\b/, 'danish'));
}

danish('An apple a day keeps the doctor away')

danish('My favorite is blueberry pie')

danish('The cherry of my eye')

danish('apple. cherry. blueberry.')

danish('I love pineapple')



function formatDate(dateString) {
  console.log(dateString.replace(/^(\d\d\d\d)-(\d\d)-(\d\d)$/, '$3.$2.$1')); // doing (\d+) does not work
}

formatDate('2016-06-17'); // -> '17.06.2016'
formatDate('2016/06/17'); // -> '2016/06/17' (no change)



function formatDate2(dateString) {
  console.log(dateString.replace(/^(\d\d\d\d)([\-\/])(\d\d)\2(\d\d)$/, '$4.$3.$1'));
}

formatDate2('2016-06-17'); // -> '17.06.2016'
formatDate2('2017/05/03'); // -> '03.05.2017'
formatDate2('2015/01-31'); // -> '2015/01-31' (no change)