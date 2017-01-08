[Node.js] html rendering
==========
\--*** 본 문서의 모든 내용은 linux(ubuntu) 기준입니다.***--
## 0. app.js 코드 추가
\* app.js의 이전 코드는 opentutorials-express-router.md 참고

views 폴더 추가.

\- views/temp.jade
```
html
  head
    title= _title
  body
    h1 hello jade
    ul
      -for(var i = 0; i<5; i++)
        li coding
    div= time
```

\- app.js
```
// 03. template engine

// jade와 express를 연결
app.set('view engine', 'jade');
app.set('views', './views');

// jade rendering
app.get('/template', function(req, res) {
  // rendering with variable 'time'.
  res.render('temp', {time: Date(), _title: 'jade study'});
});


// 이미지, CSS 파일 및 JavaScript 파일과 같은 정적 파일을 제공하려면 Express의 기본 제공 미들웨어 함수인 express.static을 사용
app.use(express.static('public'));
app.get('/route', function(req, res){
  // 정적인 파일 생성.
  // res.send('Hello Router, <img src="/photo.jpg">');
  // 정적인 파일을 수정, 표시할 때는 서버를 껐다 켤 필요가 없다. 바로 적용된다.

  // 동적인 파일 생성.
  var list = '';
  for(var i = 0; i < 5; i++){
    list = list + '<li>coding</li>';
  }

  /*
    // 여러줄로 html 파일처럼 작성하는 방법 01
    // 작은 따옴표('')를 사용할 경우.
    var output = '\
    <!DOCTYPE html>\
    <html lang="en">\
      <head>\
        <meta charset="UTF-8">\
        <title>Static html file</title>\
      </head>\
      <body>\
        Hello Dynamic!\
        <ul>\
          <li>coding</li>\
        </ul>\
      </body>\
    </html>\';
  */

  // 여러줄로 html 파일처럼 작성하는 방법 02
  // formated text. ``를 사용해는 방법(작은따옴표 아님!!)
  var output = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Static html file</title>
    </head>
    <body>
      Hello Dynamic!
      <ul>
        ${list}
      </ul>
    </body>
  </html>`;

  res.send(output);
});
```


Express에서 정적 파일 제공하는 법에 관한 document - http://expressjs.com/ko/starter/static-files.html