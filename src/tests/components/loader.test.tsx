import React from "react";
import {render, screen } from '@testing-library/react';
import { Loader } from "../../components/loader/loader";


describe('<Loader/>',()=>{
    it('if loading is false, should not show component',()=>{
        render(<Loader />)
        expect(screen.queryByRole('dialog')).toBeFalsy()
    })
    it('if loading is false, should not show component', async ()=>{
        await render(<Loader isLoading={true} />)
        expect(screen.queryByRole('dialog')).toBeTruthy()
    })
})