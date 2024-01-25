document.addEventListener('DOMContentLoaded', () => {
    //get elements that we need
    delete_btn = document.getElementsByClassName('delete-btn'); 
    

    //function that deletes btn on click
    Array.from(delete_btn).forEach((delete_btn) => {
        delete_btn.addEventListener('click', (e) =>{
            const todo_item = e.currentTarget.closest('.list-item')
            if(todo_item){
                todo_item.remove();
            }
        });
    });

    //function that adds new list items


});