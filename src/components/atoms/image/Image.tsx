import { useState } from 'react';
import { SpinalLoader } from '../loader/Loader';
import styles from './image.module.scss';
import CustomImage from './CustomImages';

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
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            width: '100%',
          }}
        >
          <SpinalLoader />
        </div>
      )}
      <CustomImage
        src={src}
        alt={alt || 'alt image'}
        className={styles.image}
        {...restProps}
        onLoad={handleImageLoad}
        style={{ display: isImageLoaded ? 'inline' : 'none' }}
        height={500}
        width={500}
      />
    </>
  );
};

export default Image;
