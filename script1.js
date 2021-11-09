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

let j = 1;

while (j <= 4){
    console.log(j)
}

let k = 0;
let outputString = "";

while (k < j){
    outputString += "#";
    k++;
}

console.log(outputString);{
    j++;
}