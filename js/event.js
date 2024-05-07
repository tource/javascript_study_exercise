function showCoord(event) {
  let text = "좌표: (" + event.clientX + "," + event.clientY + ")";
  document.getElementById("show").innerHTML = text;
}
