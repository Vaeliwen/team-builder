import React, { useState } from 'react';
import './App.css';

function App() {
  const [member, setMember] = useState([])

  return (
    <div className="App">
    <p>{member}</p>
    </div>
  );
}

export default App;
