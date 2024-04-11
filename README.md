# 9. while 문

## 9.1 while문의 기본구조

```js
while (조건식) {
  문장;
  ...
}
```

- while 문은 조건식이 참인 동안 문장, ... 을 반복 실행
- 조건식이 거짓이 되는 순간 반복 루프를 빠져나간다.

```js
// 안녕 다섯 번 출력하기
let i = 1;

while (i <= 5) {
  console.log("안녕");
  i++;
}
```

## 9.2 do while 문

```js
// 안녕 다섯 번 출력하기
do {
  문장;
  ...
} while (조건식);
```

```js
let x = -10;

do {
  console.log("안녕!");
} while (x > 0);
```
