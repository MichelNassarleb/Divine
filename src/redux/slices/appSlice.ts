import { createSlice } from "@reduxjs/toolkit"

const initialState:{
    typesOfPictures:Array<string>;
} = {
   typesOfPictures:[]
    
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers:{
        addTypesOfPictures(state,{payload}){
           payload.map((item:{name:string;type:string})=>{
           const findMatches =  state?.typesOfPictures?.filter((type)=>type == item?.type)
           if(findMatches.length == 0){
            state.typesOfPictures.push(item?.type)
           }
           })
        }
    }
})

export const {
    addTypesOfPictures
} = appSlice.actions

export default appSlice.reducer