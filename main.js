// * Wersja pierwsza - bez array i obiketów działa bez edita.

const ulParrentElement = document.querySelector("ul");
const addButton = document.querySelector(".btn");
const editButton = document.querySelector(".btn_1");
const deleteButton = document.querySelector(".btn_2");
const input = document.getElementById("text");

const tasks = [];

addButton.addEventListener("click", () => {
  const li = document.createElement("li");
  // const label = document.createElement("label");
  const checkbox = document.createElement("input");

  ulParrentElement.appendChild(li);
  // ulParrentElement.appendChild(label);
  ulParrentElement.appendChild(checkbox);
  li.setAttribute("id", `list_Element_${tasks.length}`);
  // label.setAttribute("id", `list_Element_Name_${tasks.length}`);
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("id", `checkbox_Element_${tasks.length}`);
  li.innerHTML = input.value;
  tasks.push(li);
  input.value = "";
});

deleteButton.addEventListener("click", () => {
  const checkedCheckboxes = document.querySelectorAll(
    'input[type="checkbox"]:checked'
  );

  checkedCheckboxes.forEach((element) => {
    ulParrentElement.removeChild(element.previousSibling);
    ulParrentElement.removeChild(element);
  });
});

// editButton.addEventListener("click", (e) => {
//   const checkedCheckboxes_toEdit = document.querySelector(
//     'input[type="checkbox"]:checked'
//   );

editButton.addEventListener("click", function (e) {
  const checkedCheckboxes_toEdit = document.querySelector(
    'input[type="checkbox"]:checked'
  );
  if (e.isTrusted && checkedCheckboxes_toEdit.value) {
    checkedCheckboxes_toEdit.previousElementSibling.innerHTML = input.value;
    input.value = "";

    console.log("działa");
    // console.log("info",info );
  }

  // console.log("e",e );
  // console.log("checkedCheckboxes_toEdit",checkedCheckboxes_toEdit );
  // const textContent = checkedCheckboxes_toEdit.previousElementSibling;
  // e.target.textContent = input.value;
});
