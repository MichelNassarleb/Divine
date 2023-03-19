import React, { FC, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { SnapItem } from "react-snaplist-carousel";
import { SnapImageProps } from "../../config/interfaces";
import "./snapImageStyles.css";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";
export const SnapImage: FC<SnapImageProps> = (props: any) => {
  const [infoDisplayed, setInfoDisplayed] = useState(false);
  return (
 props?.image?.name ? <SnapItem
      margin={{ left: "0px", right: "0px" }}
      className="snap-item"
      height={"100%"}
      width={"100%"}
      snapAlign="none"
      key={props?.key}
    >
      <LazyLoadImage
        effect="blur"
        src={props?.image.name}
        className="img-carousel"
      />
      
    </SnapItem> : null
  );
};
