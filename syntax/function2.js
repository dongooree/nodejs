// 함수의 입력
console.log(Math.round(1.6));   //res: 2
console.log(Math.round(1.4));   //res: 1

function sum(first, second){    //여기서 first, second로 표현되는 것은 parameter(매개변수)
    console.log(first+second);
}

sum(2, 18); //여기서 받은 각각의 입력값 2, 18은 argument(인자)

// 함수의 출력
function sum2(first, second){    //여기서 first, second로 표현되는 것은 parameter(매개변수)
    console.log('a');
    return first+second;    //return을 만나면 함수 종료
    console.log('b');       // vs code에서도 unreachable code error detected
}

sum2(4, 6);
