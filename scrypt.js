document.addEventListener("DOMContentLoaded", function(){
    const addTodo = () => {
        document.querySelector('.btn-done').addEventListener("click", displayDate);
    
        function displayDate() {
            let input_value = '';
            let new_item = '';
            input_value = document.getElementById('new-task').value;
            if(input_value.trim() !== ''){
                new_item = document.createElement('li');
                new_item.textContent = input_value;
            }
       
            const TodoList = document.getElementsByClassName('list-todo')[0];
            TodoList.appendChild(new_item)
    
            document.getElementById('new-task').value = ''

            newListItem.classList.add('new-todo-item');
    
        }

    
    }

    const deleteTodo = () =>{
        document.querySelector('#btn-delete').addEventListener("click", deleteDate)
    }
    document.querySelector('.btn-done').addEventListener("click", addTodo);
    
});

