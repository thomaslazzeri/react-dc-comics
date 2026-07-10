/* import './Header.css';


const Logo = () => (
    <img src="img/dc-logo.png" alt="Logo" />
);

const Nav = () => (
    <nav>
        <ul>
            <li><a href="#">CHARACTERS</a></li>
            <li><a href="#" className='active'>COMICS</a></li>
            <li><a href="#">MOVIES</a></li>
            <li><a href="#">TV</a></li>
            <li><a href="#">GAMES</a></li>
            <li><a href="#">COLLECTIBLES</a></li>
            <li><a href="#">VIDEOS</a></li>
            <li><a href="#">FANS</a></li>
            <li><a href="#">NEWS</a></li>
            <li><a href="#">SHOP</a></li>
        </ul>
    </nav>
);

export const Header = () => (
    <header>
        <Logo />
        <Nav />
    </header>
);
 */

import './Header.css';

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

const Logo = () => (
    <img src="img/dc-logo.png" alt="Logo" />
);

const Nav = () => (
    <nav>
        <ul>
            {navLinks.map((link) => (
                <li key={link.id}>
                    <a 
                        href="#" 
                        className={link.isActive ? 'active' : ''}
                    >
                        {link.text}
                    </a>
                </li>
            ))}
        </ul>
    </nav>
);

export const Header = () => (
    <header>
        <Logo />
        <Nav />
    </header>
);