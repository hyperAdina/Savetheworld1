// get all td elements
const cells = document.querySelectorAll('td');

// add click event listener to each cell
cells.forEach((cell) => {
  cell.addEventListener('click', (event) => {
    // check if the event target is a td element and doesn't contain a todo input
    if (event.target.tagName === 'TD' && !event.target.querySelector('.todo-input')) {
      // remove any existing todo inputs
      const todoInputs = document.querySelectorAll('.todo-input');
      todoInputs.forEach((todoInput) => {
        todoInput.remove();
      });

      // create todo input element
      const todoInput = document.createElement('input');
      todoInput.classList.add('todo-input');
      todoInput.type = 'text';
      todoInput.placeholder = 'Add Todo...';
      todoInput.addEventListener('keydown', (event) => {
        // check if enter key was pressed
        if (event.keyCode === 13) {
          // get todo value and create todo item
          const todo = event.target.value;
          if (todo) {
            // create checkbox element
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';

            // create todo text element
            const todoText = document.createTextNode(todo);

            // create todo item div
            const todoItem = document.createElement('div');
            todoItem.classList.add('todo-item');

            // add checkbox and todo text to todo item
            todoItem.appendChild(checkbox);
            todoItem.appendChild(todoText);

            // append todo item to cell
            cell.appendChild(todoItem);

            // clear todo input value and remove todo input
            event.target.value = '';
            event.target.remove();
          }
        } else if (event.keyCode === 27) {
          // clear todo input value and remove todo input if escape key is pressed
          event.target.value = '';
          event.target.remove();
        }
      });

      // append todo input to cell
      cell.appendChild(todoInput);

      // focus on todo input
      todoInput.focus();
    }
  });
});

// add click event listener to each checkbox
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('click', (event) => {
    // check if checkbox is checked
    if (event.target.checked) {
      // add strikethrough
      const todoItem = event.target.parentNode;
      todoItem.style.textDecoration = 'line-through';
    } else {
      // remove strikethrough
      const todoItem = event.target.parentNode;
      todoItem.style.textDecoration = 'none';
    }
  });
});