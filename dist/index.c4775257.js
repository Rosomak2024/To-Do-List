const ulParrentElement = document.querySelector("ol");
const addButton = document.querySelector(".btn");
const editButton = document.querySelector(".btn_1");
const deleteButton = document.querySelector(".btn_2");
const input = document.getElementById("text");
const tasks = [];
addButton.addEventListener("click", ()=>{
    const li = document.createElement("li");
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
    } else alert("Musisz wpisa\u0107 tekst");
});
deleteButton.addEventListener("click", ()=>{
    const checkedCheckbox = document.querySelectorAll('input[type="checkbox"]:checked');
    checkedCheckbox.forEach((element)=>{
        ulParrentElement.removeChild(element.previousSibling);
        ulParrentElement.removeChild(element);
    });
});
editButton.addEventListener("click", ()=>{
    const checkedCheckbox_toEdit = document.querySelector('input[type="checkbox"]:checked');
    if (input.value == "") alert("Pole edycji jest puste");
    else {
        checkedCheckbox_toEdit.previousElementSibling.innerText = input.value;
        input.value = "";
    }
});
document.addEventListener("click", function(e) {
    const target = e.target.closest("input[type='checkbox']");
    if (target) {
        addButton.disabled = true;
        editButton.disabled = false;
        deleteButton.disabled = false;
    } else if (input.value !== "") {
        addButton.disabled = false;
        editButton.disabled = true;
        deleteButton.disabled = true;
    }
});

//# sourceMappingURL=index.c4775257.js.map