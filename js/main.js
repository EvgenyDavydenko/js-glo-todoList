const input = document.querySelector('.message');
const button = document.querySelector('.add');
const ul = document.querySelector('.todo');

let todoList = [];

if(localStorage.getItem('todo')){
    todoList = JSON.parse(localStorage.getItem('todo'));
    displayMessages();
}

button.addEventListener('click', function(){

    const todoItem = {
        todo: input.value,
        checked: false,
        important: false
    };

    todoList.push(todoItem);
    displayMessages();
    localStorage.setItem('todo', JSON.stringify(todoList));
});

function displayMessages(){
    let displayMessage = '';
    todoList.forEach(function(item, i){
        displayMessage += `
        <li>
            <input type='checkbox' id='item_${i}' ${item.checked ? 'checked' : ''}> 
            <lable for="item_${i}">${item.todo}</lable>
        </li>
        `;
        ul.innerHTML = displayMessage;
    });
}