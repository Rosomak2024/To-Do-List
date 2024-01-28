const olParrentElement = document.querySelector("ol");
const addButton = document.querySelector(".btn");
const editButton = document.querySelector(".btn_1");
const deleteButton = document.querySelector(".btn_2");
const input = document.getElementById("text");
const tasks = [];
addButton.disabled = false;
editButton.disabled = true;
deleteButton.disabled = true;
document.addEventListener("click", function(event) {
    console.log("event", event);
    function setButtons() {
        if (input.value !== "" && event.target === addButton) {
            const li = document.createElement("li");
            const checkbox = document.createElement("input");
            olParrentElement.appendChild(li);
            olParrentElement.appendChild(checkbox);
            li.setAttribute("id", `list_Element_${tasks.length}`);
            checkbox.setAttribute("type", "checkbox");
            checkbox.setAttribute("id", `checkbox_Element_${tasks.length}`);
            li.innerText = input.value;
            tasks.push(li);
            input.value = "";
        } else if (event.target === deleteButton) {
            const checkedCheckbox = document.querySelectorAll('input[type="checkbox"]:checked');
            checkedCheckbox.forEach((element)=>{
                olParrentElement.removeChild(element.previousSibling);
                olParrentElement.removeChild(element);
            });
        } else if (event.target === editButton) {
            const checkedCheckbox_toEdit = document.querySelector('input[type="checkbox"]:checked');
            checkedCheckbox_toEdit.previousElementSibling.innerText = input.value;
            input.value = "";
        }
    }
    setButtons();
    const newCheckbox = event.target.closest("input[type='checkbox']");
    function setDisplayButtons() {
        if (newCheckbox) {
            addButton.disabled = true;
            editButton.disabled = false;
            deleteButton.disabled = false;
        } else if (input.value !== "") {
            addButton.disabled = false;
            editButton.disabled = true;
            deleteButton.disabled = true;
        }
    }
    setDisplayButtons();
}); // ** Last Version **
 // addButton.addEventListener("click", () => {
 //   const li = document.createElement("li");
 //   const checkbox = document.createElement("input");
 //   if (input.value !== "") {
 //     olParrentElement.appendChild(li);
 //     olParrentElement.appendChild(checkbox);
 //     li.setAttribute("id", `list_Element_${tasks.length}`);
 //     checkbox.setAttribute("type", "checkbox");
 //     checkbox.setAttribute("id", `checkbox_Element_${tasks.length}`);
 //     li.innerText = input.value;
 //     tasks.push(li);
 //     input.value = "";
 //   } else {
 //     alert("Musisz wpisać tekst");
 //   }
 // });
 // deleteButton.addEventListener("click", () => {
 //   const checkedCheckbox = document.querySelectorAll(
 //     'input[type="checkbox"]:checked');
 //   checkedCheckbox.forEach((element) => {
 //     olParrentElement.removeChild(element.previousSibling);
 //     olParrentElement.removeChild(element);
 //   });
 // });
 // editButton.addEventListener("click", () => {
 //   const checkedCheckbox_toEdit = document.querySelector(
 //     'input[type="checkbox"]:checked');
 //   if (input.value == "") {
 //     alert("Pole edycji jest puste");
 //   } else {
 //     checkedCheckbox_toEdit.previousElementSibling.innerText = input.value;
 //     input.value = "";
 //   }
 // });
 // document.addEventListener("click", function (e) {
 //   const target = e.target.closest("input[type='checkbox']");
 //   if (target) {
 //     addButton.disabled = true;
 //     editButton.disabled = false;
 //     deleteButton.disabled = false;
 //   } else if (input.value !== "") {
 //     addButton.disabled = false;
 //     editButton.disabled = true;
 //     deleteButton.disabled = true;
 //   }
 // });

//# sourceMappingURL=index.c4775257.js.map
