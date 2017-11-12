// Code your solutions in this file
function printBadges(names){
  for (let i = 0; i < names.length - 1; i++){
    console.log(`Welcome ${names[i+1]}! You are employee #${i+1}.`);
    return names;
  }
}
