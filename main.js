const input = document.querySelector('#input-task');
const addBtn = document.querySelector('#add-btn');
const todoList = document.querySelector('#list-items');

// add task function
function addTask() {
  const inputValue = input.value;
  if (inputValue){
    //create required elements to store input value
    const addLi = document.createElement('li');
    const itemLi = document.createTextNode(inputValue);
    addLi.className = "item";

    const addInput = document.createElement('input');
    addInput.type = "checkbox";
    addInput.className = "completed";

    const addA = document.createElement('a');
    addA.href = "#";
    addA.className = "delete";

    const addI = document.createElement('i');   
    addI.className = "fa fa-trash";

    //appending elements
    addA.appendChild(addI);
    addLi.appendChild(addInput);
    addLi.appendChild(itemLi);
    addLi.appendChild(addA);

    //Event listener for newly created task
    addA.addEventListener('click', deleteTask);

    //insert new list into first index ul
    todoList.insertBefore(addLi, todoList.childNodes[0]);

    input.value = "";  
  }
 
};

// delete task function
function deleteTask(e) {
  e.preventDefault();
  const item = this.parentNode;
  const parentItem = item.parentNode;
  parentItem.removeChild(item);  
}


addBtn.addEventListener('click', addTask);