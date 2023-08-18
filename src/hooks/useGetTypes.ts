import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { db } from "../App";
import { addTypesOfPictures } from "../redux/slices/appSlice";
import { Types } from "../redux/types/types";

const useGetTypes = () =>{
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
}

export default useGetTypes;