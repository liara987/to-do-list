import { ChangeEvent, FormEvent, useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { useTodo } from "../context/TodoContext";

export default function Form() {
  const { createTodo } = useTodo();
  const [value, setValue] = useState("");

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (!value) return;
    createTodo(value);
    setValue("");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input type="text" value={value} onChange={handleInputChange} />
        <Button type="submit" text="Salvar" />
      </form>
    </>
  );
}
