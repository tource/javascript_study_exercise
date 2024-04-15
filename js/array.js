const numbers = [1, 2, 3, 4, 5];

// map()메서드는 forEach()메서드와 달리 매개변수로 사용되는 함수에서
// 값을 반환하는 return이존재
// map( 메서드)
let arr = numbers.map((num) => num * num);
console.log(arr);

document.getElementById("show").innerHTML = arr;
