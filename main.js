// * Wersja pierwsza - bez array i obiketów działa bez edita.

const addLi = document.querySelector("ul");
const addButton = document.querySelector(".btn");
const editButton = document.querySelector(".btn_1");
const deleteButton = document.querySelector(".btn_2");
const input = document.querySelector("input");
const checkbox = document.getElementById('done');

addButton.addEventListener("click", function inputMaker() {
  const newInput = document.createElement("li");
  const newChecbox = document.createElement("input")
  // if (input.value === "") {
  //   alert("Pozycja musi zawierać przynajmniej 1 znak");
  // } else {
    addLi.appendChild(newInput);
    let text = input.value;
    newInput.innerHTML = text;
    addLi.appendChild(newChecbox);
    newChecbox.setAttribute("type","checkbox");
    newChecbox.setAttribute("id","checbox");
  }
);


editButton.addEventListener("click", function inputEdit() {
  const liToRemove = document.querySelector("ul");
  const lastElement = liToRemove.lastElementChild;
  lastElement.remove();
  const newInput = document.createElement("li");
  addLi.appendChild(newInput);
  newInput.innerHTML = "";
  let text = input.value;
  newInput.innerHTML = text;
  console.log(text);
});

deleteButton.addEventListener("click", function inputDelete() {
  const liToRemove = document.querySelector("ul");
  const lastElement = liToRemove.lastElementChild;
  lastElement.remove();
});
