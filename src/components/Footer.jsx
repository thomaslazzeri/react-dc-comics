import './Footer.css';

const footerColumns = [
    {
        id: 1,
        sections: [
            {
                title: "DC COMICS",
                links: ["Characters", "Comics", "Movies", "TV", "Games", "Videos", "News"]
            },
            {
                title: "SHOP",
                links: ["Shop DC", "Shop DC Collectibles"]
            }
        ]
    },
    {
        id: 2,
        sections: [
            {
                title: "DC",
                links: ["Terms Of Use", "Privacy policy (New)", "Ad Choices", "Advertising", "Jobs", "Subscriptions", "Talent Workshops", "CPSC Certificates", "Ratings", "Shop Help", "Contact Us"]
            }
        ]
    },
    {
        id: 3,
        sections: [
            {
                title: "SITES",
                links: ["DC", "MAD Magazine", "DC Kids", "DC Universe", "DC Power Visa"]
            }
        ]
    }
];

const socialIcons = [
    "footer-facebook.png",
    "footer-twitter.png",
    "footer-youtube.png",
    "footer-pinterest.png",
    "footer-periscope.png"
];

const FirstLine = () => (
    <div className="dark-comic">
        <div className="background-image"></div>

        {footerColumns.map((column) => (
            <div className="text" key={column.id}>

                {column.sections.map((section, secIndex) => (
                    <div key={secIndex}>
                        <h2>{section.title}</h2>
                        <ul>
                            {section.links.map((link, linkIndex) => (
                                <li key={linkIndex}>
                                    <a href="#">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        ))}

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
        <div className="social-box">
            <div className="follow">
                <button>FOLLOW US</button>
            </div>
            {socialIcons.map((icon, index) => (
                <div className="app" key={index}>
                    <img src={`img/${icon}`} alt="social icon" />
                </div>
            ))}
        </div>
    </div>
);

export const Footer = () => (
    <footer>
        <FirstLine />
        <SecondLine />
    </footer>
);