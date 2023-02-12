import React,{FC} from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { SnapItem } from "react-snaplist-carousel";
import { SnapImageProps } from "../../config/interfaces";
import './snapImageStyles.css'

export const SnapImage:FC<SnapImageProps> = (props:any) =>{
  
    return ( <SnapItem margin={{ left: '0px', right: '0px' }} className='snap-item' height={'100%'} width={'100%'} snapAlign="center" key={props?.key}>
    <LazyLoadImage effect="blur" src={props?.image.name}  className='img-carousel' />
    <p className="first-subtitle">{props?.image?.text}</p>
    <div className="second-subtitle">
        <p >{props?.image?.text}</p>
        <button>Info</button>
    </div>
</SnapItem>)
}