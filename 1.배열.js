// 01 배열 만들기
const array = [273, "String", true, function () {}, {}, [273, 103]];

// 02 배열 요소 개수 확인
array.length;

// 03 요소 추가
array.push(234);
array[20] = "귤";
array[array.length] = "사과"; // [273, 'String', true, ƒ, {…}, Array(2), 234, empty × 13, '귤', '사과']

// 04 요소 제거
// 배열.splice(인덱스, 제거할 요소의 개수)
array.splice(3, 20); // [ƒ, {…}, Array(2), 234, empty × 13, '귤', '사과']
// [273, 'String', true]
const index = array.indexOf("String");
array.splice(index, 1); // ['String']
//  [273, true]

// 05 특정 위치에 요소 추가
// 배열.splice(인덱스, 0, 요소)
const items = ["사과", "귤", "바나나", "오렌지"];
items.splice(1, 0, "양파"); // []
// ['사과', '양파', '귤', '바나나', '오렌지']
