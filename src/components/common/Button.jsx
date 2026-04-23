import React from 'react';
import './Button.css';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  icon = null,
  loading = false,
  disabled = false,
  onClick,
  type = 'button',
  className = ''
}) => {
  const buttonClasses = `btn btn-${variant} btn-${size} ${loading ? 'btn-loading' : ''} ${className}`;
  
  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading ? (
        <span className="spinner"></span>
      ) : (
        <>
          {icon && <span className="btn-icon">{icon}</span>}
          {children}
        </>
      )}
    </button>
  );
};

export default Button;