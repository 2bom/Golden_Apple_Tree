[Node.js] Node.js intro
==========

# 간단한 웹 어플리케이션 만들기
이번 강의에서는 Node.js에서 제공하는 샘플 코드로 웹서버를 만들어 돌려보고 Node.js가 어떤식으로 동작하는지 알아본다.

## 0. 준비
Node.js를 설치한다. Node.js 홈페이지( https://nodejs.org/ko/ )에서 설치파일을 다운로드해도 되고, terminal로 설치하려면 아래와 같이하면 된다.
```
  $ sudo apt-get install curl
  $ curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
  $ sudo apt-get install -y nodejs
```

## 1. helloWorld.js 생성

\- helloWorld.js
```
  // 생활코딩 사이트에서 제공하는 샘플 코드(Nodejs 5.X 버전).

  const http = require('http');

  const hostname = '127.0.0.1'; // server computer's IP
  const port = 1337; // port number

  http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
  }).listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
```

> 이 코드를 알기 위해 알아야 하는 지식.

> 1. client : 요청하는 쪽 컴퓨터
> 2. server : 응답하는 쪽 컴퓨터
> 3. IP address : 실제 컴퓨터가 가지고 있는 주소
> 4. Domain name : 사람이 기억하기 쉽도록 'IP Address'에 붙이는 이름
> 5. port : 컴퓨터에 존재하는 문. 0부터 65535번 문이 존재한다. 보통 80번 문(포트)는 웹서버를 연결하는데, 이를 웹서버가 80번 포트를 Listening하게 만든다고 말한다.

     * 만약 'server.com'이라는 서버에 웹서버, 게임서버, 채팅서버, DB서버 등등이 함께 존재하고
       웹서버는 80번 포트, 게임서버는 1337번 포트에 연결되어 Listening하고 있다면.

     'http://server.com:80'를 브라우저에서 요청했을 경우에는 웹서버가 응답하고.
     'http://server.com:1337'을 부라우저에서 요청했을 경우에는 게임서버가 응답하게 된다.

     + 80번 포트는 보편적으로 웹서버를 위한 포트로 많이 사용된다.
       따라서 'http://'라는 주소를 입력할 경우 컴퓨터는 이미 웹서버에 요청을 보내는 것이라고 알 수가 있으므로
       80번 포트는 생략이 가능하다(이거슨 약속!).


## 2. 샘플 코드 해석

1. require()를 이용해 nodejs의 'http'라는 모듈을 불러온다.
2. hostname과 port를 설정한다.
3. 'http' 모듈에 내장된 createServer method를 사용하여 서버를 구축하고,
4. 만들어진 서버가 위에 설정한 hostname과 port를 listen하도록 한다.


## 3. Another sample code

\- platform.js
```
  var o = require('os');

  console.log(o.platform());
```
os 모듈은 os와 관련된 method들을 가지고 있다.
os 모듈에 내장되어있는 platform method는 요청을하는 컴퓨터의 platform이 무엇인지 알려주는 method이다.

ubuntu에서 동작시켰을 때
```
  $ node platform.js
  linux
```