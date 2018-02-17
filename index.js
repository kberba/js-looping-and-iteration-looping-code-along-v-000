// Code your solutions in this file

function printBadges(badges) {
  for (let i = 0; i < badges.length; i++) {
    console.log(`Welcome ${badges[i]}! You are employee #${(i+1)}.`);
  }
  return badges;
}

function tailsNeverFails() {
  let counter = 0;
  let coinFlip = Math.random();
  while(coinFlip >= 0.5) {
    coinFlip;
    counter++;
  }  
  console.log(`You got ${counter} tails in a row!`);
}
