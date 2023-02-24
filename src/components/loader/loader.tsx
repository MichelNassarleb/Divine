import React, { FC } from "react";
import { CircleLoader } from "react-spinners";
import './loaderStyles.css'

export const Loader:FC<{isLoading?:boolean,color?:string}> = (props) =>{

    return props?.isLoading ? <div role={'dialog'} className="loader-container" style={props?.isLoading ? {zIndex:100} : {display:'none'}}>
        <CircleLoader color={props?.color}/>
    </div> :null
}