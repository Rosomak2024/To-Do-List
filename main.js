// * Wersja pierwsza - bez array i obiketów // First version - without arrays and objects.

const ulParrentElement = document.querySelector("ol");
const addButton = document.querySelector(".btn");
const editButton = document.querySelector(".btn_1");
const deleteButton = document.querySelector(".btn_2");
const input = document.getElementById("text");

const tasks = [];

addButton.addEventListener("click", (e) => {
  const li = document.createElement("li");
  // const label = document.createElement("label");
  const checkbox = document.createElement("input");
  if (input.value !== "") {
    ulParrentElement.appendChild(li);
    ulParrentElement.appendChild(checkbox);
    li.setAttribute("id", `list_Element_${tasks.length}`);
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("id", `checkbox_Element_${tasks.length}`);
    li.innerText = input.value;
    tasks.push(li);
    input.value = "";
  } else {
    alert("Musisz wpisać tekst");
  }
  const checkbox_checked = document.querySelector('input[type="checkbox"]');
  console.log(checkbox.checked);
  checkbox_checked.addEventListener('change',function(e){
    if(e.isTrusted){
  deleteButton.disabled = true;
  editButton.disabled = true;
  addButton.disabled = false;}

  });
});

deleteButton.addEventListener("click", (e) => {
  const checkedCheckbox = document.querySelectorAll(
    'input[type="checkbox"]:checked'
  );
  if(checkedCheckbox) {
    deleteButton.disabled = false;
    editButton.disabled = false;
    addButton.disabled = true;
  }

  checkedCheckbox.forEach((element) => {
    ulParrentElement.removeChild(element.previousSibling);
    ulParrentElement.removeChild(element);
  });
});

editButton.addEventListener("click", function (e) {
  const checkedCheckbox_toEdit = document.querySelector(
    'input[type="checkbox"]:checked'
  );
  if(checkedCheckbox_toEdit) {
    deleteButton.disabled = false;
    editButton.disabled = false;
    addButton.disabled = true;
  }

  if (input.value == "") {
    alert("Pole edycji jest puste");
  } else if (e.isTrusted ) {
    checkedCheckbox_toEdit.previousElementSibling.innerText = input.value;
    input.value = "";
  }
 
});

// const checkbox = document.querySelector('input[type="checkbox"]');
// console.log(checkbox.checked);
// checkbox.addEventListener('change',function(e){
//   if(e.isTrusted){
// deleteButton.disabled = true;
// editButton.disabled = true;
// addButton.disabled = false;}
// else if(checkedCheckbox) {
//   deleteButton.disabled = false;
//   editButton.disabled = false;
//   addButton.disabled = true;
// }
// });
