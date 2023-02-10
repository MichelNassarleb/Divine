import React, { useEffect, } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SnapItem, SnapList } from "react-snaplist-carousel";
import { Navbar } from "../components/navbar/navbar";
import { mockData } from "../mockData/mockData";
import { addTypesOfPictures } from "../redux/slices/appSlice";
import { SnapImage } from "../components/imageItem/snapImage";
import './homeScreenStyles.css'
export const HomeScreen = () =>{
    const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(addTypesOfPictures(mockData))
  },[])
 const types = useSelector((state:any)=>state.app.typesOfPictures)

  return <main style={{height:'100vh',overflow:'hidden'}}>
  <Navbar name="Divine Gerges" types={types} copyright="© Divine Gerges 2023"/>
              <SnapList direction="horizontal" className="snaplist-container">
                       <SnapItem snapAlign="center" width="340px" className="empty-div"></SnapItem>
                        {mockData.map((image,index) =>
                        <div style={{display:'block',height:'50%'}} key={index}>
                            <SnapImage image={image}  />
                            </div>
                        )}
                    </SnapList>
  </main>
}