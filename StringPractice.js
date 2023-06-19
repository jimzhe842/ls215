// Reverse a String

function reverse(string) {
  let result = string.split('').reverse().join('');
  console.log(result);
  return result;
}

reverse('hello');                  // returns "olleh"
reverse('The quick brown fox');    // returns "xof nworb kciuq ehT"

// Acronym

function acronym(string) {
  string = string.replace(/-/g, ' ');
  let result = string.split(' ').map(word => word[0].toUpperCase()).join('');
  console.log(result);
  return result;
}

acronym('Portable Network Graphics');                  // "PNG"
acronym('First In, First Out');                        // "FIFO"
acronym('PHP: HyperText Preprocessor');                // "PHP"
acronym('Complementary metal-oxide semiconductor');    // "CMOS"
acronym('Hyper-text Markup Language');                 // "HTML"

// Email Validation

function isValidEmail(email) {
  console.log(!!email.match(/^[A-Za-z0-9]+@[A-Za-z]+(\.[A-Za-z]+)+$/));
  return !!email.match(/^[A-Za-z0-9]+@[A-Za-z]+(\.[A-Za-z]+)+$/);
}


// isValidEmail('Foo@baz.com.ph');          // returns true
// isValidEmail('Foo@mx.baz.com.ph');       // returns true
// isValidEmail('foo@baz.com');             // returns true
// isValidEmail('foo@baz.ph');              // returns true
// isValidEmail('HELLO123@baz');            // returns false
// isValidEmail('foo.bar@baz.to');          // returns false
// isValidEmail('foo@baz.');                // returns false
// isValidEmail('foo_bat@baz');             // returns false
// isValidEmail('foo@bar.a12');             // returns false
// isValidEmail('foo_bar@baz.com');         // returns false
// isValidEmail('foo@bar.....com');         // returns false


// Matching Parentheses

function isBalanced(string) {
  let count = 0;
  let charArr = string.split('');
  for (let idx = 0; idx < charArr.length; idx++) {
    let char = charArr[idx];
    if (char === '(') {count++};
    if (char === ')') {count--};
    if (count < 0) { return false };
  }

  return count === 0;
}

console.log(isBalanced('What (is) this?'));        // true
console.log(isBalanced('What is) this?'));         // false
console.log(isBalanced('What (is this?'));         // false
console.log(isBalanced('((What) (is this))?'));    // true
console.log(isBalanced('((What)) (is this))?'));   // false
console.log(isBalanced('Hey!'));                   // true
console.log(isBalanced(')Hey!('));                 // false
console.log(isBalanced('What ((is))) up('));       // false

// Sentiment Analysis 1

let positiveWords = ['fortune', 'dream', 'love', 'respect', 'patience', 'devout', 'noble', 'resolution'];
let negativeWords = ['die', 'heartache', 'death', 'despise', 'scorn', 'weary', 'trouble', 'oppress'];

function sentiment(text) {
  let positiveSentiments = [];
  let negativeSentiments = [];
  let sentiment;

  text.split(/[\s\-]+/).forEach(word => {
    word = word.replace(/[^a-z]*/ig, '').toLowerCase();
    if (positiveWords.indexOf(word) > -1) {
      positiveSentiments.push(word);
    } else if (negativeWords.indexOf(word) > -1) {
      negativeSentiments.push(word);
    }
  });
  let positiveLength = positiveSentiments.length;
  let negativeLength = negativeSentiments.length;
  if (positiveLength > negativeLength) {
    sentiment = "Positive";
  } else if (positiveLength === negativeLength) {
    sentiment = "Neutral";
  } else if (positiveLength < negativeLength) {
    sentiment = "Negative";
  }

  console.log(`There are ${positiveLength} positive words in the text.\nPositive sentiments: ${positiveSentiments}\n
There are ${negativeLength} negative words in the text.\nNegative sentiments: ${negativeSentiments}\n
The sentiment of the text is ${sentiment}.
  `);
}

