[JavaScript ?]
==========

## 1. Problem?

calculator를 만드는 도중, 숫자와 숫자를 연산한 결과가 예측과 다른 요상한 소수가 나오는 현상을 발견했다.

ex ) 31.7 - 0.01
     = 31.689999999999998

## 2. Searching
구글링을 조금 해보니까 **stackoverflow**에도 이런 현상에 대한 질문이 여러개 있었다.

* <h2>[ Question 1 ]</h2>

    > Why does JS screw up this simple math?
    ```
    document.write(.1 + .2)  // 0.3000000000000004
    document.write(.3 + .6)  // 0.8999999999999999
    ```

    질문의 요지를 한글로 옮기면 '자바스크립트로 연산을 하는데, 첫번째 경우에는 연산결과가 더 큰 수가 나오고 두번째 경우에는 더 작은 결과가 나온다. 이런 현상은 어떻게 고쳐야하는지 알고싶다.' 정도라고 할 수 있겠다.

    Link for question 1 : https://stackoverflow.com/questions/3439040

- <h2>[ Answer about Question1 ]</h2>
    질문에 달린 답변에서 이 문제가 일어나는 이유에 대해서 궁금증을 해소할 수 있었다. 이 문제는 *자바스크립트의 문제가 아니라 컴퓨터 자체에서 일어나는 문제*라는 것이 답변의 요지였다. 다음은 위 질문에 대한 답변을 나름대로 해석해서 옮긴 것이다.

    > 이것은 JS에서만 일어나는 문제가 아니라 컴퓨터라는 범위에서 일어나는 문제이다.
    Floating number는 사실 정확하게 decimal number를 담을 수가 없다. 왜냐하면 그것을 담는 binary라는 것이 다음과 같이 동작하기 때문이다.
    ```
    0.5 is store as b0.1
    but 0.1 = 1/10 so it's 1/16 + (1/10-1/16) = 1/16 + 0.0375
    0.0375 = 1/32 + (0.0375-1/32) = 1/32 + 00625 ... etc
    ```

    > 그렇기 때문에 binary의 0.1은 사실 0.00011...인 데, 그렇게 치면 이 숫자들은 무한소수로 표현되어야만 하지만 컴퓨터는 무한 반복을 하지 않고 어느 순간 멈추도록 만든다. 그래서 우리는 0.1대신에 0.00011 또는 0.09375를 결과로 보게되는 것이다.

    이하는 생략.

    \+ 좀 더 찾아보니 MDN에서도 이와같은 현상에 대한 언급이 되어있다.
    (https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript)

그렇다면 이제 이유는 알았는데 그래서 어떻게 처리를 해줘야 할까? 나는 stackoverflow에 올라와있는 또 다른 질문을 참고해서 이 문제를 해결했다.

* <h2>[ Question2 ]</h2>
    ```
    (.2 + .1) * 10 == 3
    ```
    > 질문의 요지는 위와같은 연산의 결과가 false로 반환되는데 이와 같은 현상을 바로잡는 방법이 무엇이 있을까하는 것이었다.

    Link for question 2 : http://stackoverflow.com/questions/5037839

- <h2>[ Answers About Question2 ]</h2>
    가장 추천을 많이 받은 답변은 epsilon이라는 것을 이용한 방법이었고, 그 아래에도 몇가지 비슷한 방법들이 있었는데 epsilon이라는 것을 왜 쓰는지 잘 모르겠어서 나는 아래 방법을 사용해서 문제를 해결했다.

    >
    ```
    x = (0.2 + 0.1).toFixed(2);
    alert((0.2 + 0.1) == 0.3); // false
    alert((0.2 + 0.1).toFixed(4) == 0.3); // true
     ```

    Javascript의 method인 .toFixed()를 이용하는 방법인데, 이와 비슷한 방법으로 .toPrecision()를 사용하는 방법이 있다.


## 3. Solve the Problem

### \-  .toFixed() and .toPrecision()

1. ***numObject.toFixed(n)***

    소수점 이하 n자리 까지, 반올림 된 결과값이 표시한다.

2. ***numObject.toPrecision(m)***

    전체 숫자의 자릿수가 m일 때 까지, 반올림 된 결과값을 표시한다.

```
var numObj = 5.123456;

console.log(numObj.toPrecision());    // logs '5.123456'
console.log(numObj.toPrecision(5));   // logs '5.1235'
console.log(numObj.toPrecision(2));   // logs '5.1'
console.log(numObj.toPrecision(1));   // logs '5'

numObj = 0.000123

console.log(numObj.toPrecision());    // logs '0.000123'
console.log(numObj.toPrecision(5));   // logs '0.00012300'
console.log(numObj.toPrecision(2));   // logs '0.00012'
console.log(numObj.toPrecision(1));   // logs '0.0001'

// note that exponential notation might be returned in some circumstances
console.log((1234.5).toPrecision(2)); // logs '1.2e+3'
```