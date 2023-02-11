import MenuIcon from '@mui/icons-material/Menu';
import React from "react";
import './menuStyles.css'

export const Menu = () =>{
    return(
    <div className="menu-container">
        <h1>Divine Gerges</h1>
        <div className='burger-icon' onClick={()=>console.log('test')}>
        <MenuIcon  />
        </div>
    </div>
    )
}