import * as React from 'react';
import {ICustomInput} from "../../types/CustomInput";

const CustomInput: React.FC<ICustomInput> = (
    { inputClassName= "",
      labelClassName= "",
      textClassName = "" ,
      label,
      type= "text",
      placeholder ,
      errorText,
      ...rest
    }) => {
  return (
      <label className={`custom-input ${labelClassName}`}>
        <span className={`custom-input__label ${textClassName}`}>
          {label}
        </span>
        <input placeholder={placeholder}
               type={type}
               className={`custom-input__input ${inputClassName}`}
               {...rest}
        />
        { errorText && <span className={`custom-input__error`}>{ errorText }</span> }
      </label>
  );
};
export default CustomInput