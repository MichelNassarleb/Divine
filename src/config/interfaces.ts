export interface NavbarProps{
    name:string;
    types:Array<string>;
    copyright:string;
}

export interface SnapImageProps{
    key?:number;
    image:{
        uri?:string;
        text?:string;
    }

}
export interface MenuProps{
    name?:string;
    types:Array<string>;
    copyright?:string;
    isOpened?:boolean;
}