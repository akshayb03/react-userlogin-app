import './DetailsArray.css'
import Details from './Details'

const DetailsArray = (props) => {
    return (
        <div>
            {props.userDetails.map((user) => {
            return (
                <Details name={user.userName} age={user.userAge}></Details>
            )
        })}
        </div>
    )
}

export default DetailsArray;