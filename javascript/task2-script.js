function changeText() {
  const button = document.getElementById("changeTextBtn");
  const newText = "Hello, Check!";
  button.addEventListener("click", function () {
    document.getElementById("myText").textContent = newText;
  });
}
changeText();
