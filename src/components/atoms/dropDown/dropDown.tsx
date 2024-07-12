import { FunctionComponent, useState } from "react";
import styles from "./dropDown.module.scss";
import { FaChevronDown } from "react-icons/fa";
import Image from "next/image";


interface DropdownProps {
  width?: string;
  minWidth?: string;
  fontSize?: string;
  height?: string;
  dropdownIcon?: string;
  borderRadius?: string;
  backgroundColor?: string;
  selected: number;
  border?: string;
  setValue: (value: any) => void;
  options: (string | number)[];
  placeholder?: string;
  disabled?: boolean;
  containerHeight?: string;
  iconSize?: string;
  padding?: string;
  selectedAccount?: string;
  switchAccount?: boolean;
}
const Dropdown: FunctionComponent<DropdownProps> = ({
  width,
  minWidth,
  height,
  dropdownIcon,
  selected,
  setValue,
  options,
  placeholder,
  disabled,
  borderRadius,
  backgroundColor,
  border,
  fontSize,
  iconSize,
  padding,
  switchAccount = false,
}) => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  
  

  const extra_styles = {
    borderRadius,
    backgroundColor,
    width,
    height,
    minWidth,
    border,
    padding,
  };

  const handleAccountSwitch = () => {
    
  };

  return (
    <div className={styles.container} style={extra_styles}>
      <button
        className={styles.drop_down_btn}
        disabled={disabled}
        style={{ width, height, padding }}
        onClick={(e) => {
          e.preventDefault();
          setShowDropdown(!showDropdown);
        }}
      >
        <span
          className={styles.clipped}
          style={{
            maxWidth: "14rem" || "7.5rem",
            fontSize,
          }}
        >
          {selected < 0 ? placeholder : options[selected]}
        </span>
        <div
          className={styles.selected}
          style={{
            transform: showDropdown ? "rotate(180deg)" : "none",
            transition: ".3s linear",
            right: iconSize === "sm" ? "0.3rem" : "",
          }}
        >
          {dropdownIcon ? (
            <Image src={dropdownIcon} alt="drop" />
          ) : (
            <FaChevronDown style={{ width: iconSize === "sm" ? "8px" : "" }} />
          )}
        </div>
      </button>

      {showDropdown && (
        <div className={styles.options} style={{ width, top: `${height}` }}>
          {options.map((value, index) => {
            return (
              <button
                style={{
                  width,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  display: "flex",
                  padding: "0px 0.625rem",
                }}
                onClick={() => {
                  setValue(index);
                  setShowDropdown(false);
                  switchAccount ? handleAccountSwitch?.() : null;
                }}
                key={index}
              >
                {value}
              </button>
            );
          })}
        </div>
      )}
      {showDropdown && (
        <div
          className={styles.close_div}
          onClick={() => setShowDropdown(false)}
        ></div>
      )}
    </div>
  );
};

export default Dropdown;
