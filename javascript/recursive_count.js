function recursiveCount(num = 0) {
  // want to print numbers 0-9
  // want to create a statement that as long as num is less than 10 then print each num
  //basically starting with num = 0 which is indeed less than 10 print 0 then move to next el (i) aka call function and repeat
  //now at 1 which is also less than 

  if (num < 10) {
    //as long as number is less than 10 print
    //start with 0 it is less than 10 so print 
    console.log("printing:", num)
    //moves on to the next num after printing
    //num = num +1
    num++
    console.log("updated num:", num)
    //calling recursive function again so since it started at 0 then moved to nect num 1
    //now saying recursiveCount(1) which is less than 10 and process repeats
    recursiveCount(num)
    //can also add the retun statement here to signal end of recursion
    //return 
  }
  //putting return outside the if statement because if inside the if statement any number is less than 10 
  //so starting at 0 since 0 is less than then 10 the if statement will assume it is done and won't go until a number is greater 10
  return 

  /*
   if (num >= 10) {
     return;
   }
 
   console.log(num);
   recursiveCount(num + 1);
   */
}

if (require.main === module) {
  recursiveCount();
}

module.exports = recursiveCount;

// OPTIONAL
// Please add your pseudocode to this file
// And a written explanation of your solution
