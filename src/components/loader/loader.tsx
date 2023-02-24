import React, { FC } from "react";
import { CircleLoader } from "react-spinners";
import './loaderStyles.css'

export const Loader:FC<{isLoading?:boolean,color?:string}> = (props) =>{

    return props?.isLoading ? <div role={'dialog'} className="loader-container">
        <CircleLoader color={props?.color}/>
    </div> : null
}