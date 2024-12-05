import { ButtonProps } from "../@types/todo";

export default function Button({ text, ...props }: ButtonProps) {
  return (
    <>
      <button {...props}>{text}</button>
    </>
  );
}
