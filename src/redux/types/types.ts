
export type Types = 'Portrait' | 'Nightlife' | 'Love'


export type ImagesData = {
    type:'Portrait' | 'Nightlife' | 'Love',
    uri:string
}[] | undefined


export type AppSlice = {
    typesOfPictures:Types[];
    data:ImagesData
}