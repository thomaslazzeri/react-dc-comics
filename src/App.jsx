import { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Main } from './components/Main';
import { BlueBar } from './components/BlueBar';
import comics from './comics';

const App = () => (
  <>
    <Header />
    <Main listaFumetti={comics}/>
    <BlueBar />
    <Footer />
  </>
);

export default App;
