[Linux] Memorise CLI
==========
\--*** 본 문서의 모든 내용은 linux(ubuntu) 기준입니다.***--

resorece : https://learnpythonthehardway.org/book/appendixa.html

## 0. What is CLI?
CLI is "Command Line Interface"

## 1. linux 기본 명령어

\* 각각의 명령어에 어떤 옵션들이 함께 들어있는지 알아보기 위해서는 *'명령어 --help'*를 입력해봅니다.

### 0. cd(Change Directory), ls(List Directory)는 기본!
```
cd /directory_name
```
```
ls   // 지금 들어와있는 루트에서 디렉토리 항목 표시
```
```
ls temp/   // 지금 들어와있는 루트의 하위 디렉토리인 temp의 디렉토리 항목 표시
```
### 1. 현재 들어와있는 경로 출력
\- pwd : "print working directory"
```
$ pwd
  /home/diana
```
```
/바탕화면/Programming $ pwd
  /home/diana/바탕화면/Programming
```

### 2. home 디렉토리로 이동
```
$ cd ~
```
경로를 복잡하게 들어와 길을 잃어버렸을 때 사용

### 3. 디렉토리 만들기
* **기본 directory 생성방법**
  ```
  $ mkdir temp
  ```
  temp 디렉토리 생성
  ```
  $ mkdir temp/stuff
  ```
  temp 디렉토리 아래에 stuff 디렉토리 생성

* **없는 디렉토리에 하위 디렉토리 만들기**

  만약 temp2 디렉토리를 만들지 않고 temp2/stuff/orange 디렉토리를 만들려고 하면 오류가 난다. *이때 '-p' 옵션을 사용한다.*
  ```
  $ mkdir -p temp2/stuff/orange
  ```
  이렇게 하면 존재하지 않았던 temp2, stuff 디렉토리가 신규로 생성되면서 마지막 디렉토리로 orange 디렉토리가 생성된다.

* **디렉토리 이름으로 띄어쓰기가 들어가 있다면 or 띄어쓰기를 넣고 싶다면?**

  쌍 따옴표로 파일이름을 감싸준다.
  ```
  $ mkdir "It is not fun"
  ```

### 4. 디렉토리 삭제
* rmdir
  ```
    /temp/stuff // 경로
  $ cd ..
    /temp // 상위경로로 이동
  $ rmdir stuff // stuff 디렉토리 제거
  $ ls
    /temp
  ```

* rm
  ```
  $ rm -d directory_name
  ```

* *'rmdir' 명령어와 'rm'의 차이*

  'rmdir' only removes empty directories. If you want to make sure you don't delete any additional files in a directory, rmdir is more safe than rm -r (except if you aliased rm such that you always need to confirm what you delete,

  ANOTHER DISCUSSION of what's difference between rmdir and rm.
http://askubuntu.com/questions/217893/how-to-delete-a-non-empty-directory-in-terminal

### 5. pushd & popd
* pushd로 여러 디렉토리를 한꺼번에 건너뛰어 들어갈 수 있고, pushd로 건너뛴 경로는 저장이 됨.
* popd로 pushd할 때 저장되었던 경로를 거꾸로 돌아갈 수 있음.
```
$ cd temp
$ mkdir -p i/like/icecream
$ pushd i/like/icecream
  ~/temp/i/like/icecream ~/temp
$ popd
  ~/temp
$ pwd
  ~/temp
$ pushd i/like
  ~/temp/i/like ~/temp
$ pwd
  ~/temp/i/like
$ pushd icecream
  //이렇게 pushd로 건너뛴 경로는 차례대로 저장되어있음.
  ~/temp/i/like/icecream ~/temp/i/like ~/temp
$ pwd
  ~/temp/i/like/icecream
$ popd
  ~/temp/i/like ~/temp
$ pwd
  ~/temp/i/like
$ popd
  ~/temp
```
popd를 계속하게되면 cd로 들어갔던 디렉토리까지만 되돌아갈 수 있음. cd로 들어간 곳에서 pushd가 시작되었으므로 pushd로 저장된 지점이 다 끝나면 더 이상 popd를 이용해서 이동할 수가 없다.

### 6. 빈 파일 만들기
```
$ touch iamcool.txt
  iamcool.txt // 빈 텍스트 파일 만들어짐
```

### 7. 파일 복사 Copy a File(cp)
* temp 폴더 아래에 iamcool.txt만 존재할 경우, neat.txt라는 복사복을 만드는 방법

  ```
  // temp 폴더 내부일 때,
  $ cp iamcool.txt neat.txt
  ```

* temp 폴더에 있는 iamcool.txt를 하위 디렉토리 another로 복사하는 방법

  ```
  // temp 폴더 내부이고, iamcool.txt와 another 디렉토리가 이미 존재할 때.
  $ cp iamcool another/
  ```

* temp 폴더 하위 디렉토리 another을 복사하여 newplace라는 복사본 디렉토리를 만드는 방법

  ```
  // temp 폴더 내부일 때,
  $ cp -r another newplace
  ```

### 8. 파일 바꾸기(옮기기?) Moving a File(mv)
* iamcool.txt를 uncool.txt로 바꾸기

  ```
  $ mv iamcool.txt uncool.txt
  ```
  \* 폴더명 변경도 동일.

### 9. file 내용 확인하기
* 별도의 창에서 내용 확인하기

  ```
  $ less iamcool.txt
  --------------------------------------------------------------------------
  각 운영체제에 기본 세팅된 에디터(linux는 gedit)로 iamcool.txt 파일의 내용이 표시된다.
  파일 내용이 길어서 스크롤이 필요할 때에는 'w'를 누르면 page up이고 'space-bar'를 누르면 page down.
  --------------------------------------------------------------------------
  ```
* terminal에서 바로 확인하기

  ```
  $ cat iamcool.txt
  test text // iamcool.txt 의 내용이 표시됨
  ```
  - 파일을 두개 연달아서 확인하는 경우
  ```
  $ cat file01.txt file02.txt
  file01.txt
  file02.txt // file01이 앞쪽에 표시되고 뒤이어 file02의 내용이 표시된다
  ```

### 10. 끝내기
```
$ exit
```


\-- BYEBYE