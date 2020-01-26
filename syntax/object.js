var members = ['park', 'dong', 'eun'];
console.log(members[1]);
var i = 0;
while (i < members.length) {
    console.log('array loop', members[i]);
    i = i + 1;
}

var roles = {
    'programmer':'park',
    'designer':'lee',
    'manager':'kim'
}
console.log(roles.designer);
console.log(roles['designer']); //같음

for (var j in roles) {
    console.log('object => ', j, 'value => ', roles[j]);
}