let textExcerpt = 'To be or not to be-that is the question:\n' +
  'Whether \'tis nobler in the mind to suffer\n' +
  'The slings and arrows of outrageous fortune,\n' +
  'Or to take arms against a sea of troubles,\n' +
  'And, by opposing, end them. To die, to sleep-\n' +
  'No more-and by a sleep to say we end\n' +
  'The heartache and the thousand natural shocks\n' +
  'That flesh is heir to-\'tis a consummation\n' +
  'Devoutly to be wished. To die, to sleep-\n' +
  'To sleep, perchance to dream. Aye, there\'s the rub,\n' +
  'For in that sleep of death what dreams may come,\n' +
  'When we have shuffled off this mortal coil,\n' +
  'Must give us pause. There\'s the respect\n' +
  'That makes calamity of so long life.\n' +
  'For who would bear the whips and scorns of time,\n' +
  'Th\' oppressor\'s wrong, the proud man\'s contumely, [F: poor]\n' +
  'The pangs of despised love, the law’s delay, [F: disprized]\n' +
  'The insolence of office, and the spurns\n' +
  'That patient merit of the unworthy takes,\n' +
  'When he himself might his quietus make\n' +
  'With a bare bodkin? Who would fardels bear, [F: these Fardels]\n' +
  'To grunt and sweat under a weary life,\n' +
  'But that the dread of something after death,\n' +
  'The undiscovered country from whose bourn\n' +
  'No traveler returns, puzzles the will\n' +
  'And makes us rather bear those ills we have\n' +
  'Than fly to others that we know not of?\n' +
  'Thus conscience does make cowards of us all,\n' +
  'And thus the native hue of resolution\n' +
  'Is sicklied o\'er with the pale cast of thought,\n' +
  'And enterprises of great pitch and moment, [F: pith]\n' +
  'With this regard their currents turn awry, [F: away]\n' +
  'And lose the name of action.-Soft you now,\n' +
  'The fair Ophelia.-Nymph, in thy orisons\n' +
  'Be all my sins remembered';

  sentiment(textExcerpt);


// Sentiment Analysis 2

