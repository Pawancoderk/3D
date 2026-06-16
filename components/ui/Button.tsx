import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | string;
  varient?: 'primary' | 'secondary' | 'ghost' | 'outline' | string;
  size?: 'sm' | 'md' | 'lg' | string;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant,
  varient,
  size = 'md',
  fullWidth = false,
  className = '',
  children,
  ...props
}) => {
  const resolvedVariant = variant || varient || 'primary';
  const classes = [
    'btn',
    `btn--${resolvedVariant}`,
    `btn--${size}`,
    fullWidth ? 'btn--full-width' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
