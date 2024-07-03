import React from 'react';

interface Props {
  label: string;
  name: string;
  value: string;
  type: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onBlur: React.ChangeEventHandler<HTMLInputElement>;
}

const Input = ({ label, name, value, type, onChange, onBlur }: Props) => {
  return (
    <div className='grid grid-cols-2 items-center jus'>
      <label className='p-5' htmlFor={name}>{label}</label>
      <input
        className='border p-3'
        value={value}
        name={name}
        onChange={onChange}
        type={type}
        onBlur={onBlur}
      />
    </div>
  );
};

export default Input;
