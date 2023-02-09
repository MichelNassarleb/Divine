import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar } from "../components/navbar/navbar";
import { mockData } from "../mockData/mockData";
import { addTypesOfPictures } from "../redux/slices/appSlice";


export const HomeScreen = () =>{
    const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(addTypesOfPictures(mockData))
  },[])
 const types = useSelector((state:any)=>state.app.typesOfPictures)
  return <>
  <Navbar name="Divine Gerges" types={types} copyright="© Divine Gerges 2023"/>
  </>
}