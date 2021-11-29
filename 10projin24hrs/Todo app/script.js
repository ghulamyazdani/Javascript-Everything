const text = document.getElementById('textarea');
const lists = document.getElementById('lists');
const addBtn = document.getElementById('add');
const todos = JSON.parse(localStorage.getItem("todos"));

if (todos) {
    todos.forEach((todo) => {
        addList(todo);
    });
}
addBtn.addEventListener('click', function(){
    if(text.value === ''){
        alert('Please enter a value');
    } else {
    addList(text.value);
    updateLS();
    }
});
function addList(value) {
    const list = document.createElement('li');

    list.innerHTML = `
        <span>${value}</span
        ><button class="delete"><i class="fas fa-close"></i></button>
     `;
    const check = value;
    do {
        lists.appendChild(list);
      }
      while (check!==value);
      const deleteBtn = list.querySelector('.delete');
      deleteBtn.addEventListener('click',() => {
          list.remove();
          updateLS();   
      });
}


function updateLS() {
    const todosEl = document.querySelectorAll("span");

    const todos = [];

    todosEl.forEach((todoEl) => {
        todos.push(todoEl.innerText);
    });
    localStorage.setItem("todos", JSON.stringify(todos));
}