## 15.1 이벤트

- 웹 페이지에서 발생하는 사건을 의미
- 이벤트를 처리하는 함수를 event handler 또는 event listner 라고 한다.

### 15.1.1 이벤트 핸들러

- 마우스 클릭이나 이동
- 페이지 로드
- 이미지 로드
- 입력창에 데이터 입력
- 키보드 누르기 등

```html
<body>
  <button onclick="change(this)">클릭하세요!</button>

  <script src="js/event.js"></script>
</body>
```

```js
function change(elem) {
  elem.innerHTML = "OK!";
}
```

### 15.1.2 인라인 모델

```html
<button onclick="document.getElementById('show').innerHTML = Date()">
  현재 시간은?
</button>

<p id="show"></p>
```

### 15.1.3 이벤트 리스너

- 이벤트가 발생하길 기다렸다가 이벤트 발생 시 해당 이벤트를 처리

```js
let text = "";

const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  text += "안녕하세요!<br>";
  document.getElementById("show").innerHTML = text;
});

btn.addEventListener("click", function () {
  text += "반갑습니다!<br>";
  document.getElementById("show").innerHTML = text;
});
```

## 15.2 마우스 이벤트

- 마우스에 관련된 이벤트는 웹에서 가장 많이 사용된다.
- onclick : 사용자가 요소를 클릭했을 때
- ondblclick : 사용자가 요소를 더블 클릭했을 때
- onmouseover : 마우스 포인터가 요소 위에 올라갔을 때, 자식요소에 대해서도 동작
- onmouseout : 마우스 포인터가 요소에서 벗어날 때, 자식요소에 대해서도 동작
- onmouseenter : 마우스 포인터가 요소 안으로 진입할 때
- onmouseleave : 마우스 포인터가 요소에서 외부로 나갈 때
- onmousemove : 마우스 포인터가 요소안에서 움직일 때

### 15.2.1 onclick/ondblclick 이벤트

```html
<body>
  <button onclick="showMessage1()">클릭하세요!</button>
  <button ondblclick="showMessage2()">더블 클릭하세요!</button>

  <p id="show"></p>

  <script src="js/event.js"></script>
</body>
```

```js
function showMessage1() {
  document.getElementById("show").innerHTML = "클릭했어요!";
}

function showMessage2() {
  document.getElementById("show").innerHTML = "더블 클릭했어요!";
}
```

### 15.2.2 onmouseover/onmouseout 이벤트

```html
<body>
  <button onmouseover="changeBg1(this)" onmouseout="changeBg2(this)">
    마우스를 올려보세요
  </button>

  <p id="show"></p>

  <script src="js/event.js"></script>
</body>
```

```js
function changeBg1(btn) {
  btn.style.backgroundColor = "pink";
}

function changeBg2(btn) {
  btn.style.backgroundColor = "";
}
```

### 15.2.3 onmouseenter 이벤트

- onmouseover 이벤트와 유사한 기능

```html
<!-- Document -->
<!DOCTYPE html>
<!-- 요소: html, 속성: lang -->
<html lang="ko">
  <!-- 요소: head -->
  <head>
    <!-- 요소: meta, 속성: charset -->
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- 요소: title, 텍스트: 자바스크립트 스터디 -->
    <title>자바스크립트 스터디</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <style>
      div#box1 {
        border: solid 3px red;
      }
      div#box2 {
        border: solid 3px blue;
      }
      p {
        border: solid 1px black;
      }
    </style>
  </head>
  <body>
    <div id="box1" onmouseenter="increaseX()">
      <p>단락1</p>
      <span id="show1"></span>
    </div>

    <div id="box2" onmouseover="increaseY()">
      <p>단락2</p>
      <span id="show2"></span>
    </div>

    <script src="js/event.js"></script>
  </body>
</html>
```

```js
let x = 0,
  y = 0;

function increaseX() {
  x += 1;
  document.getElementById("show1").innerHTML = x;
}

function increaseY() {
  y += 1;
  document.getElementById("show2").innerHTML = y;
}
```

### 15.2.4 onmouseleave 이벤트

```html
<body>
  <div id="box1" onmouseleave="increaseX()">
    <p>단락1</p>
    <span id="show1"></span>
  </div>

  <div id="box2" onmouseout="increaseY()">
    <p>단락2</p>
    <span id="show2"></span>
  </div>

  <script src="js/event.js"></script>
</body>
```

### 15.2.5 onmousemove 이벤트

- 요소 내에서 마우스가 이동할 때 발생

```html
<body>
  <div id="box" onmousemove="showCoord(event)">
    <p id="show"></p>
  </div>

  <script src="js/event.js"></script>
</body>
```

```js
function showCoord(e) {
  let text = "좌표: (" + e.clientX + "," + e.clientY + ")";
  document.getElementById("show").innerHTML = text;
}
```

### 15.3 포커스 이벤트

- onfocus : 요소가 포커스를 얻었을 때
- onblur : 요소가 포커스를 잃었을 때
- 텍스트나 비밀번호 입력창 안에 마우스를 클릭하면 마우스 커서가 깜빡인다.
- 이런 상태를 포커스를 얻었다고 표현
- 반대로 입력창 외부를 클릭하면 포커스를 잃게 된다.

```html
<body>
  <input type="text" id="uid" />
  <input
    type="password"
    id="upw"
    onfocus="changeColor3()"
    onblur="changeColor4()"
  />

  <script src="js/event.js"></script>
</body>
```

```js
const userId = document.getElementById("uid");
const userPw = document.getElementById("upw");

function changeBgColor1() {
  userId.style.backgroundColor = "yellow";
}
function changeBgColor2() {
  userId.style.backgroundColor = "gray";
}

userId.onfocus = function () {
  changeBgColor1();
};
userId.onblur = function () {
  changeBgColor2();
};

function changeColor3() {
  userPw.style.backgroundColor = "yellow";
}

function changeColor4() {
  userPw.style.backgroundColor = "red";
}
```

## 15.4 기타 이벤트

### 15.4.1 onchange 이벤트

```html
<body>
  <label>
    사이즈:
    <select name="size" id="sz">
      <option value="">선택</option>
      <option value="small">S</option>
      <option value="midium">M</option>
      <option value="large">L</option>
      <option value="xlarge">XL</option>
    </select>
  </label>
  <p id="show"></p>

  <script src="js/event.js"></script>
</body>
```

```js
const sel = document.getElementById("sz");
sel.addEventListener("change", function (e) {
  document.getElementById(
    "show"
  ).innerHTML = `선택한 사이즈는 ${e.target.value}입니다.`;
});
```
