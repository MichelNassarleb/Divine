import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../App";
import { saveImagesData } from "../redux/slices/appSlice";
import { AppSlice, ImagesData } from "../redux/types/types";

const useGetImages = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [images, setImages] = useState<ImagesData>([])
    const dispatch = useDispatch();
    const imagesRedux = useSelector((state: {app:AppSlice}) => state.app.data);

    const q = query(collection(db, "images"));
    const fetchPost = async () => {
        setIsLoading(true)
        await getDocs(collection(db, "images"))
            .then((querySnapshot) => {
                const newData: { ajt: ImagesData }[] = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id })) as never;
                dispatch(saveImagesData(newData[0]?.ajt))
                setImages(newData[0]?.ajt)
                setIsLoading(false)
            }).catch(
                () => {
                    setIsLoading(false)
                    alert('An error occured')
                }
            )
    }
    useEffect(() => {
      imagesRedux?.length ? setImages(imagesRedux) : fetchPost()
    }, [])
    return {
        images,
        isLoading
    }
}

export default useGetImages;