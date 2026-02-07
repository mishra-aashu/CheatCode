import React from 'react';

const Button = ({ children, variant = 'primary', onClick, className = '', type = 'button', disabled = false }) => {
  const baseClass = `btn btn-${variant}`;
  
  return (
    <button
      type={type}
      className={`${baseClass} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
