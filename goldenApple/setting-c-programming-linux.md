[linux] Setting for C language programming in linux
===========
[참고]http://itguru.tistory.com/14

## 0. 준비
C 프로그래밍을 하기 위해서는 컴파일러가 있어야 하는데 Visual studio 등의 컴파일러는 MS사에서 개발하여 window에서만 돌아간다. 그래서 linux에서 돌아가는 컴파일러를 써야만 하는데 linux용 컴파일러는 GCC가 있다. GCC란 CNU C Compiler의 약자로 C 언어 컴파일을 위해 만들어졌지만 요즘은 그 외의 언어들도 컴파일 할 수 있다고한다(Ada, C++, JAVA, Fotran, Objective-C).

우분투 배포판에는 기본적으로 GCC가 설치되어있다고 함.

## 1. GCC 설치되어있는지 확인하기
```
$ gcc
```
라고 명령어를 쳤을 때

gcc: no input files라는 에러가 뜬다면 gcc가 설치되어있는 것이다. 설치되어있지 않다면 apt를 이용해 gcc를 설치해줘야만한다.

## 2. C언어 실행파일 만들기
```
$ vim helloworld.c
```
vim 에디터를 사용해 실행파일을 작성하고 저장한다.
* helloworld를 프린트하는 예제
```
#include <stdio.h>
int main(void)
{
  printf("Hello, World!");
  return 0;
}
```

## 3. 컴파일 + 링크하기

```
$ gcc -o helloworld helloworld.c
```

기본포맷
```
$ gcc -o 출력파일-이름 helloworld.c
```

## 4. 만들어진 helloworld파일을 실행
```
$ ./helloworld
```

결과 : Hello, World!