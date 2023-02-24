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
       {props?.image?.text ?  <p> {props?.image?.text}</p> : null}
      {infoDisplayed ? (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "100%" }}
          className="second-subtitle"
        >
        {props?.image?.text ?  <p>{props?.image?.text}</p> : null}
          <CloseIcon
            style={{ color: "grey",cursor:'pointer' }}
            onClick={() => setInfoDisplayed((prev) => !prev)}
          />
        </motion.div>
      ) : (
        <div className="second-subtitle info-btn">
          <motion.button initial={{opacity:0}} animate={{opacity:1}} onClick={() => setInfoDisplayed((prev) => !prev)}>
            Info
          </motion.button>
        </div>
      )}
    </SnapItem> : null
  );
};
