//  Task 3: Basic Fetch
function createTodoList() {
  const todoList = document.createElement("ul");

  todoList.setAttribute("id", "todoList");
  document.body.appendChild(todoList);
}

async function displayTodos(todos) {
  let todoList = document.getElementById("todoList");

  if (!todoList) {
    await createTodoList();
    todoList = document.getElementById("todoList");
  }

  todos.slice(0, 5).forEach((todo) => {
    const listItem = document.createElement("li");
    listItem.textContent = todo.title;
    todoList.appendChild(listItem);
  });
}

async function fetchTodos() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const fetchedTodos = await response.json();

    return fetchedTodos;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

async function init() {
  createTodoList();
  const todos = await fetchTodos();

  displayTodos(todos);
}

init();

//  We could have had shorter code, like the one below, but it would have been less modular, reusable, and maintainable. I chose to write code that better aligns with development best practices.
//  fetch("https://jsonplaceholder.typicode.com/todos")
//    .then((response) => response.json())
//    .then((fetchedTodos) => {
//      const todoList = document.getElementById("todoList");
//      const firstFiveTodos = fetchedTodos.slice(0, 5);
//      firstFiveTodos.forEach((todo) => {
//        const listItem = document.createElement("li");
//        listItem.textContent = todo.title;
//        todoList.appendChild(listItem);
//      });
//    })
//    .catch((error) => console.error("Error fetching data:", error));
