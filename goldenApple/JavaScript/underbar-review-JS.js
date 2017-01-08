/**
 * Created by bomin on 16. 9. 30.
 */

// Comparison operators

 // ==, != : equality
 // ===, !== : strict equality / identity
 // <, >, <=, >= : relational operator / comparison operators(and equality operators)
 // When using equality operator with comparison operators, it should be in the right side of the comparison operator.



// part2 _.shuffle()

 // Array.slice() : Not effected original array.
 // Array.splice() : change the content of an array by removing existing elements and/or adding new elements.
 // slice() and splice() both method's results are array.
 // When I solving shuffle method, I want the spliced value pushed in the result array one by one.
 // Then I console.log the result array. That's not my thinking result.
 // I think about why result show different result from my expectation.
 // And I recognized the splice method return the value in array.
 // It should be flattened. So my solution was when splice the array, pushed index 0's value.
 // That was right for my expectation. The result was nice!