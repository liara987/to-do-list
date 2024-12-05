import { InputProps } from "../@types/todo";

export default function Input(props: InputProps) {
  const inputStyle = {
    padding: "0.5rem",
    marginRight: "0.5rem",
  };

  return (
    <>
      <input style={inputStyle} {...props} />
    </>
  );
}
