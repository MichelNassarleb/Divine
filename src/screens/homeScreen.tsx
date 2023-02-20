import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SnapItem, SnapList } from "react-snaplist-carousel";
import { Navbar } from "../components/navbar/navbar";
import { mockData } from "../mockData/mockData";
import { addTypesOfPictures } from "../redux/slices/appSlice";
import { SnapImage } from "../components/imageItem/snapImage";
import "./homeScreenStyles.css";
import { Menu } from "../components/menu/menu";
import { Loader } from "../components/loader/loader";
export const HomeScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addTypesOfPictures(mockData));
  }, []);
  const types = useSelector((state: any) => state.app.typesOfPictures);
  const [isLoading,setIsLoading] = useState(true)

  useEffect(()=>{
setTimeout(() => {
  setIsLoading(false)
}, 5000);
  },[])
  return (
    <main style={{ height: "100vh", overflow: "hidden"}}>
      <Loader color="#fff" isLoading={isLoading}/>
      <Navbar
        name="Divine Gerges"
        types={types}
        copyright="© Divine Gerges 2023"
      />
      <Menu
        name="Divine Gerges"
        types={types}
        copyright="© Divine Gerges 2023"
      />
      <SnapList
        tabIndex={0}
        direction="horizontal"
        className="snaplist-container"
      >
        <SnapItem
          snapAlign="none"
          className="empty-div"
        ></SnapItem>
        {mockData.map((image, index) => (
          <div className="homescreen-snap-item-container" key={index}>
            <SnapImage image={image} />
          </div>
        ))}
      </SnapList>
    </main>
  );
};
