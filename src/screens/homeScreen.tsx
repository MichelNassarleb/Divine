import { useSelector } from "react-redux";
import { SnapItem, SnapList } from "react-snaplist-carousel";
import { Navbar } from "../components/navbar/navbar";
import { SnapImage } from "../components/imageItem/snapImage";
import "./homeScreenStyles.css";
import { Menu } from "../components/menu/menu";
import { Loader } from "../components/loader/loader";
import { useGetImages, useGetTypes } from "../hooks";
export const HomeScreen = () => {
  useGetTypes()
  const types = useSelector((state: any) => state.app.typesOfPictures);


  const {isLoading,images}  = useGetImages();

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
        {images?.map((image, index) => (
          <div className="homescreen-snap-item-container" key={index}>
            <SnapImage image={image} />
          </div>
        ))}
      </SnapList>
    </main>
  );
};
