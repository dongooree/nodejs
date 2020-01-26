var fs = require('fs');

/*
// readFileSync
console.log('A');
var result = fs.readFileSync('syntax/sample.txt', 'utf8');
console.log(result);
console.log('C');
*/

// 비동기 ver.
console.log('A');
// result로 받지 않고 함수를 세번째 인자로 받아야함
fs.readFile('syntax/sample.txt', 'utf8', function(err, result){
    console.log(result);    // 나중에 실행됨
});
console.log('C');