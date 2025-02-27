import type { HTMLProps } from 'react';

interface NumberInput extends HTMLProps<HTMLInputElement> {}

export function NumberInput({ value, onChange }: NumberInput) {
  return (
    <input
      type="number"
      className="rounded-md shadow-md p-4"
      value={value}
      onChange={onChange}
    />
  );
}
