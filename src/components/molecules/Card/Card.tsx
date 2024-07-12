import React from 'react';

interface CardWrapperProps {
  children: React.ReactNode;
  className?:string
  
}

const Card: React.FC<CardWrapperProps> = ({ children,className }) => {
  return (
    <div className={` rounded-lg shadow-lg ${className}`} >
      {children}
    </div>
  );
};

export default Card;
