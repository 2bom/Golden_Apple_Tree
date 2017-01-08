[JavaScript] Check object or array.
==========

Usually we check type of something using <code>typeof</code> operator. But array is not identified by this way.
Because array is included in object. Then how can we check array and object.

## Using .isArray method.
If we have <code>var something</code>. And we should check is this array or object.

First, we can using isArray method.

```
var something1 = [];
console.log( Array.isArray(something1) ); // true;

var something2 = {};
console.log( Array.isArray(something2) ); // false;
```

## Using .constructor method.
In the same condition, we can use constructor method.

```
var something1 = [];
console.log( something1.constructor === Array ); // true;
console.log( something1.constructor === Object ); // false;

var something2 = {};
console.log( someghitn2.constructor === Array); // false;
console.log( something1.constructor === Object ); // true;
```