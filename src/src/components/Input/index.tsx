import { InputHTMLAttributes } from "react";

import { Label } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string | null;
}

export const Input: React.FC<InputProps> = ({
  label,
  name,
  error,
  ...props
}) => {
  return (
    <Label htmlFor={name} error={error}>
      {label}
      <input type="text" name={name} id={name} {...props} />
      {error && <span>{error}</span>}
    </Label>
  );
};
