import './Details.css'

const Details = (props) => {
    
    return (
        <div className="users-details">
            <div className="user-details-name">{props.name}</div>
            <div className="user-details-age">{props.age}</div>
        </div>
    )
}

export default Details;