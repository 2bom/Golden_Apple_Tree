/**
 * Created by bomin on 16. 9. 25.
 */

function evenOrOdd(num) {
    if (num % 2 === 0) {
        return "Even"
    } else {
        return "Odd"
    }
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log("결과 : " + evenOrOdd(2));
console.log("결과 : " + evenOrOdd(3));


/* OTHERS SOLUTION

function evenOrOdd(num) {
    return (num % 2)? "Odd":"Even";  // Using 'number 0 is false'.
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log("결과 : " + evenOrOdd(2));
console.log("결과 : " + evenOrOdd(3));
*/
