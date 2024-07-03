import React, { ComponentProps } from 'react';

interface Props extends ComponentProps<'input'> {
  label: string;
}

const Input = ({ label, ...rest }: Props) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input {...rest}  />
    </div>
  );
};

export default Input;
