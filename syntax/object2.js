// 데이터를 정리하는 법 array, object
// 함수 == 값 ; 연관된 데이터를 grouping 하는 객체
var f = function() {
    console.log(1+1);
    console.log(1+2);
}

var a = [f];

// 배열의 원소로서 동작
a[0]();

var o = {
    func:f
}
o.func();