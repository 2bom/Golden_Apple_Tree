[Regular Expressions] RegExp
==========
RegExp basic study.
## RegExp syntax.
### Creating a regular expression.
```
var re = /ab+c/;
var re = /ab+c/g;
var re = new RegExp("ab+c");
```

### Basic regular expression pattern.

* ^   (= not)

    > ^A

    > 'another A'

* $

    > ex) t$

    > 마지막글자 매칭. ea<u>t</u> (O), ca<u>t</u>(O), eater (X)

* {n}

    > ex) a{3}

    > 'candy' (X), 'C<u>aaa</u>ndy' (O), 'sd<u>aaa</u>aaadfl' (O)

* \b

    > ex ) at\b (띄어쓰기)

    > 'greatest' (X), 'gre<u>at </u>job' (O), 'gre<u>at </u>   job' (O)

    > 이것도 다른 문자들과 동일하게 '\b' 한번만 쓰면 띄어쓰기 한 칸만 인식된다. 만약 띄어쓰기를 모두 인식시키고 싶다면 '\b*' 이런식으로 사용해야한다.

* \d = ([0-9])

    > 'a' (X), '<u>4</u>' (O), '<u>9</u>' (O)


## RegExp and String methods.

| Method    | Description                                                     |type           |
| --------- |-----------------------------------------------------------------|---------------|
| exec      | 일치하는 string 찾음. 있으면 array 반환, 없으면 null 반환.            | RegExp method |
| test      | 일치하는 string 있는지 없는지 확인. 있으면 true, 없으면 false 반환.     | RegExp method |
| match     | 일치하는 string 찾음. 있으면 array, 없으면 null 반환.         | String method |
| search    | 일치하는 string 있는지 없는지 확인. 있으면 일치하는 값의 index반환, 없으면 -1.| String method |
| replace   | 일치하는 string을 replacement substring으로 변환 | String method |
| split     | string을 break하여 array of substrings로 변환. | String method |


### RegExp methods usage.
```
var myReg = /d(b+)d/g;
var myString = "cdbbdbsbz";

// RegExp methods : exec, test
myReg.exec(myString);
myReg.test(myString);

// RegExp methods : match, search, replace, split
myString.match(myReg);
myString.search(myReg);
myString.replace(myReg);
myString.split(myReg);
```


### Example of replace().
```
var re = /(\w+)\s(\w+)/;
var str = "John Smith";
var newstr = str.replace(re, "String for replacement.");
console.log(newstr);
```

> ** $1, $2 ... $9 란? **

> 정규식에서 괄호를 사용하는 경우 괄호에 매치되는 순서대로 $1, $2, ... $9라는 것에 저장된다.