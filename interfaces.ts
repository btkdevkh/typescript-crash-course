function showTodo(todo: {title: string, text: string}) {
  console.log(todo.title+' '+todo.text);
}

let myTodo = {title: 'Trash', text: 'Take out trash'};

showTodo(myTodo);

// Custom type like here is (Todo) or sth else
interface Todo {
  title: string;
  text: string;
}

function showTodo2(todo: Todo) {
  console.log(todo.title+' '+todo.text);
}

showTodo2(myTodo);
