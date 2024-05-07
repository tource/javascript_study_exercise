document.addEventListener("mousemove", function (e) {
  let ripple = document.createElement("div");
  ripple.className = "ripple";
  document.body.appendChild(ripple);

  ripple.style.left = `${e.clientX - 100}px`;
  ripple.style.top = `${e.clientY - 100}px`;

  ripple.addEventListener("animationend", () => {
    ripple.parentElement.removeChild(ripple);
  });
});
