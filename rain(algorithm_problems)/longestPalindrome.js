/**
 * Created by bomin on 16. 9. 26.
 * 앞뒤를 뒤집어도 똑같은 문자열을 palindrome이라고 합니다.
 * longest_palindrome함수는 문자열 s를 매개변수로 입력받습니다.
 * s의 부분문자열중 가장 긴 palindrome의 길이를 리턴하는 함수를 완성하세요.
 * 예를들어 s가 "토마토맛토마토"이면 7을 리턴하고 "토마토맛있어"이면 3을 리턴합니다.
 */


function longest_palindrome(s){
    var result = 1; // palindrome's default value is 1.

    for (var i = 0; i < s.length; i++) {
        for (var j = s.length -1; j > i; j--) {
            if (s[i] === s[j]) {
                console.log("target1 : " + i + " / " + "target2 : " + j);
                var ispalindrome = true;

                for (var k = 0; k < j-i+1; k++) {
                    ispalindrome = ispalindrome && (s[i + k] === s[j - k]);
                }
                if (ispalindrome === true) {
                    result = result > (j - i + 1) ? result : j - i + 1
                }
            }
        }
    }
    return result;
}


// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log( longest_palindrome("토마토맛토마토") );
console.log( longest_palindrome("토마토맛있어") );
console.log( longest_palindrome("아른데토마토가빨개서토마토마토") );

// target1 : 0 / target2 : 6
// target1 : 0 / target2 : 4
// target1 : 0 / target2 : 2
// target1 : 1 / target2 : 5
// target1 : 2 / target2 : 6
// target1 : 2 / target2 : 4
// target1 : 4 / target2 : 6
// 7
// target1 : 0 / target2 : 2
// 3
// target1 : 3 / target2 : 14
// target1 : 3 / target2 : 12
// target1 : 3 / target2 : 10
// target1 : 3 / target2 : 5
// target1 : 4 / target2 : 13
// target1 : 4 / target2 : 11
// target1 : 5 / target2 : 14
// target1 : 5 / target2 : 12
// target1 : 5 / target2 : 10
// target1 : 10 / target2 : 14
// target1 : 10 / target2 : 12
// target1 : 11 / target2 : 13
// target1 : 12 / target2 : 14
// 5
//
// 실행시간: 246ms