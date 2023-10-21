import React from "react";
import './ButtonComponent.css';

interface Props {
  color: string;
  children?: React.ReactNode;
  onClick: () => void;
}

const Button: React.FC<Props> = ({ 
    color,
    children,
    onClick, 
  }) => { 
  return (
    <button className = "button-component" style = {{backgroundColor: color}} onClick={onClick}>
    {children}
    </button>
  );
}

export default Button;