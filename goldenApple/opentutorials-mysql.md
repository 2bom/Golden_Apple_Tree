[MySQL] MySQL 입문
==========
##0. 준비
###0. MySQL 설치
1.
2.
3.

###1. MySQL 접속
생략버전 :
```
$ mysql -uroot -p
```
기본 셋팅 :
```
$ mysql -hlocalhost -p3306 -uroot -p
```

##1. 데이터베이스 생성

1. 'o2'라는 이름의 데이터베이스 생성
  ```
  $ CREATE DATABASE o2 CHARACTER SET utf8 COLLATE utf8_gerneral_ci;
  ```

2. 만들어진 데이터베이스 확인
  ```
  $ SHOW DATABASES;
  ```

3. 데이터베이스 'o2' 사용
  ```
  $ USE o2;
  ```

4. 테이블 확인
  ```
  $ SHOW TABLES;
  ```

5. 'topic' 테이블 생성
  ```
  $ CREATE TABLE `topic` (
    `id` int(11) NOT NULL AUTO_INCREMENT, // AUTO_INCREMENT : id 값을 지정해주지 않아도 DATABASE 에서 알아서 id 값을 부여해줌
      `title` varchar(100) NOT NULL,
      `description` text NOT NULL,
      `author` varchar(30) NOT NULL,
      PRIMARY KEY (id)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
  ```

6. 테이블 확인
  ```
  $ SHOW TABLES;
  ```

7. 'topic' 테이블에 데이터 추가
  ```
  $ INSERT INTO topic(title, description, author) VALUES('JavaScript', 'Computer language for web', 'egoing');
  ```

8. 테이블에 들어있는 데이터 확인
  ```
  $ SELECT * FROM topic;
  ```

.
```
$
```
.
```
$
```
.
```
$
```
