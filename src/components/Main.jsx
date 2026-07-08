import './Main.css';
import comics from '../comics'

const FirstLine = () => (
    <>
    <div className="big-card">
            <img src="" alt="" srcset="" />
        </div>
    <div className="black-line">
        {/* <p className="content">{"-->"} Content goes here {"<--"}</p> */}
        <div className="btn-series">
            <button>Current series</button>
        </div>
        {
            comics.map(comic => (
                <div className="comic-card" key={comic.id}>
                    <img src={comic.thumb} alt="" />
                    <p>{comic.series}</p>


                </div>

            ))
        }
        <div className="btn-add">
            <button>load more</button>
        </div>
    </div>
    </>
);

const SecondLine = () => (
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

export const Main = () => (
    <main>
        <FirstLine />
        <SecondLine />
    </main>
);

