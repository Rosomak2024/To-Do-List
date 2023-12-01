// * Wersja pierwsza - bez array i obiketów działa bez edita.

const ulParrentElement = document.querySelector("ul");
const addButton = document.querySelector(".btn");
const editButton = document.querySelector(".btn_1");
const deleteButton = document.querySelector(".btn_2");
const input = document.querySelector("input");

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

editButton.addEventListener("click", () => {
  const checkedCheckboxes_toEdit = document.querySelectorAll(
    'input[type="checkbox"]:checked'
  );
  // const li_toEdit = document.querySelectorAll("li");

  checkedCheckboxes_toEdit.forEach((element) => {
    ulParrentElement.removeChild(element.previousSibling);
    ulParrentElement.removeChild(element);

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
});
