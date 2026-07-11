import './Main.css';
import { ComicCard } from './ComicCard';

const BlackLine = (props) => (
    <>
        <div className="big-card"></div>
        <div className="black-line">
            <div className="btn-series">
                <button>Current series</button>
            </div>

            <div className="comics-grid">
                {
                    props.listaFumetti.map(singleComic => (
                        <ComicCard 
                            key={singleComic.id} 
                            datiFumetto={singleComic}
                        />
                    ))
                }
            </div>
            <div className="btn-add">
                <button>load more</button>
            </div>
        </div>
    </>
);

export const Main = (props) => (
    <main>
        <BlackLine listaFumetti={props.listaFumetti} />
    </main>
);