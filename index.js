// Code your solutions in this file

function printBadges(badges) {
  for (let i = 0; i < badges.length; i++) {
    console.log(`Welcome ${badges[i]}! You are employee #${(i+1)}.`);
  }
  return badges;
}


function tailsNeverFails() {
  let counter = 0;
  function maybeTrue () {
    return Math.random() >= 0.5;
  }
  while (maybeTrue()) {
    counter++;
    maybeTrue();
  }
  return (`You got ${} tails in a row!`);
}


//tailsNeverFails();
