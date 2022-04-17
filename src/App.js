import './App.css';
import User from './components/User';
import DetailsArray from './components/DetailsArray';
import { useState } from 'react';

function App(props) {

  const [details, setDetails] = useState([]);

  const addDetailsHandler = (details) => {
    setDetails(prevData => {
      return(
      [details, ...prevData]
      )
    });
  }

  return (
    <div>
      <User onAddDetails={addDetailsHandler}></User>
      <DetailsArray userDetails={details}></DetailsArray>
    </div>
    
  )
}

export default App;
