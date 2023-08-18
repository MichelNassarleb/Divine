import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { SnapItem, SnapList } from "react-snaplist-carousel";
import { db } from "../App";
import { SnapImage } from "../components/imageItem/snapImage";
import { Loader } from "../components/loader/loader";
import { Menu } from "../components/menu/menu";
import { Navbar } from "../components/navbar/navbar";
import { useGetImages } from "../hooks";
import { addTypesOfPictures } from "../redux/slices/appSlice";
import { AppSlice, Types } from "../redux/types/types";

export const TypeScreen = () => {
  const { type } = useParams();
  const dispatch = useDispatch();

  const fetchTypes = async () => {
    await getDocs(collection(db, "types"))
      .then((querySnapshot) => {
        const newData: { types: Types[] }[] = querySnapshot.docs
          .map((doc) => ({ ...doc.data(), id: doc.id })) as never;
        dispatch(addTypesOfPictures(newData[0].types));
      })
  }
  useEffect(() => {
    fetchTypes()
  }, []);
  const {images,isLoading} = useGetImages()

  const imagesFiltered = useMemo(() => {
    return images?.filter(
      (item) => item.type?.toLowerCase() == type?.toLowerCase()
    );
  }, [images?.length, type]);
  const types = useSelector((state: { app: AppSlice }) => state.app.typesOfPictures);

  return (
    <main style={{ height: "100vh", overflow: "hidden" }}>
      <Loader isLoading={isLoading} color="#fff" />
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
          className="empty-div"
        ></SnapItem>
        {imagesFiltered?.map((image, index) => (
          <div className="homescreen-snap-item-container" key={index}>
            <SnapImage image={image} />
          </div>
        ))}
      </SnapList>
    </main>
  );
};
