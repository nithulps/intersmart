import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'white' | 'outline';
  className?: string;
}

export default function Button({
  children,
  variant = 'primary',
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles =
    'text-sm sm:text-base font-medium rounded-full transition-all duration-200 cursor-pointer shadow-sm hover:shadow-lg';

  const variants = {
    primary: 'bg-[#1E293B] hover:bg-[#0F172A] text-white px-10 py-3',
    white: 'bg-white text-[#01013F] hover:bg-gray-100 hover:scale-105 px-8 py-3',
    outline:
      'border border-white text-white hover:bg-white hover:text-[#0D1117] px-7 py-3',
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
