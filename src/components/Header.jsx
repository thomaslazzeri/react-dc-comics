import './Header.css';

const Logo = () => (
    <img src="img/dc-logo.png" alt="Logo" />
);

const Nav = (props) => (
    <nav>
        <ul>
            {props.links.map((link) => (
                <li key={link.id}>
                    <a href="#" className={link.isActive ? 'active' : ''}>
                        {link.text}
                    </a>
                </li>
            ))}
        </ul>
    </nav>
);

export const Header = (props) => (
    <header className="header">
            <Logo />
            <Nav links={props.links} />
    </header>
);