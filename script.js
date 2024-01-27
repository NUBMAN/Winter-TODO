document.addEventListener('DOMContentLoaded', () => {
    //function that deletes btn on click
    const addDeleteButtonListener = (delete_btn) => {
        delete_btn.addEventListener('click', () => {
            const todo_item = delete_btn.closest('.list-item')
            if (todo_item) {
                todo_item.remove();
            }
        });
    };

     //get elements that we need drom DOM
    const delete_btns = document.getElementsByClassName('delete-btn');
    add_btn = document.getElementById('add-btn');
    todo_list = document.getElementById('list');

    // Set up delete button event listeners for existing buttons
    Array.from(delete_btns).forEach(addDeleteButtonListener);

    //function that adds new list items
    add_btn.addEventListener('click', () => {
        //create and add empty list item
        const list_todo_elem = document.createElement('li');
        list_todo_elem.className = 'list-item'

        const todo_checkbox = document.createElement('input');
        todo_checkbox.type = 'checkbox';
        todo_checkbox.className = 'custom-checkbox';

        const span_item = document.createElement('span');
        span_item.className = 'list-item'
        span_item.style.marginLeft = "10px";
        span_item.style.marginRight = "10px";
        span_item.textContent = document.querySelector('#user_input').value;

        const delete_btn = document.createElement('button');
        const img_icon = document.createElement('img')
        img_icon.src = '/assets/clear-svgrepo-com.svg'
        img_icon.style.width = '15px';

        delete_btn.className = 'delete-btn'
        addDeleteButtonListener(delete_btn);    

        delete_btn.appendChild(img_icon);
        list_todo_elem.appendChild(todo_checkbox);
        list_todo_elem.appendChild(span_item);
        list_todo_elem.appendChild(delete_btn);
        todo_list.appendChild(list_todo_elem);
        
    });

});