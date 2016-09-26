/**
 * Created by bomin on 16. 9. 26.
 */


function longest_palindrom(s){
    var result = 1; // Palindrom's default value is 1.
    // 함수를 완성하세요

    for (var i = 0; i < s.length; i++) {
        for (var j = s.length -1; j > i; j--) {
            if (s[i] === s[j]) {
                console.log("target1 : " + i + " / " + "target2 : " + j);
                var ispalindrom = true;

                for (var k = 0; k < j-i+1; k++) {
                    ispalindrom = ispalindrom && (s[i + k] === s[j - k]);
                }
                if (ispalindrom === true) {
                    result = result > (j - i + 1) ? result : j - i + 1
                }
            }
        }
    }
    return result;
}


// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log( longest_palindrom("토마토맛토마토") );
console.log( longest_palindrom("토마토맛있어") );
console.log( longest_palindrom("아른데토마토가빨개서토마토마토") );

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