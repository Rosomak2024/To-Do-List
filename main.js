const addLi = document.querySelector("ul");
const addButton = document.querySelector(".btn");
const editButton = document.querySelector(".btn_1");
const deleteButton = document.querySelector(".btn_2");
const clearButton = document.querySelector(".btn_3");
const input = document.querySelector("input");



addButton.addEventListener("click", function inputMaker() {
  const newInput = document.createElement("li");
  if (input.value === "") {
    alert("Pozycja musi zawierać przynajmniej 1 znak");
  } else {
    addLi.appendChild(newInput);
    let text = input.value;
    newInput.innerHTML = text;
  }
});

deleteButton.addEventListener("click", function inputDelete() {
  const liToRemove = document.querySelector("ul");
  const lastElement = liToRemove.lastElementChild;
  lastElement.remove();
});

clearButton.addEventListener("click", function inputClear() {
  input.value = "";
});


