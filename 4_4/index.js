// node_modules로부터 다운로드 된 외부 모듈은 경로명시를 하지않고 아래와 같이만 입력해도 된다.
const randomColor = require('randomcolor');

let color1 = randomColor();
let color2 = randomColor();
let color3 = randomColor();

console.log(color1, color2, color3);