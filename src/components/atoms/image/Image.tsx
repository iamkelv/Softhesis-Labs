import { useState } from "react";
import { SpinalLoader } from "../loader/Loader";
import styles from "./image.module.scss";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt?: string;
}
const Image: React.FC<ImageProps> = ({ src, alt, ...restProps }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <>
      {!isImageLoaded && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            width: "100%",
          }}
        >
          <SpinalLoader />
        </div>
      )}
      <img
        className={styles.image}
        src={src}
        alt={alt || "alt image"}
        {...restProps}
        crossOrigin="anonymous"
        onLoad={handleImageLoad}
        style={{ display: isImageLoaded ? "inline" : "none" }}
      />
    </>
  );
};

export default Image;
