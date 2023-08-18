import { createSlice } from "@reduxjs/toolkit"
import { AppSlice, ImagesData, Types } from "../types/types";


const initialState:AppSlice = {
   typesOfPictures:[],
   data:[]
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers:{
        addTypesOfPictures(state,{payload}:{payload:Types[]}){
           state.typesOfPictures = payload
        },
        saveImagesData(state,{payload}:{payload:ImagesData}){
            state.data = payload
        }
    }
})

export const {
    addTypesOfPictures,
    saveImagesData
} = appSlice.actions

export default appSlice.reducer