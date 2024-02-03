// const olParrentElement = document.querySelector("ol");
// const addButton = document.querySelector(".btn");
// const editButton = document.querySelector(".btn_1");
// const deleteButton = document.querySelector(".btn_2");
// const input = document.getElementById("text");
// const tasks = [];
// addButton.disabled = false;
// editButton.disabled = true;
// deleteButton.disabled = true;
// document.addEventListener("click", function (event) {
//   console.log("event", event);
//   handleButtons(event);
//   handleDisplayButtons(event);
// });
// function handleButtons(event) {
//   if (input.value !== "" && event.target === addButton) {
//     const li = document.createElement("li");
//     const checkbox = document.createElement("input");
//     olParrentElement.appendChild(li);
//     olParrentElement.appendChild(checkbox);
//     li.setAttribute("id", `list_Element_${tasks.length}`);
//     checkbox.setAttribute("type", "checkbox");
//     checkbox.setAttribute("id", `checkbox_Element_${tasks.length}`);
//     li.innerText = input.value;
//     tasks.push(li);
//     input.value = "";
//   } else if (event.target === deleteButton) {
//     const checkedCheckbox = document.querySelectorAll(
//       'input[type="checkbox"]:checked'
//     );
//     checkedCheckbox.forEach((element) => {
//       olParrentElement.removeChild(element.previousSibling);
//       olParrentElement.removeChild(element);
//     });
//   } else if (event.target === editButton) {
//     const checkedCheckbox_toEdit = document.querySelector(
//       'input[type="checkbox"]:checked'
//     );
//     checkedCheckbox_toEdit.previousElementSibling.innerText = input.value;
//     input.value = "";
//   }
// }
// function handleDisplayButtons(event) {
//   const newCheckbox = event.target.closest("input[type='checkbox']");
//   if (newCheckbox) {
//     addButton.disabled = true;
//     editButton.disabled = false;
//     deleteButton.disabled = false;
//   } else if (input.value !== "") {
//     addButton.disabled = false;
//     editButton.disabled = true;
//     deleteButton.disabled = true;
//   }
// }
const olParrentElement = document.querySelector("ol");
const addButton = document.querySelector(".btn");
const editButton = document.querySelector(".btn_1");
const deleteButton = document.querySelector(".btn_2");
const textInput = document.getElementById("text");
const tasks = [];
// resetButtonState();
resetTextInputState();
document.addEventListener("keyup", function(event) {
    const isEventInTextInput = event.target === textInput;
    if (isEventInTextInput) handleTextInput(event);
});
document.addEventListener("click", function(event) {
    const isEventOnButton = event.target === addButton || event.target === deleteButton || event.target === editButton;
    if (isEventOnButton) handleButton(event);
});
function handleButton(event) {
    console.log("3 handleButton", event);
    if (event.target == addButton) addTaskToList();
    else if (event.target == deleteButton) deleteTaskFromList();
    else if (event.target == editButton) editTask();
// resetTextInputState();}
// jesli edit kliniety
// jesli delete kliniety
}
function handleTextInput(event) {
    console.log("handleTextInput", event.target.value);
// jeśli text input pusty to edit i delete disabled
// jesli text input nie pusty to text
// ZDARZENIE ADD BUTTON CLICK
// 1 addTaskToList
// 2 resetButtonState
// 3 resetTextInputState
}
// function resetButtonState() {
//   addButton.disabled = false;
//   editButton.disabled = true;
//   deleteButton.disabled = true;
// }
function resetTextInputState() {
    textInput;
}
function addTaskToList() {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    olParrentElement.appendChild(li);
    olParrentElement.appendChild(checkbox);
    li.setAttribute("id", `list_Element_${tasks.length}`);
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("id", `checkbox_Element_${tasks.length}`);
    li.innerText = textInput.value;
    tasks.push(li);
}
function deleteTaskFromList() {
    const checkedCheckbox = document.querySelectorAll("input[type='checkbox']:checked");
    // jak to moge zapisać oddzielnie
    checkedCheckbox.forEach((element)=>{
        olParrentElement.removeChild(element.previousSibling);
        olParrentElement.removeChild(element);
    });
}
function editTask() {
    const checkedCheckbox_toEdit = document.querySelector('input[type="checkbox"]:checked');
    // jak to moge zapisać oddzielnie
    checkedCheckbox_toEdit.previousElementSibling.innerText = textInput.value;
}

//# sourceMappingURL=index.c4775257.js.map
