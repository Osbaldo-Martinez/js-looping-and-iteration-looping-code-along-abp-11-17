// Code your solutions in this file
function printBadges(names){
  for (let i = 0; i < names.length; i++){
    console.log(`Welcome ${names[i]}! You are employee #${i+1}.`)
  }
  return names;
}
function tailsNeverFails(){
  let x = 0;
  while (math.random() >= .5){
    x++;
  }
  return console.log(`You got ${x+1} tails in a row!`)
}
