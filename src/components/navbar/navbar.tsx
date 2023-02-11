import React, { FC } from "react";
import { Link } from "react-router-dom";
import { NavbarProps } from "../../config/interfaces";
import './navbarStyles.css'
import InstagramIcon from '@mui/icons-material/Instagram';

export const Navbar:FC<NavbarProps> = (props) =>{
    
    return <nav className="navbar-container">
        <div className="navbar-subcontainer">
        {props?.name ? <h1 className="navbar-name"><a href="/"> {props.name}</a></h1> : null}
        <div className="navbar-types-container">
        {props?.types?.length > 0 ? props.types.map((item:string,index)=><Link key={index} to={`/category/${item}`} className="navbar-type"  children={item}/>) : null}
        </div>
        {props?.copyright ? <p className="copyright">{props.copyright}</p> : null}
        <a target={'_blank'} href='https://www.instagram.com/divinegrgs/?igshid=Yzg5MTU1MDY=' className="navbar-type">
        <InstagramIcon fontSize="small"/>
        </a>
        </div>
    </nav>
}