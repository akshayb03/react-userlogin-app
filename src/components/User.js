import { useState } from 'react';
import './User.css';
import ErrorHandler from './ErrorHandler';

const User = (props) => {

    const [enteredName, setEnteredName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    let [errorContent, setErrorContent] = useState('Error');

    const submitHandler = (event) => {
        event.preventDefault();
        const Data = {
            userName:enteredName,
            userAge:enteredAge
        }

        if (!Data.userAge || Data.userName.length===0) {
            console.log('Inside');
            setErrorContent('New Error');
            return;
        }
        props.onAddDetails(Data);
        // console.log(Data);
        setEnteredName('');
        setEnteredAge('');

    }

    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
        // console.log(event.target.value);
    }

    const ageChangeHandler =(event) => {
        setEnteredAge(event.target.value);
        // console.log(event.target.value);
    }

    console.log(errorContent);
    return (
        <div>
            <div>{errorContent}</div>
            <form onSubmit={submitHandler}>
                <div className="form-control">
                    <div className="form-control-input">
                        <label>Name</label>
                        <input type="text" value={enteredName} onChange={nameChangeHandler}/><br></br>
                    </div>
                    <div className="form-control-input">
                        <label>Age</label>
                        <input type="number" value={enteredAge} onChange={ageChangeHandler}/><br></br><br></br>
                    </div>
                    <div className="form-control-button">
                        <button type="submit">Add</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default User;