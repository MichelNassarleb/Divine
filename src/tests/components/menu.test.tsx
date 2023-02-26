import React from "react";
import { render, screen } from '@testing-library/react';
import { Menu } from "../../components/menu/menu";
import { Route, Routes } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";


describe('<Menu />',()=>{
it('If is opened is false, should not show document',()=>{
    render(
        <Router>
        <Menu types={[]} isOpened={false}/>
        </Router>)
    expect(screen?.queryByRole('contentinfo'))?.toBeFalsy()
})
it('If is opened is true, should show document',()=>{
    render(
        <Router>
        <Menu types={[]} isOpened={true}/>
        </Router>)
    expect(screen.queryAllByRole('contentinfo')).toBeTruthy()
})
it('If is opened is true, should show document',()=>{
    render(
        <Router>
        <Menu types={[]} isOpened={true}/>
        </Router>)
    expect(screen.queryAllByRole('contentinfo')).toBeTruthy()
})
it('If types is an empty array, should not show links',()=>{
    render(
        <Router>
        <Menu types={[]} isOpened={true}/>
        </Router>)
    expect(screen?.queryAllByRole('alert')).toMatchObject([])
})
it('If types is a filled array, should  show links',()=>{
    render(
        <Router>
        <Menu types={['test','test2']} isOpened={true}/>
        </Router>)
    expect(screen?.queryAllByRole('alert')).toBeTruthy()
    expect(screen?.queryAllByText('test')).toBeTruthy()
})
})