import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'success' | 'info' | 'danger';
  children: ReactNode;
}

function Button({ children, variant = 'primary', ...props }: ButtonProps) {
  return (
    <button className={`btn btn-${variant}`} type="button" {...props}>
      {children}
    </button>
  );
}

export default Button;
