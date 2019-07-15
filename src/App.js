import React, { useState } from 'react';
import './App.css';
import { Form } from './components/Form'

function App() {
  const [member, setMember] = useState([])


  return (
    <div className="App">
    <Form />
    <p>{member}</p>
    </div>
  );
}

export default App;
