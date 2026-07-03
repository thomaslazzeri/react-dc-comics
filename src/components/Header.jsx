import './Header.css';

const Logo = () => (
    <img src="public/img/dc-logo-bg.png." alt="Logo" />
)
const Nav = () => (
    <nav>
        <ul>
            <li>
                <a href="#">CHARACTERS</a>
                <a href="#" className='active'>COMICS</a>
                <a href="#">MOVIES</a>
                <a href="#">TV</a>
                <a href="#">GAMES</a>
                <a href="#">COLLECTIBLES</a>
                <a href="#">VIDEOS</a>
                <a href="#">FANS</a>
                <a href="#">NEWS</a>
                <a href="#">SHOP</a>
            </li>
        </ul>
    </nav>
)

export const Header = () => (
<header>
    <Logo />
    <Nav />
</header>
);
