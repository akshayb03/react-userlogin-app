import './App.css';
import User from './components/User';
import Details from './components/Details';

function App(props) {

  const addDetailsHandler = (details) => {
    console.log(details);
  }

  return (
    <div>
      <User onAddDetails={addDetailsHandler}></User>
      <Details></Details>
    </div>
    
  )
}

export default App;
