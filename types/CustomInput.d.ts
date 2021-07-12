import {InputHTMLAttributes} from "react";

export interface ICustomInput extends InputHTMLAttributes<HTMLInputElement> {
  label?: string,
  inputClassName?: string,
  labelClassName?: string,
  textClassName?: string,
  placeholder?: string,
  errorText?: string
}