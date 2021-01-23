import { InputHTMLAttributes } from "react";

import { Label } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input: React.FC<InputProps> = ({ label, name, ...props}) => {
  return (
    <Label htmlFor={name}>
      {label}
      <input
        type="text"
        name={name}
        id={name}
        {...props}
      />
    </Label>
  );
};

export default Input;
