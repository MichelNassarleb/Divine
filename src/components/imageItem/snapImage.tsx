import { FC } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { SnapItem } from "react-snaplist-carousel";
import { SnapImageProps } from "../../config/interfaces";
import "./snapImageStyles.css";

export const SnapImage: FC<SnapImageProps> = (props: SnapImageProps) => {
  
  return (
 props?.image?.uri ? <SnapItem
      margin={{ left: "0px", right: "0px" }}
      className="snap-item"
      height={"100%"}
      width={"100%"}
      snapAlign="none"
      key={props?.key}
    >
      <LazyLoadImage
        effect="blur"
        src={props?.image.uri}
        alt="image"
        className="img-carousel"
      />
      
    </SnapItem> : null
  );
};
