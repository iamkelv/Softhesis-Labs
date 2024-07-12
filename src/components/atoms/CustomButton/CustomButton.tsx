import React from 'react';


interface ButtonProps {
  label?: string;
    status?: 'completed' | 'ongoing';
  classNames?: string,
  onClick?:(e: React.MouseEvent<HTMLButtonElement>) => void;

    
}

const CustomButton: React.FC<ButtonProps> = ({ label, status,classNames ,onClick}) => {  
  return (
    <button onClick={onClick} className={`${classNames} px-4 py-2 rounded-full font-medium ${status === 'completed' ? 'bg-blue-900 text-white' :  'border border-blue-900 text-blue-900'}`}>
      {label}
    </button>
  );
};

export default CustomButton;
