[Node.js] Sync VS Async
==========
동기 방식, 비동기 방식이 무엇인지 알아봅니다.
Node.js에서 동기, 비동기 방식을 어떻게 사용하고 있는지 알아봅니다.

##0. 준비
  Node.js가 깔려있어야 합니다.

##1. 동기(sync), 비동기(async)란?
  * When you execute something **synchronously**, you wait for it to finish before moving on to another task.
  * 동기 (synchronous: 동시에 일어나는, 同期: 같은 시기)
  동기란 동시에 일어난다는 말입니다. 무엇이 동시에 일어날까요? 요청과 그 결과가 동시에 일어난다는 약속입니다. 바로 요청을 하면 그 요청한 자리에서 바로 결과가 주어져야 한다는 말이죠. 시간이 얼마가 걸리든지 상관없습니다, 동기방식으로 하겠다는 것은 시간이 얼마가 걸리든 요청한 그 자리에서 결과를 주겠다는 약속이기 때문이죠. 즉, 요청과 결과가 한자리에서 동시에 일어난다는 말입니다.


  * When you execute something **asynchronously**, you can move on to another task before it finishes.
  * 비동기 (Asynchronous: 동시에 일어나지 않는, 非同期: 같은 시기가 아닌)
    비동기란 말 그대로 동시에 일어나지 않는다는 의미입니다. 무엇이 같이 일어나지 않는다는 말일까요? 바로 요청과 그 결과가 동시에 일어나지 않을 거라는 약속입니다. 즉, 요청한 그 자리에서 바로 결과가 주어지는 것이 아니라, 이따가 줄게라고 약속하는 것이죠.


  출처 - http://stackoverflow.com/questions/748175/asynchronous-vs-synchronous-execution-what-does-it-really-mean

  출처 - http://nsinc.tistory.com/108

##2. Node.js Sync vs Async
###1. Make data.txt
```
  hello syncAsync
```

###2. Make syncAsync.js
```
  const fs = require('fs');

  // Sync
  console.log(1);
  var data = fs.redFileSync('data.txt', {encoding: 'utf8'});
  console.log(data);
  console.log(2);

  // Async
  console.log(3);
  fs.readFile('data.txt', {encoding: 'utf8'}, function(err, data) {
    console.log(4);
    console.log(data);
  })
  console.log(5);
```

Node.js based on async. So nodejs basic methods are based on async. If we use sync, find methods that named 'Sync'.