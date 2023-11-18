const addLi = document.querySelector("ul");
const addButton = document.querySelector(".btn");
const deleteButton = document.querySelector(".btn_2");
const input = document.querySelector("input");

addButton.addEventListener("click", function inputMaker(e) {
  const newInput = document.createElement("li");
  addLi.appendChild(newInput);
  let text = input.value;
  newInput.innerHTML = text;
});

deleteButton.addEventListener("click", function inputDelete() {
  const liToRemove = document.querySelector("ul");
  const lastElement = liToRemove.lastElementChild;
  lastElement.remove();
});
