import React from "react";
import {render, screen } from '@testing-library/react';
import { Navbar } from "../../components/navbar/navbar";


describe('<Loader />',()=>{
    it('if name prop is not defined, should not show name text',()=>{
        render(<Navbar name={''} types={[]} copyright={''}/>)
        expect(screen.queryByRole('definition')).toBeFalsy()
        expect(screen.queryByRole('article')).toBeFalsy()
    })
    it('if name prop is defined, should show name text',()=>{
        render(<Navbar name={'test'} types={[]} copyright={''}/>)
        expect(screen.queryByRole('definition')).toBeTruthy()
    })
    it('if copyright prop is defined, should show copyright text',()=>{
        render(<Navbar name={''} types={[]} copyright={'test'}/>)
        expect(screen.queryByRole('article')).toBeTruthy()
    })
    it('if name and copyright props are defined, should show the correct text',()=>{
        render(<Navbar name={'test1'} types={[]} copyright={'test'}/>)
        expect(screen.queryByText('test1')).toBeTruthy()
        expect(screen.queryByText('test')).toBeTruthy()
    })
})