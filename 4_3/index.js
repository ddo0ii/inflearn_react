const calc = require("./calc");

// require라는 내장함수로부터 calc.js에 있는 모듈을 index.js에서 사용할 수 있다.
console.log(calc);
console.log(calc.add(1, 2));
console.log(calc.add(4, 5));
console.log(calc.sub(10, 2));