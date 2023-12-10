// * Wersja pierwsza - bez array i obiketów // First version - without arrays and objects.

const ulParrentElement = document.querySelector("ul");
const addButton = document.querySelector(".btn");
const editButton = document.querySelector(".btn_1");
const deleteButton = document.querySelector(".btn_2");
const input = document.getElementById("text");
const checkbox = document.getElementById('')
const tasks = [];

addButton.addEventListener("click", (e) => {
  const li = document.createElement("li");
  // const label = document.createElement("label");
  const checkbox = document.createElement("input");
  if (input.value !== "") {
    ulParrentElement.appendChild(li);
    // ulParrentElement.appendChild(label);
    ulParrentElement.appendChild(checkbox);
    li.setAttribute("id", `list_Element_${tasks.length}`);
    // label.setAttribute("id", `list_Element_Name_${tasks.length}`);
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("id", `checkbox_Element_${tasks.length}`);
    li.innerText = input.value;
    tasks.push(li);

    input.value = "";
  } else {
    alert("Musisz wpisać tekst");
  }
});

deleteButton.addEventListener("click", (e) => {
  const checkedCheckbox = document.querySelectorAll(
    'input[type="checkbox"]:checked'
    );
    
    checkedCheckbox.forEach((element) => {
      ulParrentElement.removeChild(element.previousSibling);
      ulParrentElement.removeChild(element);
    });
  });
  
  editButton.addEventListener("click", function (e) {
    const checkedCheckbox_toEdit = document.querySelector(
      'input[type="checkbox"]:checked'
      );
      
      if (input.value == "") {
        alert("Pole edycji jest puste");
      } else if (e.isTrusted && checkedCheckbox_toEdit.value) {
        checkedCheckbox_toEdit.previousElementSibling.innerText = input.value;
    input.value = "";
  }
  // console.log("działa");
  // console.log("info",info );
  
  // console.log("e",e );
  // console.log("checkedCheckboxes_toEdit",checkedCheckboxes_toEdit );
  // const textContent = checkedCheckboxes_toEdit.previousElementSibling;
  // e.target.textContent = input.value;
});



input.addEventListener('click',() => {
  if(input.type == 'checkbox' && input.checked == 1) {
    addButton.disabled = false;
  console.log('jest' );
  }
});