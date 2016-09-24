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
 // Difference '+=' operator between '=,+'.

 ex)
    var temp1 = "";
    temp1 += (1 % 2) === 0; // return temp1 = "false"(string);
    temp1 += (2 % 2) === 0; // return temp1 = "falsetrue"(string);

    var temp2 = "";
    temp2 = temp2 + (1 % 2) === 0; // return temp2 = false(boolean);
                                   // Because, "" + 1 === 0 > "1" === 0 > false(boolean); return temp2 = false;
    temp2 = temp2 + (2 % 2) === 0; // return temp2 = true(boolean);
                                   // Because, false + 0 === 0 > 0 === 0 > true(boolean); return temp2 = true;
                                   // ** false + 0 === 0. this is specific result in javascript. Truthy and falsy values's operating are a little weird.

    // conclusion : += and =,+ is not always exact same operation.

    // variable += someConditions;
    // This operation means comeConditions operating first.
    // And after that plus previous variable in the left side of the operated someCondition result.
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