import "./styles/home.css"
const EventCard = (props) => {
    console.log(props)
    const { onDelete } = props;
    return (
        <>
            <div className="card">
                <h2>{props.event.title}</h2>
                <p>{props.event.description}</p>
                <div>
                    <button type="button" className="delete" onClick={onDelete}>DELETE</button>
                </div>
            </div>
            <br></br>
        </>
    )
};

export default EventCard;