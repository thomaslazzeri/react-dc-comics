import './BlueBar.css';

const BlueLine = (props) => (
    <div className="blue-line">
        {props.items.map((item) => (
            <div className="shop-item" key={item.id}>
                <img src={item.img} alt={item.text} />
                <span>{item.text}</span>
            </div>
        ))}
    </div>
);

export const BlueBar = (props) => (
    <main>
        <BlueLine items={props.items} />
    </main>
);