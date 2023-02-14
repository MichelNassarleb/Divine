import MenuIcon from "@mui/icons-material/Menu";
import React, { FC, useState } from "react";
import { useSelector } from "react-redux";
import "./menuStyles.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";
import { MenuProps } from "../../config/interfaces";

export const Menu: FC<MenuProps> = (props) => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <div className="menu-big-container">
      <div className="menu-container">
        <Link to='/'  children='Divine Gerges'/>
        <div className="burger-icon" onClick={() => console.log("test")}>
          <div onClick={() => setIsOpened((prev) => !prev)}>
            {isOpened ?<motion.div initial={{transform:'rotate(0deg)'}} transition={{duration:0.5,ease:'easeInOut'}} animate={{transform:'rotate(360deg)'}}><CloseIcon /></motion.div>  : <motion.div initial={{transform:'rotate(360deg)'}} transition={{duration:0.5,ease:'easeInOut'}} animate={{transform:'rotate(0deg)'}}><MenuIcon /></motion.div>}
          </div>
        </div>
      </div>

      {isOpened ? (
        <motion.div
          transition={{ ease: "easeOut", duration: 1 }}
          className="menu-options-container"
          initial={{ height: 0, opacity: 0 }}
          animate={{ opacity: 1, height: 'calc(100vh - (5vh + 40px))'}}
          exit={{ opacity: 0, height: 0 }}
        >
          {props?.types?.length > 0
            ? props.types.map((item: string, index: number) => (
                <Link
                onClick={()=>setIsOpened(prev=>!prev)}
                  key={index}
                  to={`/category/${item}`}
                  className="navbar-type"
                  children={item}
                />
              ))
            : null}

          {props?.copyright ? (
            <p className="copyright">{props.copyright}</p>
          ) : null}
          <a
            target={"_blank"}
            href="https://www.instagram.com/divinegrgs/?igshid=Yzg5MTU1MDY="
            className="navbar-type"
          >
            <InstagramIcon fontSize="small" />
          </a>
        </motion.div>
      ) : null}
    </div>
  );
};
