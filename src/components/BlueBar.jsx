import './BlueBar.css';

const BlueLine = () => (
    <div className="blue-line">
        <div className="shop-item">
            <img src="img/buy-comics-digital-comics.png" alt="image" />
            <span>DIGITAL COMICS</span>
        </div>
        <div className="shop-item">
            <img src="img/buy-comics-merchandise.png" alt="image" />
            <span>DC MERCHANDISE</span>
        </div>
        <div className="shop-item">
            <img src="img/buy-comics-subscriptions.png" alt="image" />
            <span>SUBSCRIPTION</span>
        </div>
        <div className="shop-item">
            <img src="img/buy-comics-shop-locator.png" alt="image" />
            <span>COMIC SHOP LOCATOR</span>
        </div>
        <div className="shop-item">
            <img src="img/buy-dc-power-visa.svg" alt="image" />
            <span>DC POWER VISA</span>
        </div>
    </div>
);
export const BlueBar = () => (
    <main>
        <BlueLine />
    </main>
);
