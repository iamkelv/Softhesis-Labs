import React, { useMemo, useRef, useState } from "react";
import styles from "./input.module.scss";
import { CiSearch } from "react-icons/ci";
import { FaStarOfLife } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";

interface InputProps {
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
  name?: string;
  type?:
    | "text"
    | "password"
    | "number"
    | "email"
    | "tel"
    | "date"
    | "checkbox"
    | "url";
  borderRadius?: string;
  width?: string;
  id?: string;
  label?: string;
  required?: boolean;
  noFormat?: boolean;
  defaultValue?: string;
  isSearch?: boolean;
  disabled?: boolean;
  border?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
  isValidateBorder?: true | false;
  error?: { [key: string]: string };
  handleClearSearch?: () => void;
  shadow?: boolean;
}

export function InputField({
  placeholder,
  value,
  isSearch,
  name,
  width,
  required = false,
  noFormat,
  defaultValue = "",
  onChange,
  onBlur,
  onFocus,
  label,
  borderRadius,
  size,
  border = true,
  disabled,
  type = "text",
  className,
  id,
  error = {}, 
  handleClearSearch,
  shadow = false,
}: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [formattedValue, setFormattedValue] = useState<string | number>("");

  const handleClear = () => {
    setFormattedValue("");
    handleClearSearch && handleClearSearch();
  };

  const formatNumberWithCommas = (newValue: string | number) => {
    return noFormat
      ? newValue
      : newValue?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  useMemo(() => {
    setFormattedValue(formatNumberWithCommas(value || defaultValue));
  }, [value]);

  const height =
    size === "sm"
      ? "1.875rem"
      : size === "md"
      ? "2.5rem"
      : size === "lg"
      ? "3.125rem"
      : "2.5rem";

  const extraStyle = {
    width,
    height,
    borderRadius,
  };

  const iconStyle = {
    width: size === "sm" ? "1.5rem" : "1.875rem",
    top:
      size === "sm"
        ? "0.05rem"
        : size === "md"
        ? "0.3rem"
        : size === "lg"
        ? "0.65rem"
        : "0.3rem",
  };

  const isEmail = type === "email";
  const errorCondition = name ? error[name] && !value : false;

  return (
    <div className={`${styles.container} border-none`} style={{ width }}>
      {label ? (
        <div className={styles.label_container}>
          <label htmlFor={name}>{label}</label>
          {required ? <FaStarOfLife className={styles.required_icon} /> : null}
        </div>
      ) : null}
      <input
        style={{ ...extraStyle, paddingRight: isSearch ? "3rem" : "1rem" }}
        className={`${styles.input} ${border && !shadow && "border border-[#575757]"} ${className} ${shadow ? styles["input-shadow"] : ""}`}
        ref={inputRef}
        placeholder={placeholder}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        id={id}
        value={formattedValue}
        name={name}
        type={type}
        disabled={disabled}
        required={required}
      />
      {(isEmail ? name && error[name] : errorCondition) && (
        <span style={{ margin: "0 0 0 1rem", fontSize: "0.7rem", color: "#FC5555" }}>
          {name && error[name]}
        </span>
      )}
      {isSearch ? (
        <>
          {value ? (
            <IoCloseOutline
              className={styles.search_icon}
              style={iconStyle}
              onClick={handleClear}
            />
          ) : (
            <CiSearch className={styles.search_icon} style={iconStyle} />
          )}
        </>
      ) : null}
    </div>
  );
}