let positiveRegex = /\bfortunes?\b|\bdream(s|t|ed)?\b|love(s|d)?\b|respect(s|ed)?\b|\bpatien(ce|t)?\b|\bdevout(ly)?\b|\bnobler?\b|\bresolut(e|ion)?\b/gi;
let negativeRegex = /\bdie(s|d)?\b|\bheartached?\b|death|despise(s|d)?\b|\bscorn(s|ed)?\b|\bweary\b|\btroubles?\b|\boppress(es|ed|or('s)?)?\b/gi;

function sentiment2(text) {
  let textArr = text.match(/\b[a-z']+\b/ig);
  let positiveSentiments = textArr.filter(word => word.match(positiveRegex));
  let negativeSentiments = textArr.filter(word => word.match(negativeRegex));
  let positiveLength = positiveSentiments.length;
  let negativeLength = negativeSentiments.length;
  let sentiment;
  if (positiveLength > negativeLength) {
    sentiment = "Positive";
  } else if (positiveLength === negativeLength) {
    sentiment = "Neutral";
  } else if (positiveLength < negativeLength) {
    sentiment = "Negative";
  }
  console.log(`There are ${positiveLength} positive words in the text.\nPositive sentiments: ${positiveSentiments}\n
There are ${negativeLength} negative words in the text.\nNegative sentiments: ${negativeSentiments}\n
The sentiment of the text is ${sentiment}.
  `);
}

sentiment2(textExcerpt);

// Mail Count

function mailCount(emailData) {
  let emailArr = emailData.split('#||#');
  let dateArr = [];
  emailArr.forEach(email => {
    dateArr.push(email.match(/\d\d-\d\d-\d{4}/));
  });
  // let startDate = dateArr[0];
  // let endDate = dateArr[1];
  // dateArr.slice(1).forEach(date => {

  //   if (date < startDate) {
  //     startDate = date;
  //   } else if (date > endDate) {
  //     endDate = date;
  //   }
  // });
  
  let mailCount = dateArr.length;
  dateArr = dateArr.map(dateString => new Date(dateString));
  dateArr.sort((a,b) => a - b);

  let startDate = (dateArr[0].toString()).slice(0,15);
  let endDate = (dateArr[1].toString()).slice(0,15);

  console.log(`Count of Email: ${mailCount}`);
  console.log(`Date Range: ${startDate} - ${endDate}`);
}

var emailData = "From: foo@bar.com#/#\nSubject: Nunc in justo eros. Aliquam.#/#\nDate: 07-27-2016#/#\nTo: foo@bar.com#/#\nEtiam convallis commodo tortor, dapibus auctor dolor semper consequat. Sed lobortis eros nec ante porta, eu placerat sapien interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi consectetur et odio vitae volutpat. Curabitur imperdiet orci metus, et dignissim nisl lacinia non. Aenean volutpat diam in lorem iaculis, sit amet volutpat nibh dictum. Quisque vel vulputate nisi. Nam a vestibulum turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi interdum leo id velit aliquet, at vestibulum ipsum molestie. Cras eu lobortis libero. In rutrum non leo id ultricies. Aliquam in ex ut nibh placerat sollicitudin vitae id magna.##||##\n\nFrom: baz@foo.com#/#\nSubject: Aenean cursus velit non arcu.#/#\nDate: 08-11-2016#/#\nTo: baz@foo.com#/#\nCras ex leo, faucibus id mollis a, dignissim sit amet metus. Sed dui massa, mollis in tristique ut, auctor quis tortor. Donec egestas velit purus, eget laoreet urna venenatis id. Etiam eget ultrices tortor. Duis venenatis leo mi, non porta est molestie at. Nulla lacus nisl, dapibus convallis massa ut, dignissim euismod lacus. Ut vel magna lectus. Morbi sit amet vulputate arcu. Cras non ante arcu. Nam tempor iaculis ipsum eget tincidunt. Praesent imperdiet varius dui, vel egestas ipsum porta in. Sed suscipit massa in neque lobortis congue.##||##\n\nFrom: qux@bar.com#/#\nSubject: Sed hendrerit felis in ex.#/#\nDate: 06-25-2016#/#\nTo: qux@bar.com#/#\nNulla quis est vitae orci tincidunt convallis sit amet ut libero. Sed eu facilisis justo. Maecenas sed ultrices urna. Sed malesuada justo sed magna sodales, eget congue dolor convallis. Vestibulum vel consectetur nunc. Morbi at tincidunt turpis, eget imperdiet orci. Curabitur laoreet ipsum a quam facilisis, eu aliquet lectus viverra. Maecenas ullamcorper rutrum dui, ac aliquet mi pulvinar sit amet.##||##\n\nFrom: quux@foo.com#/#\nSubject: Curabitur tincidunt elit nec risus.#/#\nDate: 07-24-2016#/#\nTo: quux@foo.com#/#\nCurabitur interdum dictum consectetur. Nulla facilisi. Quisque sed tellus consectetur, vestibulum quam sed, lacinia mauris. Nunc risus dolor, feugiat nec erat at, elementum tempor urna. Vivamus facilisis elementum congue. Cras dui libero, vehicula eget porttitor sed, sagittis quis dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam lacinia nulla nisi, vel finibus ligula sodales quis. Maecenas vulputate, leo auctor venenatis pretium, lectus elit eleifend odio, nec molestie ligula ex eget tellus. Nullam a nibh ut enim efficitur elementum. Nunc non elit vitae tortor iaculis ornare in id risus. Integer finibus lobortis lorem, id rutrum elit congue id. In hac habitasse platea dictumst.##||##\n\nFrom: garply@foo.com#/#\nSubject: Integer nec nunc facilisis, ultricies.#/#\nDate: 07-03-2016#/#\nTo: garply@foo.com#/#\nFusce rhoncus purus nisi, vel blandit felis fermentum sed. Vestibulum ultricies rutrum dui nec vehicula. Proin quis semper nulla. Maecenas congue, leo nec feugiat dapibus, dui metus facilisis elit, non finibus leo nisl at est. Donec varius, turpis non pulvinar sodales, nulla nulla posuere ligula, nec eleifend quam metus ut tortor. Sed semper vestibulum mattis. Nullam et ornare eros. Aliquam sed pellentesque dui, ut consequat neque. Integer luctus turpis ultrices, congue erat mattis, vehicula tellus. Pellentesque tincidunt posuere nibh pretium tincidunt. In hac habitasse platea dictumst.";



mailCount(emailData);



// Code Review: Longest Sentence

let longText = 'Four score and seven years ago our fathers brought forth' +
  ' on this continent a new nation, conceived in liberty, and' +
  ' dedicated to the proposition that all men are created' +
  ' equal.' +
  ' Now we are engaged in a great civil war, testing whether' +
  ' that nation, or any nation so conceived and so dedicated,' +
  ' can long endure. We are met on a great battlefield of that' +
  ' war. We have come to dedicate a portion of that field, as' +
  ' a final resting place for those who here gave their lives' +
  ' that that nation might live. It is altogether fitting and' +
  ' proper that we should do this.' +
  ' But, in a larger sense, we can not dedicate, we can not' +
  ' consecrate, we can not hallow this ground. The brave' +
  ' men, living and dead, who struggled here, have' +
  ' consecrated it, far above our poor power to add or' +
  ' detract. The world will little note, nor long remember' +
  ' what we say here, but it can never forget what they' +
  ' did here. It is for us the living, rather, to be dedicated' +
  ' here to the unfinished work which they who fought' +
  ' here have thus far so nobly advanced. It is rather for' +
  ' us to be here dedicated to the great task remaining' +
  ' before us -- that from these honored dead we take' +
  ' increased devotion to that cause for which they gave' +
  ' the last full measure of devotion -- that we here highly' +
  ' resolve that these dead shall not have died in vain' +
  ' -- that this nation, under God, shall have a new birth' +
  ' of freedom -- and that government of the people, by' +
  ' the people, for the people, shall not perish from the' +
  ' earth.';

function longestSentence(text) {
  let sentencesArr = text.match(/\b.*?[\.\?\!]+?/g); // use lazy matching
  let sentencesLengthArr = sentencesArr.map(sentence => sentence.split(' ').length);
  let longestSentence;
  let longestLength = -Infinity;
  
  sentencesLengthArr.forEach((sentenceLength, index) => {
    if (sentenceLength > longestLength) {
      longestLength = sentenceLength;
      longestSentence = sentencesArr[index];
    }
  });

  console.log(longestSentence);
  console.log(`The longest sentence has ${longestLength} words`);
}

longestSentence(longText);


