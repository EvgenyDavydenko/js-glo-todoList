const input = document.querySelector('.message');
const button = document.querySelector('.add');

let todoList = [];

button.addEventListener('click', function(){

    const todoItem = {
        todo: input.value,
        checked: false,
        important: false
    };

    todoList.push(todoItem);
    console.log(todoList);
});
