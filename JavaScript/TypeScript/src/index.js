const input = '6666';
var lines = input.split('\n');
const t = lines.shift().split('').map(Number).reduce((a, b) => a + b);
console.log(t-3)