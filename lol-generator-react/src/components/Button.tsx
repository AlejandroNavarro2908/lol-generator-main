import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  disabled = false,
  className = 'button'
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={className}
      role="button"
    >
      {children}
    </button>
  );
};