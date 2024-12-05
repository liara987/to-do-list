import { ButtonHTMLAttributes, InputHTMLAttributes } from "react";

export interface TodoType {
  id: number;
  content: string;
  status: boolean;
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> { }

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}