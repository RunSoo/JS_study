// 01 익명함수
const function1 = function () {
  console.log("함수 내부의 코드1");
  console.log("함수 내부의 코드2");
  console.log("함수 내부의 코드3");
};

function1();
console.log(function1);
console.log(typeof function1);

// 02 선언적 함수

// 선언적 함수와 익명 함수
// // 익명 함수는 코드를 우리가 읽을 때와 같은 순서로 선언
// // 선언적 함수는 어디서 함수를 실행해도 상관 없음 - 다 같게 나옴
// // 요즘은 안전한 익명 함수 많이 쓰는 추세

function function2() {
  console.log("함수 내부의 코드1");
  console.log("함수 내부의 코드2");
  console.log("함수 내부의 코드3");
}

function2();

// 03 매개변수와 리턴값
function f(x) {
  return x * x;
}

console.log(f(3));

// 04 나머지 매개변수
// // 매개변수의 개수가 고정적이지 않은 가변 매개변수 함수를 구현할 때 사용
function min(...items) {
  let output = items[0];
  for (const item of items) {
    if (output > item) {
      output = item;
    }
  }
  return output;
}

console.log(min(52, 273, 32, 103, 275, 24, 57)); // 24

function sample(a, b, ...c) {
  console.log(a, b, c);
}

sample(1, 2); // 1 2 []
sample(1, 2, 3); // 1 2 [3]
sample(1, 2, 3, 4); // 1 2 [3, 4]

// 05 전개 연산자
// // 배열을 전개해서 함수의 매개변수로 전달해주는 전개 연산자
function print1(...items) {
  console.log(items);
}

const array1 = [1, 2, 3, 4];
print1(array1); // Array(4)0: 11: 22: 33: 4length: 4[[Prototype]]: Array(0)

print1(...array1); // 1 // 2 // 3 // 4

// 06 콜백 함수
// // 매개변수로 전달하는 함수
function callThreeTimes(callback) {
  for (let i = 0; i < 3; i++) {
    callback(i);
  }
}

function print(i) {
  console.log(`${i}번째 함수 호출`);
}

callThreeTimes(print);

// 07 forEach()
const numbers = [273, 52, 103, 32, 57];

numbers.forEach(function (value, index, array) {
  console.log(`${index}번째 요소: ${value}`);
});
// 0번째 요소: 273
// 1번째 요소: 52
// 2번째 요소: 103
// 3번째 요소: 32
// 4번째 요소: 57

// 08 map()
let numbers2 = [273, 52, 103, 32, 57];

numbers2 = numbers2.map(function (value, index, array) {
  return value * value;
});

numbers2.forEach(console.log);

// 09 filter()
const numbers3 = [0, 1, 2, 3, 4, 5];
const evenNumbers = numbers3.filter(function (value) {
  return value % 2 === 0;
});

console.log(`원래 배열: ${numbers}`);
console.log(`짝수만 추출: ${evenNumbers}`);

// 10 화살표 함수
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
array.map((value) => value * value);

let numbers4 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers4
  .filter((value) => value % 2 === 0)
  .map((value) => value * value)
  .forEach((value) => console.log(value));

// 11 타이머 함수
// // setTimeout(함수, 시간) 특정 시간 후 함수를 한번 호출
// // setInterval(함수, 시간) 특정 시간마다 함수를 호출
setTimeout(() => {
  console.log("1초 후에 실행됩니다");
}, 1 * 1000);

let count = 0;
let id = setInterval(() => {
  console.log(`1초마다 실행됩니다(${count}번째)`);
  count++;
}, 1 * 1000);

setTimeout(() => {
  console.log("타이머를 종료합니다.");
  clearInterval(id);
}, 5 * 1000);

// 1초 후에 실행됩니다
// 1초마다 실행됩니다(0번째)
// 1초마다 실행됩니다(1번째)
// 1초마다 실행됩니다(2번째)
// 1초마다 실행됩니다(3번째)
// 1초마다 실행됩니다(4번째)
// 타이머를 종료합니다.
