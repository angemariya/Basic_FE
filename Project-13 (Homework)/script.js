const buttons = document.querySelectorAll(".btn");

function getRandomNum(max) {
  return Math.floor(Math.random() * max);
}

buttons.forEach(function (button) {
  button.addEventListener("click", function (event) {
    document.body.style.backgroundColor = event.target.innerHTML;
  });
});

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    if (button.className.includes("img")) {
      document.body.style.backgroundImage = "url(https://clck.ru/33RULR)";
    } else if (button.className.includes("random")) {
      document.body.style.backgroundColor = "#" + getRandomNum(999999);
      document.body.style.backgroundImage = "none";
    } else document.body.style.backgroundImage = "none";
  });
});
