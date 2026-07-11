export const ComicCard = (props) => {
    return (
        <div className="comic-card">
            <img src={props.datiFumetto.thumb} alt={props.datiFumetto.series} />
            <p>{props.datiFumetto.series}</p>
        </div>
    );
};