import React from "react";
import { render, screen } from '@testing-library/react';
import {SnapImage} from '../../components/imageItem/snapImage'
describe('snapImage',()=>{
    it('if theres no src path for the image, component should not render',()=>{
        render(<SnapImage />)
        expect(screen.queryByRole('div')).toBeFalsy()
    })
    
})