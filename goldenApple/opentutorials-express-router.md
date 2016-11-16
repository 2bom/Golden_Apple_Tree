[Node.js]
==========
\--*** 본 문서의 모든 내용은 linux(ubuntu) 기준입니다.***--
## 0. 준비
1. Node.js와 npm을 설치한다.
2. 프로젝트를 진행하고 있는 폴더를 npm package 폴더로 만든다(npm init).
3. 위의 상황이 모두 갖춰져 있다면 그냥 npm을 통해 express를 설치하고 다음으로 넘어간다.
```
  $ npm install express --save
```

## 1. app.js 생성
\- app.js

```
  // express package를 app.js에서 사용할 수 있게끔 require
  var express = require('express');
  var app = express();

  // GET 방식으로 들어온 유저에 대해서 처리해줌
  app.get('/', function(req, res){
    res.send('Hello home page');
  });
  app.get('/login', function(req, res){
    res.send('Login please');
  });

  // 이 어플리케이션은 3000번 포트를 listening
  // 즉, app.js를 node로 실행시키면 localhost 3000번 포트에서 동작
  app.listen(3000, function(){
    console.log('Connected 3000 port!');
  });
```
### - 1. router란?
 app.js의 코드에서 볼 수 있는
  ```
  app.get('/', function(req, res){
    res.send('Hello home page');
  });
  ```
  ```
  app.get('/login', function(req, res){
    res.send('Login please');
  });
  ```
 이 코드들은 각각 router라고 불린다. routing을 해주기 위해 사용되었다.

router의 뜻은 길을 찾아주는 것, 연결해주는 것이라는 뜻이다. ***사용자가 어떤 요청을 하면 그 요청에 맞는 router가 응답을 하고, 응답한 router는 사용자의 요청에 맞는 동작을 연결시켜 준다.***

>express에서 routing을 할 때 사용하는 기본 포맷 :
```
app.METHOD(PATH, HANDLER)
>```

### - 2. get이란?

GET과 POST는 HTTP프로토콜을 이용해서 서버에 무언가를 전달할 때 사용하는 방식이디. 이때 URL에 정보들이 보여지는 방식을 GET 방식이라고 하고, 그렇지 않은 방식을 POST 방식이라고 부른다.

* *GET*
  - URL에 변수를 포함시켜 요청
  - 데이터가 헤더에 포함되어 전달됨
  - 데이터를 가져오는 것(가져오기, 조회)
  - URL의 규격에 따라 너무 긴 정보가 들어가면 임의로 정보가 짤릴 수 있다.

* *POST*
  - URL에 데이터가 노출되지 않음
  - 데이터가 본문(BODY)에 포함되어 전달됨
  - 어떠한 동작을 수행하는 것(입력, 수정)
  - 데이터가 중간이 끊기지 않고 전송될 수 있다.

\* BUY POST라고 데이터를 완전 안전하게 옮기는 건 절대 아니다. 보안을 생각한다면 HTTPS, SSL에 대하여 더 알아보자.

### Appendix
* routing과 관련한 express document - https://expressjs.com/en/starter/basic-routing.html
* GET, POST에 대한 HTTP document - https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.3
