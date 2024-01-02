
import './App.css';
import Form from './components/Form';
import { useState } from 'react';
function App() {
  const[note,setNotes]=useState([])
  const [showForm, setShowForm]=useState(false)
  return (
    <div className="App">
     
      { showForm && <Form />}

      <button className='show-btn' onClick={()=> setShowForm((prev)=>!prev)}>
        {showForm? 'hide' : 'show'}
      </button>
    </div>
  );
}

export default App;
