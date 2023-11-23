// * Wersja pierwsza - bez array i obiketów działa bez edita.

const addLi = document.querySelector("ul");
const addButton = document.querySelector(".btn");
const editButton = document.querySelector(".btn_1");
const deleteButton = document.querySelector(".btn_2");
const input = document.querySelector("input");

addButton.addEventListener("click", function () {
  const newInput = document.createElement("li");
  addLi.appendChild(newInput);
  let text = input.value;
  newInput.innerHTML = text;
  const newCheckbox = document.createElement("input");

  newInput.appendChild(newCheckbox);
  newCheckbox.setAttribute("id", "check");
  newCheckbox.setAttribute("type", "checkbox");

  newCheckbox.value = "";
  console.log(test);

  // newCheckbox.style.visibility = "visible"
});

editButton.addEventListener("click", function inputEdit() {
  const liToRemove = document.querySelector("ul");
  const lastElement = liToRemove.lastElementChild;
  lastElement.remove();
  const newInput = document.createElement("li");
  addLi.appendChild(newInput);
  newInput.innerHTML = "";
  let text = input.value;
  newInput.innerHTML = text;
  const newCheckbox = document.createElement("input");
  newInput.appendChild(newCheckbox);
  newCheckbox.setAttribute("id", "check");
  newCheckbox.setAttribute("type", "checkbox");
  newCheckbox.value = "";
});

deleteButton.addEventListener("click", function inputDelete() {
  const liToRemove = document.querySelector("ul");
  const lastElement = liToRemove.lastElementChild;
  lastElement.remove();
});
