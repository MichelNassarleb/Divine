import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { mockData } from "../mockData/mockData";
import { addTypesOfPictures } from "../redux/slices/appSlice";


export const HomeScreen = () =>{
    const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(addTypesOfPictures(mockData))
  },[])
 
  return <Link to={'/type/COMISSION'} children={'ew'}/>
}