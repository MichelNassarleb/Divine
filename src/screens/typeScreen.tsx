import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { SnapItem, SnapList } from "react-snaplist-carousel";
import { SnapImage } from "../components/imageItem/snapImage";
import { Loader } from "../components/loader/loader";
import { Menu } from "../components/menu/menu";
import { Navbar } from "../components/navbar/navbar";
import { mockData } from "../mockData/mockData";
import { addTypesOfPictures } from "../redux/slices/appSlice";

export const TypeScreen = () => {
  const { type } = useParams();
  console.log(type);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addTypesOfPictures(mockData));
  }, []);
  const mockDataFiltered = useMemo(() => {
    return mockData.filter(
      (item) => item.type?.toLowerCase() == type?.toLowerCase()
    );
  }, [mockData.length, type]);
  const types = useSelector((state: any) => state.app.typesOfPictures);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 5000);
  }, [type])
  return (
    <main style={{ height: "100vh", overflow: "hidden" }}>
      <Loader isLoading={isLoading}/>
      <Navbar
        name="Divine Gerges"
        types={types?.filter((item: string) => item != type)}
        copyright="© Divine Gerges 2023"
      />
      <Menu
        name="Divine Gerges"
        types={types?.filter((item: string) => item != type)}
        copyright="© Divine Gerges 2023"
      />
      <SnapList direction="horizontal" className="snaplist-container">
        <SnapItem
          snapAlign="none"
          width="340px"
          className="empty-div"
        ></SnapItem>
        {mockDataFiltered.map((image, index) => (
          <div className="homescreen-snap-item-container" key={index}>
            <SnapImage image={image} />
          </div>
        ))}
      </SnapList>
    </main>
  );
};
