import React, { ButtonHTMLAttributes } from "react";


import BtnStyle from "./button.module.scss";
import Link from "next/link";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}
type LinkBtnProps = {
  href: string;
  extraClass?: string;
  title: string | React.ReactNode;
  onClick?: () => void;
  style?: { [key: string]: any };
};

export const PrimaryButton: React.FC<ButtonProps> = (props) => {
  const { className, children, ...rest } = props;

  return (
    <button className={` ${BtnStyle.button} ${className && className}`} {...rest}>
      {children}
    </button>
  );
};

export const LinkButton: React.FC<LinkBtnProps> = ({
  href,
  extraClass,
  title,
  onClick,
  style,
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <Link
      
      href={href}
      style={style}
      
      className={`${extraClass} ${BtnStyle.linkBtn}`}
      onClick={handleClick}
    >
      {title}
    </Link>
  );
};

export const CountButton = ({
  onClick,
  children,
}: {
  onClick?: Function;
  children?: any;
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button className={BtnStyle.count} onClick={handleClick}>
      {children}
    </button>
  );
};

export const SettingsButton = ({
  onClick,
  children,
}: {
  onClick?: Function;
  children?: any;
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      className="w-full h-[3rem] flex text-white  bg-[#b51749] hover:bg-pink200 rounded-full overflow-hidden max-w-[230px] cursor-pointer text-lg justify-center items-center"
    >
      {children}
    </button>
  );
};
