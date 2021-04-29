import React from "react";
import { observer } from "mobx-react";
import { action } from "mobx";

const TodoList = ({ store }) => {
  function createNew(e) {
    if (e.which === 13) {
      store.createTodo(e.target.value);
      e.target.value = "";
    }
  }
  function filter(e) {
    store.input = e.target.value;
  }
  return (
    <div>
      <h1>todos</h1>
      <ul>
        {store.filteredTodos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              value={todo.complete}
              defaultChecked={todo.complete}
              onChange={action(() => store.toggleTodo(todo))}
            />
            {todo.value}
          </li>
        ))}
      </ul>
      <h1>create new todo</h1>
      <input onKeyPress={action((e) => createNew(e))} />
      <h1>search</h1>
      <input value={store.input} onChange={action((e) => filter(e))} />
    </div>
  );
};
export default observer(TodoList);
