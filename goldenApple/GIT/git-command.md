[GIT] Git command
==========

## 0. 기본 명령어

## 1. 추가 명령어
### 변경사항 체크
1. 커밋의 변경사항 체크
```
$ git diff HEAD
```
2. 스테이지 된 파일(add된 파일)의 변경사항 체크
```
$ git diff --staged
```

### 2. 같은형식의 파일 모두 추가하기
```
$ git add '*.txt'
```

### 3. 파일 언스테이징하기
```
$ git reset filename
```