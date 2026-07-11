import { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Main } from './components/Main';
import { BlueBar } from './components/BlueBar';
import comics from './comics';

const navLinks = [
    { id: 1, text: "CHARACTERS", isActive: false },
    { id: 2, text: "COMICS", isActive: true },
    { id: 3, text: "MOVIES", isActive: false },
    { id: 4, text: "TV", isActive: false },
    { id: 5, text: "GAMES", isActive: false },
    { id: 6, text: "COLLECTIBLES", isActive: false },
    { id: 7, text: "VIDEOS", isActive: false },
    { id: 8, text: "FANS", isActive: false },
    { id: 9, text: "NEWS", isActive: false },
    { id: 10, text: "SHOP", isActive: false },
];

const App = () => (
  <>
    <Header links={navLinks}/>
    <Main listaFumetti={comics}/>
    <BlueBar />
    <Footer />
  </>
);

export default App;
