import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [users, setUsers] = useState(0);
  const [state,setState] = useState(false);
  const [names, setNames] = useState(Array(users).fill(''));
  
  const handleChange = (e) => {  
    setUsers(Number(e.target.value));
    setNames(Array(Number(e.target.value)).fill(''));
  }

  const stateManagement = () =>{
   setState(true); 
  }

  const handleNameChange = (index , e) => {
    const newNames = [...names];
    newNames[index] = e.target.value;
    setNames(newNames);
  }

  const handleSubmit = () =>{
    console.log("Entered Names : ",names);
  }

  return (
    <>
      <div className="players">
        <h1>Typing Tester</h1>
        {!state && <div className="total-users">
          <input 
          type="number" 
          // value={users}
          min={1}
          max={5}
          placeholder='Enter Number of Players'
          onChange={handleChange}
          />
          <button onClick={stateManagement}>Start</button>
        </div> 
        }
          </div>
          
          
          {state && <div className="playerInfo">
            {([...Array(users)]).map((_,index) => (
              <div key={index}>
            <p>Player {index + 1}</p>
            <input type="text" placeholder='Enter Name' value={names[index]} onChange={(e) => handleNameChange(index , e)}/>
          </div>
        ))}
        <button onClick={handleSubmit}>Go</button>
      </div>}
    </>
  )
}

export default App
