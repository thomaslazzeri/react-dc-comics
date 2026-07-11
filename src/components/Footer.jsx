import './Footer.css';

const FirstLine = (props) => (
    <div className="dark-comic">
        <div className="background-image"></div>

        {props.columns.map((column) => (
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

const SecondLine = (props) => (
    <div className="grey-line">
        <div className="sign">
            <button>SIGN-UP NOW!</button>
        </div>
        <div className="social-box">
            <div className="follow">
                <button>FOLLOW US</button>
            </div>
            {props.socials.map((icon, index) => (
                <div className="app" key={index}>
                    <img src={`img/${icon}`} alt="social icon" />
                </div>
            ))}
        </div>
    </div>
);

export const Footer = (props) => (
    <footer>
        <FirstLine columns={props.columns} />
        <SecondLine socials={props.socials} />
    </footer>
);