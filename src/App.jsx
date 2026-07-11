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

const shopItems = [
    { id: 1, text: "DIGITAL COMICS", img: "img/buy-comics-digital-comics.png" },
    { id: 2, text: "DC MERCHANDISE", img: "img/buy-comics-merchandise.png" },
    { id: 3, text: "SUBSCRIPTION", img: "img/buy-comics-subscriptions.png" },
    { id: 4, text: "COMIC SHOP LOCATOR", img: "img/buy-comics-shop-locator.png" },
    { id: 5, text: "DC POWER VISA", img: "img/buy-dc-power-visa.svg" },
];

const App = () => (
  <>
    <Header links={navLinks}/>
    <Main comicsList={comics}/>
    <BlueBar items={shopItems} />
    <Footer />
  </>
);

export default App;