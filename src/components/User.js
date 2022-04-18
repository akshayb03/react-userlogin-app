import { useState } from 'react';
import './User.css';
import ErrorHandler from './ErrorHandler';

const User = (props) => {

    const [enteredName, setEnteredName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [isValidName, setIsValidName] = useState(true);
    const [isValidAge, setIsValidAge] = useState(true);

    let [errorContent, setErrorContent] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();
        setErrorContent('');
        const Data = {
            userName:enteredName,
            userAge:enteredAge
        }

        if (!Data.userAge || Data.userName.length===0) {
            // console.log('Inside');
            setErrorContent(<ErrorHandler name={Data.userName} age={Data.userAge}></ErrorHandler>);
            setEnteredName('');
            setEnteredAge('');
            setIsValidAge(true);
            setIsValidName(true);
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
        if(event.target.value.length === 0) {
            setIsValidName(false);
        }
        else{
            setIsValidName(true);
        }
        setErrorContent('');
    }

    const ageChangeHandler =(event) => {
        setEnteredAge(event.target.value);
        // console.log(event.target.value);
        if(event.target.value.length === 0) {
            setIsValidAge(false);
        }
        else{
            setIsValidAge(true);
        }
        setErrorContent('');
    }
    return (
        <div>
            <div>{errorContent}</div>
            <form onSubmit={submitHandler}>
                <div className="form-control">
                    <div className="form-control-input">
                        <label style={{color:!isValidName?'red':'black'}}>Name</label>
                        <input style={{backgroundColor:!isValidName?'salmon':'transparent'}} type="text" value={enteredName} onChange={nameChangeHandler}/><br></br>
                    </div>
                    <div className="form-control-input">
                        <label style={{color:!isValidAge?'red':'black'}}>Age</label>
                        <input style={{backgroundColor:!isValidAge?'salmon':'transparent'}} type="number" value={enteredAge} onChange={ageChangeHandler}/><br></br><br></br>
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