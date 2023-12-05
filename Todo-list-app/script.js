function addTodo() {
    var todoInput = document.getElementById('todoInput');
    var todoList = document.getElementById('todoList');
    var todoText = todoInput.value;
  
    if (todoText.trim() !== '') {
      var li = document.createElement('li');
      li.appendChild(document.createTextNode(todoText));
      var completeButton = document.createElement('button');
      completeButton.innerHTML = 'Complete';
      completeButton.onclick = function() {
        completeTask(this);
      };
      li.appendChild(completeButton);
      var removeButton = document.createElement('button');
      removeButton.innerHTML = 'Remove';
      removeButton.onclick = function() {
        removeTask(this);
      };
      li.appendChild(removeButton);
      todoList.appendChild(li);
      todoInput.value = '';
    }
  }
  
  function completeTask(button) {
    var completedList = document.getElementById('completedList');
    var li = button.parentNode;
    li.removeChild(button);
    completedList.appendChild(li);
  }
  
  function removeTask(button) {
    var li = button.parentNode;
    li.parentNode.removeChild(li);
  }
  