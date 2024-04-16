const numbers = [1, 2, 3, 4, 5];

// map()메서드는 forEach()메서드와 달리 매개변수로 사용되는 함수에서
// 값을 반환하는 return이존재
// map()메서드는 원본의 배열 그대로 두고 새로운 배열을 생성
// map()메서드에 매개변수로 설정된 익명함수를실행하여
// 얻어진 요소로 구성된 새로운 배열을 반환
let arr = numbers.map((num) => num * num);
console.log(numbers);
console.log(arr);

document.getElementById("show").innerHTML = arr;
