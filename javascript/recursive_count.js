function recursiveCount(num = 0) {
  // want to print numbers 0-9
  // want to create a statement that as long as num is less than 10 then print each num
  //basically starting with num = 0 which is indeed less than 10 print 0 then move to next el (i) aka call function and repeat
  //now at 1 which is also less than 

  if (num < 10) {
    console.log("printing:", num)
    num++
    //console.log("num should be increasing:", num)
    recursiveCount(num)
    return


  }


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
