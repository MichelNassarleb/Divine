import React from "react";
import { render, screen } from '@testing-library/react';
import {SnapImage} from '../../components/imageItem/snapImage'
describe('snapImage',()=>{
    it('if theres no src path for the image, component should not render',()=>{
        render(<SnapImage />)
        expect(screen.queryByRole('img')).toBeFalsy()
    })
    it('if theres  src path for the image, component should render',()=>{
        render(<SnapImage image={{name:'./asf',}}/>)
        expect(screen.queryByRole('img')).toBeTruthy()
    })
    it('if theres no image text, text should not show',()=>{
        render(<SnapImage image={{name:'./asf',}}/>)
        expect(screen.queryByRole('paragraph')).toBeFalsy()
        expect(screen.queryByRole('img')).toBeTruthy()
    })
    it('if theres image text, text should show',()=>{
        render(<SnapImage image={{name:'./asf',text:'test'}}/>)
        expect(screen.queryByText('test')).toBeTruthy()
        expect(screen.queryByRole('img')).toBeTruthy()
    })
})