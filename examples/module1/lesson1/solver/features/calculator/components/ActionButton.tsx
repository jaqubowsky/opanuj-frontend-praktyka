import type { HTMLProps } from 'react';

interface ActionButtonProps extends HTMLProps<HTMLButtonElement> {}

export function ActionButton({ onClick, children }: ActionButtonProps) {
  return (
    <button
      className="bg-blue-200 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
