import { ChangeEvent, FormEvent, useState } from "react";
import Button from "./Button";
import Input from "./Input";
import SubHeader from "./SubHeader";
import { useTodo } from "../context/TodoContext";

export default function List() {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [value, setValue] = useState("");
  const [todoUpdate, setTodoUpdate] = useState<{ id: number; content: string }>();
  const { todos, updateTodo, deleteTodo, changeStatusTodo } = useTodo();

  const listStyle = {
    width: "33rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "0.5rem",
  };

  const buttonStyle = {
    marginRight: "0.5rem",
  };

  const checkedStyle = {
    textDecoration: "line-through",
  };

  function handleEdit(id: number, content: string) {
    setTodoUpdate({ id, content });
    setValue(content);

    setIsEditing(true);
  }

  function handleDelete(id: number) {
    deleteTodo(id);
    setIsEditing(false);
  }

  function handleChangeStatus(id: number) {
    changeStatusTodo(id);
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);    
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (todoUpdate?.id) {
      updateTodo(todoUpdate.id, value);
      setValue("");
      setIsEditing(false);
    }
  }

  return (
    <>
      <ul>
        {todos.map((todo) => (
          <li style={listStyle} key={todo.id}>
            <Input type="checkbox" onClick={() => handleChangeStatus(todo.id)} />
            <span style={todo.status ? checkedStyle : {}}>{todo.content}</span>
            <div className="actions">
              <Button style={buttonStyle} text="✏️" onClick={() => handleEdit(todo.id, todo.content)} />
              <Button text="🗑️" onClick={() => handleDelete(todo.id)} />
            </div>
          </li>
        ))}
      </ul>
      {isEditing ? (
        <div className="edit-area">
          <SubHeader subtitle="Edite a tarefa no campo abaixo" />
          <form onSubmit={handleSubmit}>
            <Input type="text" value={value} onChange={handleInputChange} />
            <Button type="submit" text="Editar" />
          </form>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
