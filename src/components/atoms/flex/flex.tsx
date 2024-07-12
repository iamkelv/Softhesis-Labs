import { MouseEventHandler } from "react";
import styles from "./flex.module.scss";

interface FlexProps {
  width?: string;
  height?: string;
  padding?: string;
  margin?: string;
  background?: string;
  alignItems?: string;
  justifyContent?: string;
  flexFlow?: string;
  gap?: string;
  cursor?: string;
  opacity?: string;
  BoxShadow?: string;
  minHeight?: string;
  maxHeight?: string;
  alignSelf?: string;
  borderRadius?: string;
  border?: string;
  borderRight?: string;
  zIndex?: number;
  className?: string;
  children?: React.ReactNode;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const Flex: React.FC<FlexProps> = ({ children, className, ...restProps }) => {
  return (
    <div
      style={{ ...restProps }}
      className={`${styles.container} ${className} `}
      onClick={restProps.onClick}
    >
      {children}
    </div>
  );
};

export default Flex;
