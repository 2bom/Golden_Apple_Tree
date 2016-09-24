/*
 // Underbar part2 problem solving.

ex)
 _.contains = function(collection, target) {
     // TIP: Many iteration problems can be most easily expressed in
     // terms of reduce(). Here's a freebie to demonstrate!
     return _.reduce(collection, function(wasFound, item) {
         if (wasFound) {
            return true;    // I cannot understand this.
         }
         console.log("item : " + item);
            return item === target;
     }, false);
 };

 // solve : When flow meet the 'return', immediately escaping the function.
*/


/*
 // What is parameters and argument and argument objects.

ex)
 var add = function(a, b) {    // 'a' and 'b' are a parameters.
    return a + b;
 };

 add(1, 2);  // 1 is a argument. Also 2 is a argument.
             // {1, 2} is argument objects.
 add(1, 2, 3);  // 1, 2, 3 are arguments.
                // {1, 2, 3} is argument objects.

*/


/*
 // What is prototype, prototype chaining.

 ex)


 */