
import React from "react";
import Image from "next/image";

interface CustomImageProps {
  src: string;
  alt: string;
  onLoad?: () => void;
  width: number;
  height: number;  
  className?: string;
  priority?: boolean;
  layout?: "fill" | "fixed" | "intrinsic" | "responsive";
  style?:{}
}

const CustomImage: React.FC<CustomImageProps> = ({
  src,
  alt,style,
  width,onLoad,
  height,
  className,
  priority = false,
  layout = "intrinsic",
}) => {
  return (
    
      <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              priority={priority}
              layout={layout}
      className={className}
      onLoad={onLoad}
      />
    
  );
};

export default CustomImage;
