[JavaScript] Object to string
===========
Sometimes we need to change some object to string. What sould we do?
## How to change object to string.
### Using JSON.stringify() .
First way of the changing object to string, is JSON.stringify().
It used like this.
```
var obj = {0: 'apple', a: 6};
console.log(JSON.stringify(obj)); // '{"0": "apple", "a": 6}'
```
Look at the result, JSON.stringify literally change all part of the object to string.
That's very good method. But what if I want to get string that consist of object's values.

### Using for loop and conditional ternary operator.
This is the way I use.
```
var getArguments = '';
for(var key in arguments){
    getArguments = (getArguments === '' ? getArguments + arguments[key].toString() : getArguments + ', ' + arguments[key].toString());
}
```
If some functions applied this code has arguments {3, 1, 2, 3}, the getArguments result should be '3, 1, 2, 3'.