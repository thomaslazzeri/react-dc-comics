import './Main.css';
import comics from '../comics'

const BlackLine = () => (
    <>
        <div className="big-card">
        </div>
        <div className="black-line">
            {/* <p className="content">{"-->"} Content goes here {"<--"}</p> */}
            <div className="btn-series">
                <button>Current series</button>
            </div>

            <div className="comics-grid">
                {
                    comics.map(comic => (
                        <div className="comic-card" key={comic.id}>
                            <img src={comic.thumb} alt="" />
                            <p>{comic.series}</p>
                        </div>

                    ))
                }
            </div>
            <div className="btn-add">
                <button>load more</button>
            </div>
        </div>
    </>
);

export const Main = () => (
    <main>
        <BlackLine />
    </main>
);

