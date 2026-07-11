export const ComicCard = (props) => {
    return (
        <div className="comic-card">
            <img src={props.comicData.thumb} alt={props.comicData.series} />
            <p>{props.comicData.series}</p>
        </div>
    );
};