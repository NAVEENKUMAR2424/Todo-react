import React, { useState } from "react";

export default function Todolist() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const id=Math.floor(Math.random() * 10000);

  function handleInputChange(e) {
    setNewTodo(e.target.value);
  }
//add todo functionality 
  function addTodo() {
    if (newTodo.trim() !== "") {
      setTodos([
        ...todos,
        { id: id, text: newTodo.trim(), completed: false },
      ]);
      setNewTodo("");
    }
  }
console.log(todos);
  function handleToggleComplete(index) {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  }

  function Delete(index) {
    console.log("index", index);
    const updatedlist = [...todos];
    const updatedTodos = updatedlist.filter((_) => _.id !== index);
    console.log(updatedTodos);
    setTodos(updatedTodos);
  }

  return (
    <div className="con">
      <h1>TodoList</h1>
      <input value={newTodo} onChange={handleInputChange} />
      <button onClick={addTodo}>Add Todo</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleComplete(index)}
            />
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>

            <button onClick={() => Delete(todo.id)}> Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
