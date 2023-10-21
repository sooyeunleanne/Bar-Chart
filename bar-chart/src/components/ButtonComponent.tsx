import React from "react";
import './ButtonComponent.css';

interface Props {
  color: string;
  onClick: () => void;
}

const Button: React.FC<Props> = ({ color, onClick}) => { 
  return (
    <button className = "button-component" style = {{backgroundColor: color}} onClick={onClick}>
    </button>
  );
}

export default Button;