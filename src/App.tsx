import React from 'react';

import './App.css';
import { RootNavigator } from './navigation/rootNavigator';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { firebaseConfig } from './config/firebaseConfig';
import {getFirestore} from 'firebase/firestore'

function App() {
  
  return (
    <RootNavigator />
  );
}

export default App;



const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)