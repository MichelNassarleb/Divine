import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { SnapItem } from "react-snaplist-carousel";
import './snapImageStyles.css'

export const SnapImage = (props:any) =>{
  
    return ( <SnapItem margin={{ left: '0px', right: '0px' }} className='snap-item' height={'100%'} width={'100%'} snapAlign="center" key={props?.key}>
    <LazyLoadImage effect="blur" src={props?.image.name} className='img-carousel' />
    <p>{props?.image?.text}</p>
</SnapItem>)
}