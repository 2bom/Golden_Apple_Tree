[Git] How to add local project folder to git.
==========

1. local folder를 git folder로 만들기.

    <code>git init</code>

2. local folder에 있던 파일들 올리기.

    <code>git add .</code>

3. commit 작성.

    <code>git commit</code>

4. remote branch에 origin으로 git repository 추가하기.

    <code>git remote add origin *<u>MY-Git-Repository-URL</u>*</code>

5. repository 주소가 잘 등록되었는지 remote 상태 확인하기.

    <code>git remote -v</code>

6. 설정된 repository로 push하기.

    <code>git push origin master</code>