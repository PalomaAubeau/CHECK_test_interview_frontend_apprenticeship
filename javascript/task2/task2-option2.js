// Task 2 - DOM Interaction : option 2 with creation of elements in javascript

function createTextElement() {
  const textElement = document.createElement("p");
  textElement.textContent = "Text to change";
  textElement.setAttribute("id", "myText");
  document.body.appendChild(textElement);
}

function createBtnElement() {
  const button = document.createElement("button");
  button.textContent = "Change Text";
  button.setAttribute("id", "changeTextBtn");
  document.body.appendChild(button);
}

createTextElement();
createBtnElement();

function changeText(newText) {
  const textElement = document.getElementById("myText");
  if (textElement) {
    textElement.textContent = newText;
  } else {
    console.error("Element with ID 'myText' not found.");
  }
}

function handleClick() {
  const button = document.getElementById("changeTextBtn");
  const newText = "Hello, Check!";

  button.addEventListener("click", () => changeText(newText));
}

handleClick();
