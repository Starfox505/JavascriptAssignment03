// 1. Write code to display a triangle in the console that looks similar to the following.
// You should use a loop to accomplish this.
// #
// ##
// ###
// ####
// ###
// ##
// #

/*

while (j <= 4){
    console.log(j);
    j++;
}

while (j >= 0){
    console.log(j);
    j--;
}
*/

let outputString = "";
for (let j = 1; j <= 4; j++)
  for (let i = 1; i <= j; i++) {
    outputString = outputString + "#";
  }
console.log(outputString);

for (let j = 1; j <= 4; j--)
  for (let i = 1; i <= j; i--) {
    outputString = outputString + "#";
  }
console.log(outputString);
