import React, { FC } from "react";
import { CircleLoader } from "react-spinners";
import './loaderStyles.css'
import Lottie from "lottie-react";
import loadingAnimation from '../../assets/animations/loading_animation.json'

export const Loader:FC<{isLoading?:boolean,color?:string}> = (props) =>{

    return props?.isLoading ? <div role={'dialog'} className="loader-container" style={props?.isLoading ? {zIndex:100} : {display:'none'}}>
        <div className="loader-children">
        <Lottie animationData={loadingAnimation} loop={true} width={50} height={50}/>;
        </div>
    </div> :null
}