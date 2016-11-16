[Node.js] Use npm
=============

# node package manager(npm) 사용하기



## 0. 준비
###1. npm package로 만들어주기

  npm에서 package를 설치하기 위해서는 우선 package를 설치할 작업공간 자체를 npm의 package로 만들어줘야 한다.
  ```
    $ npm init
  ```

###2. package.json 생성

 init을 처음 하게되면 여러가지 입력해야 할 것들이 등장한다. 대충 입력해주면 입력된 값이 적용된 package.json파일이 생성된다.

###3. 'npm install'과 'npm install --save'

 이제 사용하고싶은 package를 npm으로 설치하면 되는데, 이떄 설치하는 방법에 옵션이 하나 있다. '--save'인데, 이것은 위에서 만들어진 package.json의 dependencies라는 항목으로 설치하는 package 기록하는 옵션이다. 내가 만들고 있는 project 또한 export를 할 수 있는 package이므로 누군가 이 package를 받아 사용할 때에 이 프로젝트에서 함께 사용되어야할 package들이 무엇인지 알 수 있어야 하고, 때로는 그것을 함께 다운로드 받을 수 있어야 한다. 때문에 --save를 통해 어떤 package들을 함께 사용해야 이 package가 제대로 동작하는지 기록해둬야 하는 것이다.

 --save를 하지 않는 경우의 필요성이 이해되기 전까지는 기본적으로 --save를 하기를 권장한다.




## 1. uglify-js 사용하기
  uglify-js는 코드의 실행에 영향을 미치지 않는 띄어쓰기, 줄바꿈 등의 데이터들을 제거시켜 파일을 최소화 시켜주는 모듈이다.

###1. Install uglify-js package using npm
  ```
  $ npm install uglify-js --save
  ```

###2. Usage

 \* Default usage form is like this :
  ```
    $ uglifyjs [input files] [options]
  ```

  1. Make file named 'pretty.js'.
  ```
  function hello(name){
    console.log('Hi, ' + name);
  }
  hello('user!');
  ```

  2. Execute uglifyjs.
  ```
    $ uglifyjs pretty.js

    function hello(name){console.log("Hi, "+name)}hello("egoing"); //result
  ```

  3. Execute uglifyjs with option mangle.
  ```
    $ uglifyjs pretty.js -m

    function hello(o){console.log("Hi, "+o)}hello("egoing"); //result
  ```
  Mangle is the option for data saving. It change variable's names into short not meaningful letter.

  4. Execute uglifyjs with mangle and save another file.
  ```
    $ uglifyjs pretty.js -o pretty.min.js -m

    // Save uglified code of pretty.js into pretty.min.js file.
  ```
  Uglified file used to named with '.min'.




## 2. underscore 사용하기

###1. Install underscore
  ```
  $ npm install underscore --save
  ```

###2. Usage

  1. Make underscore.js

  ```
  const _ = require('underscore');
  var arr = [3, 6, 9, 12];

  console.log(_.first(arr));
  ```

  2. Execute underscore.js

  ```
    $ node underscore.js
    3 // result
  ```
