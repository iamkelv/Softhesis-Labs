import React from "react";
import styles from "./label.module.scss";


interface LabelProps {
  required?: boolean;
  text: string;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
}

const InputLabel: React.FC<LabelProps> = ({
  required = false,
  text,
  fontSize,
  fontWeight,
  color,
}) => {
  const style = {
    fontSize,
    fontWeight,
    color,
  };
  return (
    <div className={styles.container}>
      <label style={style}>
        {text} {required && <span className={styles.star}>*</span>}
      </label>
    </div>
  );
};

export default InputLabel;
