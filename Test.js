function rand5() {
  return Math.floor(Math.random() * 5) + 1;
}

function rand7() {
  let attempt;
  while (true) {
    attempt = rand5();
    if (attempt === 5) {
      let addOn;
      do {
        addOn = rand5();
      } while (addOn > 3);
      attempt += addOn - 1;
      break;
    } else {
      let skip;
      do {
        skip = rand5();
      } while (skip > 3);
      if (skip === 1) {
        break;
      }
    }
  }
  return attempt;
}
let result = [];
for (let idx = 0; idx < 100; idx++) {
  result.push(rand7());
}
console.log(result.reduce((sum, value) => sum + value) / 100);
