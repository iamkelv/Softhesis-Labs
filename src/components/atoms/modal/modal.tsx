import { AiOutlineClose } from "react-icons/ai";
import styles from "./modal.module.scss";
import Text from "../text/text";
import useWindowDimensions from "../../../utils/windowDimensions";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  title?: any;
  closeIcon?: boolean;
  children: React.ReactNode;
  padding?: string;
  usePadding?: boolean;
  titlePosition?: string;
  width?: string;
  maxHeight?: string;
  addMargin?: boolean;
  addHeight?: boolean;
  iconBackground?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  closeIcon = true,
  children,
  padding,
  usePadding = true,
  titlePosition,
  addMargin,
  width = "auto",
  maxHeight = "90vh",
  iconBackground,
}) => {
  const { width: windowWidth } = useWindowDimensions();
  const handleClose = (e, type = "") => {
    e?.stopPropagation();

    const val = e?.target.id;
    if (val === "close" || type === "close") onClose();
  };

  if (!isOpen) return null;
  return (
    <div
      className={`${styles.container}  `}
      onClick={(e) => handleClose(e)}
      id="close"
    >
      <div
        className={`${styles.box} p-[${padding}]`}
        style={{ width: windowWidth > 768 ? width : "90%", maxHeight }}
      >
        <div
          className={`${`${styles.title} ${addMargin ? "h-[2rem]" : null}`} ${
            titlePosition ? `justify-${titlePosition}  ` : null
          } `}
        >
          {title && typeof title === "string" ? (
            <Text color="#111111">{title}</Text>
          ) : (
            title
          )}

          {closeIcon && (
            <div
              id="close"
              onClick={() => handleClose(null, "close")}
              className={`${styles.close} ${
                iconBackground ? `bg-[${iconBackground}]  rounded-full ` : null
              }`}
            >
              <AiOutlineClose className={styles.svg} />
            </div>
          )}
        </div>
        <div className={styles.children}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
