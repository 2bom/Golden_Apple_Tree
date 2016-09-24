// * from tryhelloworld.co.kr

//** [SOLUTION 01] : Using for loop.
function average(array){
    //함수를 완성하세요
    var result = 0;
    for (var i = 0; i < array.length; i++) {
        result = result + array[i]
    }
    return result/array.length ;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
var testArray = [5,3,4]
console.log("평균값 : " + average(testArray));

//** [SOLUTION 02] : Using array.reduce() and not using syntax of ES6.
/*
 var result = array.reduce(function(previousValue, currentValue){
    // This returning value is become a next previousValue.
    return previousValue + currentValue;
 }) / array.length;

 return result;
 */



//** [OtherUsersAnswer] : Using array.reduce() and syntax of ES6(=> function).
/*
 function average(array){
    return array.reduce((a, b) => a + b) / array.length;
 }


 // 아래는 테스트로 출력해 보기 위한 코드입니다.
 var testArray = [5,3,4]
 console.log("평균값 : " + average(testArray));
 */

