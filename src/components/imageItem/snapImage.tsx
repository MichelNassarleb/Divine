import React, { useState } from "react";
import { SnapItem } from "react-snaplist-carousel";
import { ClipLoader } from "react-spinners";
import './snapImageStyles.css'

export const SnapImage = (props:any) =>{
  
    return ( <SnapItem margin={{ left: '0px', right: '0px' }} className='snap-item' height={'100%'} snapAlign="center" key={props?.key}>
    <img src={props?.image.name} className='img-carousel' />
</SnapItem>)
}