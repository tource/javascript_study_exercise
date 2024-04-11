// 전역 스코프
let x = 10;
function fnc() {
  console.log(x);
}

fnc();
console.log(x);

// 함수 스코프
function fnc1() {
  let y = 11;
  console.log(y);
}

fnc();
console.log(y); // 지역변수 y로 접근 못함

// 블록 스코프
function fnc2() {
  if (true) {
    let z = 10; // 변수 z는 if문 내, 즉 블록 내부에서 선언
  }
  console.log(z); // 블록 외부에서 변수 z에 접근하지 못함
}
