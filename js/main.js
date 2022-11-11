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
            <label for="item_${i}">${item.todo}</label>
        </li>
        `;
        ul.innerHTML = displayMessage;
    });
}

ul.addEventListener('change', function(event){
    let idInput = event.target.getAttribute('id');
    let forLabel = ul.querySelector('[for=' + idInput + ']');
    let valueLabel = forLabel.innerHTML;
    // console.log(valueLabel);

    todoList.forEach(function(item){
        if (item.todo === valueLabel){
            item.checked = !item.checked;
            localStorage.setItem('todo', JSON.stringify(todoList));
        }
    });
});