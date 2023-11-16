const addLi = document.querySelector("ul");
const addButton = document.querySelector("button");
const input = document.querySelector("input");

addButton.addEventListener("click", function inputMaker(e) {
  const newInput = document.createElement("li");
  addLi.appendChild(newInput);
  let text = input.value;
  newInput.innerHTML = text;

  e.preventDefault();
});
