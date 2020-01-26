// function a(){
//     console.log('A');
// }
// js에서 함수 == '값'
var a = function(){
    console.log('A');
}

function slowFunc(callback){
    callback();
}

slowFunc(a);