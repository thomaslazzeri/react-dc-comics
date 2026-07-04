import './Footer.css';

const FirstLine = () => (
    <div className="dark-comic">
        <div className="background-image">
            <img src="img/footer-bg.jpg" alt="image" />
        </div>
        <div className="text">
            <h2>DC COMICS</h2>
            <ul>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
            </ul>
        </div>
        <div className="text">
            <h2>DC</h2>
            <ul>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
            </ul>
        </div>
        <div className="text">
            <h2>SITES</h2>
            <ul>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
            </ul>
        </div>
        <div className="text">
            <h2>SHOP</h2>
            <ul>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
            </ul>
        </div>
        <div className="logo-dc">
            <img src="img/dc-logo-bg.png" alt="Logo" />
        </div>
    </div>
);

const SecondLine = () => (
    <div className="grey-line">
        <div className="sign">
            <button>SIGN-UP NOW!</button>
        </div>
        <div classNmae="follow">
            <button>FOLLOW US</button>
        </div>
        <div className="app">
            <img src="img/footer-facebook.png" alt="app" />
        </div>
        <div className="app">
            <img src="img/footer-twitter.png" alt="app" />
        </div>
        <div className="app">
            <img src="img/footer-youtube.png" alt="app" />
        </div>
        <div className="app">
            <img src="img/footer-pinterest.png" alt="app" />
        </div>
        <div className="app">
            <img src="img/footer-periscope.png" alt="app" />
        </div>
    </div>
);

export const Footer = () => (
    <footer>
        <FirstLine />
        <SecondLine />
    </footer>
);