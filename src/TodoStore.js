import { action, computed, makeObservable, observable } from "mobx";

class Todo {
  value;
  id;
  complete;

  constructor(value) {
    this.value = value;
    this.id = Date.now();
    this.complete = false;
    makeObservable(this, {
      value: observable,
      id: observable,
      complete: observable 
    })
  }
}

class TodoStore {
  todos = [];
  input = "";

  constructor() {
    makeObservable(this, {
      todos: observable,
      input: observable,
      filteredTodos: computed,
      createTodo: action,
      toggleTodo: action
    })
  }

  get filteredTodos() {
    var matchesFilter = new RegExp(this.input, "i");
    return this.todos.filter(todo => !this.input || matchesFilter.test(todo.value))
  }

  createTodo(value) {
    this.todos.push(new Todo(value));
  }

  toggleTodo(todo) {
    todo.complete = !todo.complete;
  }
}

var store = window.store = new TodoStore();

export default store;