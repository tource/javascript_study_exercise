# 6. if 문

## 6.1 if ~ 구문

- 참, 거짓에 따라 특정 코드의 실행을 제어

```txt
if(조건식){
  문장;
  ...
}
```

```js
let x = 10000; // 입장료 10000원
let age = 70;

if (age >= 65) {
  // 입장료: 0원
  x = 0;
}
console.log(`입장료: ${x}원`);

//웹사이트 관리자는 아이디(id)가 admin이거나 level이 1인경우라고 가정
// 관리자일 경우 "관리자입니다."라고 출력

let id = "admin";
let level = 5;

if (id === "admin" || level === 1) {
  console.log("관리자입니다.");
}

// 필기시험 성적과 실기시험 성적 모두 80이상 합격
let score1 = 95; //필기
let score2 = 80; //실기

if (score1 >= 80 && score2 >= 80) {
  console.log("합격");
}
```

## 6.2 if ~ else ~구분

```txt
if(조건식){
  문장;
  ...
} else {
  문장;
  ...
}
```

```js
let num = 9;

if (num % 2 == 0) {
  console.log(`${num}은(는) 짝수입니다`);
} else {
  console.log(`${num}은(는) 홀수입니다`);
}

// 70점 이상이면 합격, 그렇지 않으면 불합격
let score = 65;
let result = "";

if (score >= 70) {
  result = "합격";
} else {
  result = "불합격";
}
console.log(result);
```

## 6.2 if ~ else if ~ else 구문

```txt
if(조건식){
  문장;
  ...
} else if(조건식2){
  문장;
  ...
} else if(조건식2){
  문장;
  ...
} else{
  문장:
  ...
}
```

## 7. switch 문

- if문과 거의 같은 방식으로 동작

```js
// 괄호 안에 있는 변수의 값에 따라
switch(변수){
  // 해당 case에 있는 문장들이 실행
  case 값1:
    문장;
    ...
    break;

  case 값2:
    문장;
    ...
    break;
    default:
    문장;
}
```
