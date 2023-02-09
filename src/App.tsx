import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { addTypesOfPictures } from './redux/slices/appSlice';
import { mockData } from './mockData/mockData';
import { store } from './redux/store';
import { RootNavigator } from './navigation/rootNavigator';

function App() {
  
  return (
    <RootNavigator />
  );
}

export default App;
